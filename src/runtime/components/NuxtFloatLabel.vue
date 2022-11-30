<style lang="postcss">
.fl-wrapper {
  position: relative;
  width: 100%;

  input,
  select {
    padding: 0 10px;
  }

  textarea {
    padding: 10px;
  }

  label {
    display: block;
  }

  input,
  select,
  textarea {
    box-sizing: border-box;
    transition: colors, padding 0.2s;
    height: 44px;
    background: #ddd;
    border: none;
    width: 100%;
  }
}

.fl-label {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 10px;
  right: 0;
  transition: opacity, top 0.2s;
  font-size: 13px;
}
.fl-on-input {
  top: 4px;
  opacity: 0.5;
}

.fl-on-input + input,
.fl-on-input + textarea,
.fl-on-input + select {
  font-size: 12px;
  padding-top: 12px;
}
</style>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, Ref, ref } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  labelClass: {
    type: String,
    default: ''
  }
});

const refEl = ref(null) as Ref<HTMLElement | null>;

const el = ref();
const elType = ref('');

const isFocused = ref(false);
const isActive = ref(false);

const floatLabel = computed(() => {
  if (props.label) return props.label;

  switch (elType.value) {
    case 'input':
    case 'textarea':
      return el.value?.placeholder;
    case 'select':
      return el.value?.querySelector('option[disabled][selected]')?.innerHTML;
    default:
      return '';
  }
});

const updateIsFocused = (e: Event) => {
  if (!floatLabel.value) return;
  isFocused.value = e.target === document.activeElement && isActive.value;
};
const updateIsActive = (e: Event) => {
  if (!floatLabel.value) return;
  const target = e.target as HTMLInputElement;
  isActive.value = !!target.value;
};

onMounted(() => {
  el.value = refEl.value?.querySelector('input, textarea, select');

  el.value.addEventListener('input', updateIsActive);
  el.value.addEventListener('input', updateIsFocused);
  el.value.addEventListener('blur', updateIsFocused);
  el.value.addEventListener('focus', updateIsFocused);

  elType.value = el.value.tagName.toLowerCase();
});

onBeforeUnmount(() => {
  el.value.removeEventListener('input', updateIsActive);
  el.value.removeEventListener('input', updateIsFocused);
  el.value.removeEventListener('blur', updateIsFocused);
  el.value.removeEventListener('focus', updateIsFocused);
});
</script>

<template>
  <div ref="refEl" class="fl-wrapper">
    <ClientOnly>
      <label class="fl-label" :class="{ 'fl-on-focus': isFocused, 'fl-on-input': isActive }">{{
        floatLabel
      }}</label>
    </ClientOnly>
    <slot />
  </div>
</template>
