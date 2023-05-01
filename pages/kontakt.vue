<template>
  <content-wrapper title="Kontakt">
      <ul class="w-full">
        <li class="flex w-full items-center my-12">
          <img
            src="~/assets/logos/contact/phone.svg"
            class="w-12 mr-20"
          >
          <p>+49 (0) 6131 945 25 70</p>
        </li>
        <li class="flex w-full items-center my-12">
          <img
            src="~/assets/logos/contact/email.svg"
            class="w-12 mr-20"
          >
          <a
            href="mailto:info@pyschotherapiecattarius.de">
            info@pyschotherapiecattarius.de
          </a>
        </li>
        <li class="flex w-full items-center my-12">
          <img
            src="~/assets/logos/contact/office.svg"
            class="w-12 mr-20"
          >
          <address>
            <p class="mb-0">Martinsstr. 17</p>
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
        content: 'Get in touch',
      },
    ],
  })
</script>