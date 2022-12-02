import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/lucassimines/FMCX/FMCX Modules/nuxt-float-label/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}