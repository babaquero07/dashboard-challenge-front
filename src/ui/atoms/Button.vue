<script setup lang="ts">
import { computed } from "vue";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
  handleClick?: () => void;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "button",
  variant: "primary",
  size: "md",
  fullWidth: false,
  loading: false,
});

const buttonClasses = computed(() => {
  const baseClasses =
    "group cursor-pointer flex justify-center items-center border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200";

  const sizeClasses = {
    sm: "py-1 px-3 text-xs",
    md: "py-2 px-4 text-sm",
    lg: "py-3 px-6 text-base",
  };

  const variantClasses = {
    primary:
      "text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 disabled:bg-indigo-400",
    secondary:
      "text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500 disabled:bg-indigo-50",
    danger:
      "text-white bg-red-600 hover:bg-red-700 focus:ring-red-500 disabled:bg-red-400",
  };

  const widthClass = props.fullWidth ? "w-full" : "";

  return `${baseClasses} ${sizeClasses[props.size]} ${
    variantClasses[props.variant]
  } ${widthClass}`;
});
</script>

<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="mr-2">
      <svg
        class="animate-spin h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </span>
    <span>{{ loading ? "Procesando..." : label }}</span>
  </button>
</template>
