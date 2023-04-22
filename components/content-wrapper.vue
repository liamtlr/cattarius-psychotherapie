<template>
  <main class="mt-12">
    <h1
      class="
        text-4xl font-accent tracking-wider font-bold
        md:text-7xl mb-8 md:mb-24 md:font-normal
      "
    >
      {{ title }}
    </h1>
    <div class="text-lg md:text-xl">
      <slot />
    </div>
  </main>
</template>

<script setup>

defineProps({
  title: {
    required: true,
    type: String,
  }
})

</script>
