<!-- src/components/welcome.vue -->
<template>
  <div>
    <h1 class="font-roboto text-3xl font-medium leading-9 text-center break-all">
      <template v-if="!props.title">
        Welcome to <span class="text-orange-500"> Azion Copilot! </span>
      </template>
      <template v-else>
        {{ props.title }}
      </template>
    </h1>
    <p class="text-center text-2xl text-color-secondary mt-2">
      {{ props.subTitle }}
    </p>
  </div>
</template>
<script setup>
  const props = defineProps({
    title: String,
    subTitle: {
      type: String,
      default: 'How can I help you today?'
    }
  })
</script>
