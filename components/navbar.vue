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
          alt="Psychotherapie Mainz"
        >
      </NuxtLink>
      <img
        v-if="!navItemsVisible"
        src="~/assets/logos/bars.svg"
        class="w-12 hover:text-marcie-70 hover:cursor-pointer xl:hidden"
        alt="Paartherapie Mainz"
        @click="navItemsVisible = !navItemsVisible"
      >
      <img
        v-else
        src="~/assets/logos/x-mark.svg"
        class="w-12 hover:text-marcie-70 hover:cursor-pointer xl:hidden"
        alt="Gruppentherapie Mainz"
        @click="navItemsVisible = !navItemsVisible"
      >
      <ul
        class="
          hidden space-x-8 xl:flex
          text-2xl font-bold
        "
      >
        <template v-for="item in navItems" :key="item.title">
          <li
            class="hover:text-marcie cursor-pointer font-accent tracking-wide group"
            :class="isSelected(item.to)"
          >
            <NuxtLink
              :to="item.to"
              @click="navItemsVisible = false"
            >
              {{item.title}}
              <ul v-if="item.subitems" class="absolute">
                <li
                  v-for="subitem in item.subitems"
                  :key="subitem.title"
                  class="invisible py-1.5 text-base group-hover:visible hover:text-marcie"
                  :class="isSelected(subitem.to)"
                >
                  <NuxtLink :to="subitem.to">
                    {{subitem.title}}
                  </NuxtLink>
                </li>
              </ul>
            </NuxtLink>
          </li>
        </template>
      </ul>
    </div>
    <transition name="fade">
      <ul
        class="
          flex flex-col space-x-4 mt-8 xl:hidden
          text-2xl text-right font-bold
        "
        v-if="navItemsVisible"
      >
        <template v-for="item in navItems" :key="item.title">
          <li
            class="text-marcie cursor-pointer font-accent tracking-wide my-2"
          >
            <NuxtLink
              :to="item.to"
              @click="navItemsVisible = false"
            >
              <span :class="isSelected(item.to)">{{item.title}}</span>
              <ul v-if="item.subitems">
                <li
                  v-for="subitem in item.subitems"
                  :key="subitem.title"
                  class="py-2 text-base"
                  :class="isSelected(subitem.to)"
                >
                  <NuxtLink :to="subitem.to">
                    {{subitem.title}}
                  </NuxtLink>
                </li>
              </ul>
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
      to: { name: 'psychotherapie' },
      selected: false,
      subitems: [
        {
          title: 'Psychotherapy in English',
          to: { name: 'psychotherapie-in-english' },
        },
        {
          title: 'Ablauf & Kosten',
          to: { name: 'psychotherapie-ablauf' },
        },
      ]
    },
    {
      title: 'Über mich',
      to: { name: 'uebermich' },
      selected: false,
    },
    {
      title: 'Kontakt',
      to: { name: 'kontakt' },
      selected: false,
    },
  ]
  const isSelected = to => {
    return useRoute().name === to.name
      ? ['text-marcie','underline', 'underline-offset-8']
      : 'text-marcie-70'
  }

</script>
