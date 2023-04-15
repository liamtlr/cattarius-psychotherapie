<template>
  <div class="h-screen py-8 px-4 md:px-24 lg:px-48">
    <navbar />
    <transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="transform opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform opacity-0"
    >
      <slot />
    </transition>
  </div>
</template>

<script setup>
  useHead({
    title: 'Cattarius Psychotherapie',
  })
</script>

<script>
export default {

  transition: 'fade',

}
</script>