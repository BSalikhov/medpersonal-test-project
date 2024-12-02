<script setup lang="ts">
import { ref } from 'vue';
import BaseTable from '../components/ui/BaseTable.vue';
import CreateUserForm from '../components/CreateUserForm.vue';
import { nurses } from '../data'
import { User } from '../types';

const items = ref(nurses)
const createUserForm = ref<InstanceType<typeof CreateUserForm>>()

const addItem = (item: Omit<User, 'category'>) => {
  items.value.push({ ...item, category: 'nurse' })
}

const deleteItems = (ids: string[]) => {
  items.value = items.value.filter((item: User) => !ids.includes(item.id))
}
</script>

<template>
  <div class="p-4 max-w-5xl mx-auto">
    <BaseTable :items="items" @add="createUserForm?.openModalForm()" @delete="deleteItems"/>
    <CreateUserForm ref="createUserForm" @add="addItem" />
  </div>
</template>