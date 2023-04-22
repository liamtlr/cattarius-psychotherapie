<template>
  <content-wrapper title="About">
    <p>Hallo ich bin Marcel - Psychotherapist aus Landau.</p>
    <p>
      Ich bin 3 Jahre berufstätig als Psychotherapist in sowohl
      Krankenhäusliche als auch private Umständen.
    </p>
  </content-wrapper>
</template>

<script setup>
  useHead({
    title: 'About',
    meta: [
      {
        name: 'description',
        content: 'Hallo ich bin Marcel - Psychotherapist aus Landau.',
      },
    ],
  })
</script>