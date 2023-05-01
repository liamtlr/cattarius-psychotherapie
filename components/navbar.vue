<template>
  <nav
    class="bg-beige-50"
    role="navigation"
  >
    <div class="flex justify-between items-center">
      <NuxtLink to="/">
        <img src=
          "~/assets/logos/no-text.png"
          class="h-12 mr-8 md:h-24 cursor-pointer"
          alt="Nav icon for Marcel Cattarius - Praxis für Psychotherapie"
        >
      </NuxtLink>
      <img
        v-if="!navItemsVisible"
        src="~/assets/logos/bars.svg"
        class="w-12 hover:text-marcie-70 hover:cursor-pointer lg:hidden"
        @click="navItemsVisible = !navItemsVisible"
      >
      <img
        v-else
        src="~/assets/logos/x-mark.svg"
        class="w-12 hover:text-marcie-70 hover:cursor-pointer lg:hidden"
        @click="navItemsVisible = !navItemsVisible"
      >
      <ul
        class="
          hidden space-x-8 lg:flex
          text-2xl font-bold
        "
      >
        <template v-for="item in navItems" :key="item.title">
          <li
            class="hover:text-marcie cursor-pointer font-accent tracking-wide"
            :class="isSelected(item.to)"
          >
            <NuxtLink
              :to="item.to"
              @click="navItemsVisible = false"
            >
              {{item.title}}
            </NuxtLink>
          </li>
        </template>
      </ul>
    </div>
    <transition name="fade">
      <ul
        class="
          flex flex-col space-x-4 mt-8 lg:hidden
          text-2xl text-right font-bold
        "
        v-if="navItemsVisible"
      >
        <template v-for="item in navItems" :key="item.title">
          <li
            class="hover:text-marcie cursor-pointer font-accent tracking-wide my-2"
            :class="isSelected(item.to)"
          >
            <NuxtLink
              :to="item.to"
              @click="navItemsVisible = false"
            >
              {{item.title}}
            </NuxtLink>
          </li>
        </template>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const navItemsVisible = ref(false)

const navItems = [
    {
      title: 'Psychotherapie',
      to: 'psychotherapie',
      selected: false,
    },
    {
      title: 'Psychotherapy in English',
      to: 'psychotherapy-in-english',
      selected: false,
    },
    {
      title: 'Ablauf & Kosten',
      to: 'ablauf',
      selected: false,
    },
    {
      title: 'Über mich',
      to: 'uebermich',
      selected: false,
    },
    {
      title: 'Kontakt',
      to: 'kontakt',
      selected: false,
    },
  ]
  const isSelected = to => {
    return useRoute().name === to
      ? ['text-marcie','underline', 'underline-offset-8']
      : 'text-marcie-70'
  }

</script>
