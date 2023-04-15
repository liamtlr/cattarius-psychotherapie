<template>
  <content-wrapper title="Setzen Sie sich in Kontakt mit mir">
    <transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="transform opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform opacity-0"
    >
      <ul class="w-full">
        <li class="flex w-full items-center my-12">
          <img
            src="~/assets/logos/contact/phone.svg"
            class="w-12 mr-20"
          >
          <p>+44(0) 45 56 66 77</p>
        </li>
        <li class="flex w-full items-center my-12">
          <img
            src="~/assets/logos/contact/email.svg"
            class="w-12 mr-20"
          >
          <a
            href="mailto:hallo@cattariuspsychotherapie.de">
            hallo@cattariuspsychotherapie.de
          </a>
        </li>
        <li class="flex w-full items-center my-12">
          <img
            src="~/assets/logos/contact/office.svg"
            class="w-12 mr-20"
          >
          <address>
            <p class="mb-0">1 Something Straße</p>
            <p class="mb-0">Mainz</p>
            <p class="mb-0">PLZ PLZ</p>
          </address>
        </li>
      </ul>
    </transition>

    <p>Ich freue mich blah blah</p>

  </content-wrapper>
</template>