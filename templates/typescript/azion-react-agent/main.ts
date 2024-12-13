import type { CustomEvent, Message } from "./src/types";
import { graph } from "./src/graph";
import { respond2User, 
  processEventStream, 
  createTransformStream, 
  transformToChatCompletions, 
  validateRequestBody, 
  validateStreamForErrors} from "./src/helper/utils";
import { v4 as uuidv4 } from 'uuid';
import { AzionEdgeTracer } from './src/helper/tracer';

/**
 * @param {CustomEvent} event - The event object containing the request.
 * @returns {Promise<Response>} A Promise that resolves to a Response object.
 */
export default async function main(
  event: CustomEvent
): Promise<Response> {
  // Get the request from the event
  const request = event.request;

  // Return early if not a POST request
  if (request.method != 'POST') {
    return await respond2User(request.method);
  }

  // Validate the request body
  const { parsedBody, error } = await validateRequestBody(request);

  // Return error response if validation failed
  if (error) {
    console.error("Error parsing body: ", error)
    return await respond2User('POST',JSON.stringify(error), true);
  }

  // Extract messages and stream flag from parsed body
  const { messages, stream } = parsedBody;
  // Generate unique run ID
  const runId = uuidv4();

  // Handle streaming vs non-streaming responses
  if (stream) {
    return streamGraph(messages, runId);
  } 

  return invokeGraph(messages, runId);
}

/**
 * @param {string[]} messages - The messages to stream the graph with.
 * @returns {Promise<Response>} A Promise that resolves to a Response object.
 */
async function streamGraph(
  messages: Message[],
  runId: string
): Promise<Response> {
  let tracer = new AzionEdgeTracer('stream')
  try {
    // Update the tracer with the input messages
    tracer.updateInput(messages, runId)

    // Stream the events from the graph
    const eventStreams = graph.streamEvents({ messages }, { version: "v2" });

    // Since the response body cannot be consumed more than once, we need to split the stream into two streams
    const [userEventStream, dbStream] = eventStreams.tee();

    // Process the user stream to ensure the response in the wanted format
    const { readable, writer, encoder } = createTransformStream();

    processEventStream(userEventStream, writer, encoder, runId);

    // Check if the stream contains an error
    const validStream = await validateStreamForErrors(readable);

    // Process the db stream to update the tracer
    tracer.run(dbStream);

    // Return the response to the user
    return await respond2User('POST', validStream);
  } catch (error) {
    const errorMessage = "Error streaming graph: " + error
    console.error(errorMessage)
    return await respond2User('POST', errorMessage, true);
  }
}

/**
 * @param {string[]} messages - The messages to invoke the graph with.
 * @returns {Promise<Response>} A Promise that resolves to a Response object.
 */
async function invokeGraph(
  messages: Message[],
  runId: string
): Promise<Response> {
  let tracer = new AzionEdgeTracer('invoke')
  try {
    // Update the tracer with the input messages
    tracer.updateInput(messages, runId)

    // Invoke the graph
    const invokeResponse = await graph.invoke({ messages });

    // Update the tracer with the output messages
    tracer.run(invokeResponse.messages)
    
    // Transform the output messages to the wanted format
    const chatCompletions = transformToChatCompletions(invokeResponse.messages.at(-1), runId, false);

    // Return the response to the user
    return await respond2User('POST', `data:{${JSON.stringify(chatCompletions)}}`);
    
  } catch (error) {
    const errorMessage = "Error invoking graph: " + JSON.stringify(error)
    console.error(errorMessage)
    return await respond2User('POST', errorMessage, true);
  }
}