import { reactive, ref } from "vue"
import type { User } from "../types"

export default function useCreateUserForm() {
  const errors = ref<Record<string, string>>({})
  const state = reactive<Omit<User, 'id'>>({
    name: '',
    category: '',
    department: '',
  })

  const validateForm = () => {
    errors.value = {}
    if (!state.name) {
      errors.value.name = "Нужно ввести имя"
    }
    if (!state.department) {
      errors.value.department = "Нужно выбрать отделение"
    }
  }

  return {
    state,
    errors,
    validateForm,
    resetForm() {
      state.name = ""
      state.category = ""
      state.department = ""
    },
  }
}