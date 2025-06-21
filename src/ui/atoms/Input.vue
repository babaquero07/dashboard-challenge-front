<script setup lang="ts">
defineProps<{
  modelValue: string;
  type: string;
  placeholder: string;
  name: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <div>
    <label :for="name" class="sr-only">{{ name }}</label>
    <input
      :id="name"
      :value="modelValue"
      :name="name"
      :type="type"
      :autocomplete="name"
      @input="handleInput"
      required
      class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      :placeholder="placeholder"
    />
  </div>
</template>
