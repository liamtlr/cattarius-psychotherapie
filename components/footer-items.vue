<template>
  <footer class="h-8 mt-8">
    <hr />
    <ul class="flex justify-end space-x-8">
      <li
        v-for="item in footerItems"
        :key="item.title"
        class="cursor-pointer font-accent tracking-wide my-4"
      >
        <NuxtLink :to="item.to">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </footer>
</template>

<script setup>

const footerItems = [
  {
    title: 'Impressum',
    to: 'impressum',
  },
  {
    title: 'Datenschutz',
    to: 'datenschutz',
  },
]

</script>
