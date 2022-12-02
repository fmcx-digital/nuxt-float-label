<style lang="postcss" scoped>
form {
  input,
  select,
  textarea {
    @apply bg-slate-200 hover:bg-slate-300 transition-colors focus:outline-none rounded placeholder:text-slate-600 appearance-none;
  }
  textarea {
    @apply h-28;
  }
  .fl-on-input + input,
  .fl-on-input + select {
    @apply pt-4;
  }
  .fl-on-input + textarea {
    @apply pt-5;
  }
  .select {
    @apply relative flex;
    i {
      @apply flex items-center absolute mt-2 mb-2 top-0 bottom-0 right-3 pointer-events-none;
    }
  }
  > div {
    @apply space-y-6;
    > div {
      @apply space-y-3;
    }
  }
}
</style>

<template>
  <form class="bg-white p-5 rounded shadow-md">
    <div>
      <Card title="Default input label">
        <NuxtFloatLabel>
          <input type="text" placeholder="Name" />
        </NuxtFloatLabel>

        <Prism
          code='<NuxtFloatLabel>
    <input type="text" placeholder="Name" />
</NuxtFloatLabel>' />
      </Card>

      <Card title="Using a different label from placeholder">
        <NuxtFloatLabel label="A more complex text">
          <input type="text" placeholder="Text" />
        </NuxtFloatLabel>

        <Prism
          code='<NuxtFloatLabel label="A more complex text">
    <input type="text" placeholder="Text" />
</NuxtFloatLabel>' />
      </Card>

      <Card title="Select input">
        <div class="select">
          <NuxtFloatLabel>
            <select>
              <option disabled selected>Do you enjoy coding?</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <i class="far fa-angle-down"></i>
          </NuxtFloatLabel>
        </div>

        <Prism
          code="<NuxtFloatLabel>
  <select>
    <option disabled selected>Do you enjoy coding?</option>
    <option>Yes</option>
    <option>No</option>
  </select>
</NuxtFloatLabel>" />
      </Card>

      <Card title="Textarea input">
        <NuxtFloatLabel>
          <textarea type="text" placeholder="Description" />
        </NuxtFloatLabel>

        <Prism
          code='<NuxtFloatLabel>
  <textarea type="text" placeholder="Description" />
</NuxtFloatLabel>' />
      </Card>

      <Card title="Set custom label class">
        <NuxtFloatLabel labelClass="text-purple-700">
          <input type="text" placeholder="Name" />
        </NuxtFloatLabel>

        <Prism
          code='<NuxtFloatLabel labelClass="text-purple-700">
    <input type="text" placeholder="Name" />
</NuxtFloatLabel>' />
      </Card>
    </div>
  </form>
</template>
