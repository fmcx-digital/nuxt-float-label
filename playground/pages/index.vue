<template>
  <div>
    <div class="text-center bg-black/25 py-16 mobile-max:py-12 space-y-6">
      <div class="flex justify-center">
        <NuxtLink
          to="https://www.npmjs.com/package/nuxt-float-label"
          target="_blank"
          class="block w-[220px] mobile-max:w-[148px] h-auto">
          <Logo />
        </NuxtLink>
      </div>
    </div>

    <section class="max-w-2xl mx-auto px-5">
      <div class="text-center my-10 space-y-2">
        <h2 class="text-white text-2xl mobile-max:text-lg">Examples of usage</h2>
        <p class="text-slate-400">Type something to try out</p>
      </div>
      <div class="space-y-8">
        <div class="space-y-20">
          <FormUi />

          <Docs />
        </div>
      </div>
    </section>
  </div>
</template>
