<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  language: {
    type: String
  },
  code: {
    type: String,
    required: true
  }
});

const language = computed(() => props.language || 'html');
</script>

<template>
  <div>
    <pre :class="`language-${language}`"><code>{{code}}</code></pre>
  </div>
</template>
