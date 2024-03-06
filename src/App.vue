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

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://stjrdkcflnnbqkbuqtdf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0anJka2NmbG5uYnFrYnVxdGRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1ODg1MzEsImV4cCI6MjAyNDE2NDUzMX0.bN_nKuMo7ABu3lwo5aFc1fm1ovublQx7-bOPaCda9iY"
);
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
