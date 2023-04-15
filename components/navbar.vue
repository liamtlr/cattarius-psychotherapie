<template>
  <nav
    class="flex justify-between items-center bg-beige-50"
    role="navigation"
  >
    <NuxtLink to="/">
    <img src=
      "~/assets/logos/no-text.png"
      class="h-12 md:h-24 cursor-pointer"
      alt="Nav icon for Marcel Cattarius - Praxis für Psychotherapie"
    >
    </NuxtLink>
    <ul class="flex space-x-8 text-2xl font-bold">
    <template v-for="item in navItems" :key="item.title">
      <li
        class="hover:text-marcie cursor-pointer"
        :class="isSelected(item.to) ? 'text-marcie' : 'text-marcie-70'"
      >
        <NuxtLink :to="item.to">{{item.title}}</NuxtLink>
      </li>
    </template>
  </ul>
</nav>
</template>

<script>
export default {

  data() {
    return {
      navItems: [
        {
          title: 'About',
          to: '/about',
          selected: false,
        },
        {
          title: 'Services',
          to: '/services',
          selected: false,
        },
        {
          title: 'Contact',
          to: '/contact',
          selected: false,
        },
      ]
    }
  },

  methods: {
    isSelected(to) {
      return this.$route.name === to.slice(1)
    },
  },
}
</script>