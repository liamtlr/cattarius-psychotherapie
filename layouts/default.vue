<template>
  <div class="flex flex-col h-screen py-8 px-4 md:px-24 lg:px-48">
    <navbar />
    <div class="h-screen flex flex-col justify-between">
      <slot />
      <footer-items />
    </div>

  </div>
</template>

<style scoped>

  .fade-enter-active{
    @apply transition-all ease-in duration-300;
  }

  .fade-leave-active {
    @apply transition-all ease-in duration-0;
  }

  .fade-enter-to, .fade-leave {
    @apply opacity-100;
  }

  .fade-enter-from, .fade-leave-to {
    @apply opacity-0;
  }


</style>

