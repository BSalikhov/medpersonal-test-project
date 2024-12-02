<script setup lang="ts">
import { ref } from "vue"
import type { User } from "../../types"
import { Category, Department } from "../../utils/constants"
import { Categories, Departments } from "../../utils/constants"

defineProps<{
  items: User[]
}>()

defineEmits(["delete", "add"])

const selectedItems = ref<string[]>([])
</script>

<template>
  <div class="flex justify-between mb-3">
    <button
      @click="$emit('delete', selectedItems)"
      class="px-5 py-3 text-white font-medium bg-red-500 border-red-600 rounded-lg"
    >
      Удалить
    </button>
    <button
      @click="$emit('add')"
      class="px-5 py-3 text-white font-medium bg-gray-700 rounded-lg"
    >
      Добавить
    </button>
  </div>

  <table class="w-full text-sm text-left text-gray-500">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th></th>
        <th scope="col" class="px-6 py-3">Ф.И.О</th>
        <th scope="col" class="px-6 py-3">Категория</th>
        <th scope="col" class="px-6 py-3">Отделение</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id" class="bg-gray-50 border-b">
        <td width="20" class="p-3">
          <input
            v-model="selectedItems"
            class="w-5 h-5"
            :value="item.id"
            :id="item.id"
            type="checkbox"
            name=""
          />
        </td>
        <td class="px-6 py-4">
          {{ item.name }}
        </td>
        <td class="px-6 py-4">
          {{ Categories[item.category as Category] }}
        </td>
        <td class="px-6 py-4">
          {{ Departments[item.department as Department] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
