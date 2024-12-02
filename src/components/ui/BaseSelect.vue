<script setup lang="ts">
defineProps<{
  items: Array<{ id: string; name: string }>
  value: string
  label: string
  name: string
  error: string | undefined
}>()

const emit = defineEmits(["update:value"])
</script>

<template>
  <label
    :for="name"
    class="block mb-1 text-sm font-medium text-gray-500 mt-4"
    >{{ label }}</label
  >
  <select
    class="w-full p-3 h-12 border border-gray-500 rounded-lg"
    :id="name"
    :value="value"
    @input="emit('update:value', $event.target.value)"
    :name="name"
  >
    <option v-for="item in items" :key="item.id" :value="item.id">
      {{ item.name }}
    </option>
  </select>
  <p v-if="error" class="text-red-500">{{ error }}</p>
</template>
