<template>
  <content-wrapper title="Kontakt">
      <ul class="w-full">
        <li class="flex w-full items-center my-12">
          <img
            src="~/assets/logos/contact/phone.svg"
            class="w-12 mr-20"
            alt="Therapie Mainz"
          >
          <p>+49 (0) 6131 218 94 29</p>
        </li>
        <li class="flex w-full items-center my-12">
          <img
            src="~/assets/logos/contact/email.svg"
            class="w-12 mr-20"
            alt="Psychologe Mainz"
          >
          <a
            href="mailto:info@psychotherapiecattarius.de">
            info@psychotherapiecattarius.de
          </a>
        </li>
        <li class="flex w-full items-center my-12">
          <img
            src="~/assets/logos/contact/office.svg"
            class="w-12 mr-20"
            alt="Cattarius Psychotherapie Mainz"
          >
          <address>
            <p class="mb-0">Kaiserstr. 42</p>
            <p class="mb-0">55116 Mainz</p>
          </address>
        </li>
      </ul>
  </content-wrapper>
</template>

<script setup>
  useHead({
    title: 'Kontakt',
    meta: [
      {
        name: 'description',
        content: 'Kontaktdaten Psychotherapie Mainz',
      },
    ],
  })
</script>
