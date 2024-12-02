<script lang="ts" setup>
import { useRoute } from "vue-router"

const route = useRoute()

const NAVIGATION_ITEMS = [
  {
    name: "Doctors",
    path: "/doctors",
  },
  {
    name: "Nurses",
    path: "/nurses",
  },
]
</script>

<template>
  <nav class="mt-12">
    <ul class="flex gap-2 justify-center">
      <li v-for="item in NAVIGATION_ITEMS" :key="item.name">
        <router-link
          :to="item.path"
          class="text-xl py-3 px-4 border-b-4 hover:text-orange-500 hover:border-orange-500"
          :class="
            route.name === item.name
              ? 'text-orange-500 border-orange-500'
              : 'border-transparent'
          "
          >{{ item.name }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>
