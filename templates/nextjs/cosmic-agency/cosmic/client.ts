import { createBucketClient } from "@cosmicjs/sdk";

// Make sure to add/update your ENV variables
export const cosmic = createBucketClient({
  bucketSlug: process.env.AGENCY_COSMIC_BUCKET_SLUG || "AGENCY_COSMIC_BUCKET_SLUG",
  readKey: process.env.AGENCY_COSMIC_READ_KEY || "AGENCY_COSMIC_READ_KEY",
  writeKey: process.env.AGENCY_COSMIC_WRITE_KEY || "AGENCY_COSMIC_WRITE_KEY",
});
