<script setup lang="ts">
defineProps<{
  value: string | number
  label: string
  name: string
  type: "text" | "password" | "email" | "number",
  error: string | undefined
}>()

const emit = defineEmits(["update:value"])
</script>

<template>
  <label :for="name" class="block mb-1 text-sm font-medium text-gray-500">{{
    label
  }}</label>
  <input
    class="w-full p-3 h-12 border border-gray-500 rounded-lg"
    id="name"
    :value="value"
    @input="emit('update:value', $event.target.value)"
    :name="name"
    :type="type"
  />
  <p v-if="error" class="text-red-500">{{ error }}</p>
</template>
