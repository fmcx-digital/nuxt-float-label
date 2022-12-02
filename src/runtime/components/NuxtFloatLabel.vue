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
  },
  dispatch: {
    type: Boolean,
    default: false
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

const dispatchInput = () => (isActive.value = true);

if (props.dispatch) dispatchInput();

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
      <label
        class="fl-label"
        :class="[{ 'fl-on-focus': isFocused, 'fl-on-input': isActive }, labelClass]"
        >{{ floatLabel }}</label
      >
    </ClientOnly>
    <slot />
  </div>
</template>
