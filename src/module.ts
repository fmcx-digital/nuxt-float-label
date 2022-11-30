import { defineNuxtModule, addComponent, createResolver } from '@nuxt/kit';

export interface ModuleOptions {
  label: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-float-label',
    configKey: 'nuxtFloatLabel'
  },
  defaults: {
    label: ''
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    addComponent({
      name: 'NuxtFloatLabel',
      filePath: resolver.resolve('./runtime/components/NuxtFloatLabel')
    });
  }
});
