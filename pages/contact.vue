<template>
  <content-wrapper title="Setzen Sie sich in Kontakt mit mir">
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

    <p>Ich freue mich blah blah</p>

  </content-wrapper>
</template>

<script setup>
  useHead({
    title: 'Contact',
    meta: [
      {
        name: 'description',
        content: 'Get in touch',
      },
    ],
  })
</script>