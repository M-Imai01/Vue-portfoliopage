<script setup>
import Header from "./components/MainHeader.vue";
import Home from "./components/Home.vue";

import { onMounted } from "vue";
import { HSStaticMethods } from "preline/preline";

onMounted(() => {
  setTimeout(() => {
    window.HSStaticMethods.autoInit();
  }, 100);
});
</script>

<template>
  <Header />
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
