<script lang="ts" setup>
import { useHead } from '#app';
import Prism from 'prismjs';
import '@/assets/css/prism-nord.css';
import { onMounted } from 'vue';

useHead({
  htmlAttrs: {
    class: 'font-main text-slate-600'
  },
  bodyAttrs: {
    class: 'bg-[#002d3c]'
  },
  script: [
    {
      src: 'https://buttons.github.io/buttons.js',
      async: true,
      defer: true
    }
  ]
});

onMounted(() => {
  window.Prism = window.Prism || {};
  window.Prism.manual = true;
  Prism.highlightAll();
});
</script>

<template>
  <div>
    <Html>
      <Head>
        <Title>Nuxt Float Label</Title>
        <Meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <Meta name="robots" content="index, follow" />
        <Meta name="language" content="en" />
        <Meta property="og:image" content="/meta-image.png" />
      </Head>
    </Html>

    <HeaderUi />

    <div>
      <NuxtPage />
    </div>

    <FooterUi />
  </div>
</template>
