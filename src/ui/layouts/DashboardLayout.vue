<script setup lang="ts">
import Navbar from "../molecules/Navbar.vue";
</script>

<template>
  <header class="w-full bg-white shadow-md">
    <Navbar />
  </header>

  <main class="w-full p-4">
    <slot name="content" />
  </main>
</template>
