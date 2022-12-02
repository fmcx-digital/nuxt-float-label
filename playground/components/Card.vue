<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div>
    <div>
      <h3>{{ title }}</h3>
    </div>
    <slot />
  </div>
</template>
