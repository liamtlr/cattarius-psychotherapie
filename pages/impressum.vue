<template>
  <content-wrapper title="Impressum">
    <h2>Title</h2>
    <p>
      Lorem ipsum...
    </p>
    <p>
      Lorem ipsum...
    </p>
    <p>
      Lorem ipsum...
    </p>
  </content-wrapper>
</template>

<script setup>
  useHead({
    title: 'Impressum',
    meta: [
      {
        name: 'description',
        content: 'Untershiedlicher legale Sachen',
      },
    ],
  })
</script>