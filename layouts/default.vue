<template>
  <div class="flex flex-col h-screen py-8 px-4 md:px-24 lg:px-48">
    <a
      href="https://www.doctolib.de/psychologischer-psychotherapeut-psychotherapeutin/mainz/marcel-cattarius?utm_campaign=website-button&amp;utm_source=marcel-cattarius-website-button&amp;utm_medium=referral&amp;utm_content=option-8&amp;utm_term=marcel-cattarius"
      style="position:fixed;z-index:20000;top:180px;right:0;display:block;text-align:center;opacity: 0.85;background-color:#107ACA;color:#ffffff;font-size:14px;overflow:hidden;width:80px;border-radius: 4px 0 0 4px;text-decoration:none;padding:10px;line-height:1.4"
      rel="noopener noreferrer"
      target="_blank"
    >
      <span style="font-size:14px">
        Termin<br> online buchen
      </span>
      <img
        style="height:15px;margin-top:10px;vertical-align:middle;width:auto"
        src="https://www.doctolib.de/external_button/doctolib-white-transparent.png"
        alt="Doctolib"
      >
    </a>
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

