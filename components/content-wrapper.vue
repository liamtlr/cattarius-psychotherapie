<template>
  <main class="mt-12">
    <h1 class="text-4xl md:text-7xl mb-8 md:mb-24">{{ title }}</h1>
    <div class="text-lg md:text-xl">
      <slot />
    </div>
  </main>
</template>

<script>
export default {

  props: {
    title: {
      type: String,
      required: true,
    },
  },

}
</script>