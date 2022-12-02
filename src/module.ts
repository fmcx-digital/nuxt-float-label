import { defineNuxtModule, addComponent, createResolver } from '@nuxt/kit';

export interface ModuleOptions {
  useCss: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-float-label',
    configKey: 'nuxtFloatLabel'
  },
  defaults: {
    useCss: true
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    if (options.useCss) nuxt.options.css.push(resolver.resolve('./runtime/assets/css/default.css'));

    addComponent({
      name: 'NuxtFloatLabel',
      filePath: resolver.resolve('./runtime/components/NuxtFloatLabel')
    });
  }
});
