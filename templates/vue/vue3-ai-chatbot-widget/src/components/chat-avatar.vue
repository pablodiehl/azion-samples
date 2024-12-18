<!-- src/components/avatar.vue -->
<template>
  <component
    :is="avatarComponent"
    class="avatar min-h-max min-w-max"
  />
</template>

<script setup>
  import DefaultAvatar from '../assets/icons/icon-azion-ai.vue'

  defineOptions({
    name: 'chat-avatar'
  })

  defineProps({
    avatarComponent: {
      type: [String, Object],
      default: DefaultAvatar
    }
  })
</script>
