<script setup>
  import Navbar from './components/Navbar.vue';
</script>

<template>
  <body style="background-color: black;">
    <div class="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
    </div>
  </body>
  <Navbar />
  <RouterView />
</template>

<style scoped>

</style>
