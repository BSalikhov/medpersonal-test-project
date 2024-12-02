<script setup lang="ts">
import { reactive, ref } from "vue"
import BaseModal from "../components/ui/BaseModal.vue"
import BaseInput from "../components/ui/BaseInput.vue"
import BaseSelect from "../components/ui/BaseSelect.vue"
import { Departments, type Department } from "../utils/constants"
import { departmentsOptions } from "../data.json"
import useCreateUserForm from "../composables/useCreateUserForm"

const { state, errors, validateForm, resetForm } = useCreateUserForm()

const departments = ref([
  { id: "", name: "Выберите отделение" },
  ...departmentsOptions,
])

const isModalOpen = ref(false)
const openModalForm = () => {
  isModalOpen.value = true
}
defineExpose({ openModalForm })

const add = () => {
  validateForm()
  if(Object.keys(errors.value).length) return

  emit("add", {
    id: Date.now().toString(),
    department: state.department as Department,
    name: state.name,
  })

  isModalOpen.value = false
  resetForm()
}
const emit = defineEmits(["add"])
</script>

<template>
  <BaseModal :isOpened="isModalOpen" @close="isModalOpen = false">
    <div class="p-6">
      <h2 class="text-xl font-medium text-gray-700">Добавить нового врача</h2>
      <form class="mt-4" @submit="add">
        <BaseInput
          :value="state.name"
          label="Ф.И.О"
          name="name"
          type="text"
          @update:value="state.name = $event"
          :error="errors.name"
        />

        <BaseSelect
          :value="state.department"
          label="Отделение"
          name="department"
          :items="departments"
          @update:value="state.department = $event"
          :error="errors.department"
        />
        <button
          type="submit"
          class="my-4 float-right px-4 py-2 bg-gray-700 text-white font-medium rounded-lg"
          @click.prevent="add"
        >
          Добавить
        </button>
      </form>
    </div>
  </BaseModal>
</template>
