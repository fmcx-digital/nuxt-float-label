import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: ['../src/module', '@nuxtjs/tailwindcss', '@nuxt/content'],
  ssr: false,
  css: [
    '@/assets/css/fonts.css',
    '@/assets/css/base.css',
    '@/assets/fonts/fontawesome/css/fontawesome.min.css',
    '@/assets/fonts/fontawesome/css/regular.min.css'
  ],
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  experimental: {
    payloadExtraction: false
  },
  postcss: {
    plugins: {
      autoprefixer: {},
      'postcss-nested': {}
    }
  }
});
