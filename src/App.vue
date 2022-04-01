<template>
  <Navbar />
  <div class="container is-max-desktop py-4 px-2">
    <RouterView />
  </div>
</template>

<script setup>
  import Navbar from './components/Layout/Navbar.vue';
</script>
