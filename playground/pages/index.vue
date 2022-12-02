<template>
  <div class="px-5">
    <section class="max-w-2xl mx-auto">
      <div class="text-center py-16 mobile-max:py-12 space-y-6 mobile-max:space-y-2">
        <div class="flex justify-center">
          <NuxtLink
            to="https://www.npmjs.com/package/nuxt-float-label"
            target="_blank"
            class="block w-[27rem] h-auto">
            <Logo />
          </NuxtLink>
        </div>
        <div>
          <BtnGithub />
        </div>
      </div>

      <div class="space-y-8">
        <div class="text-center">
          <h2 class="text-slate-400 text-2xl mobile-max:text-lg">Examples of usage</h2>
        </div>

        <div class="space-y-20">
          <FormUi />

          <Docs />
        </div>
      </div>
    </section>
  </div>
</template>
