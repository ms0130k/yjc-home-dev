<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
</script>

<template>
  <div class="app-container">
    <AppHeader />

    <div class="content-container">
      <RouterView />
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

.app-container {
  min-height: 100vh;
}

.content-container {
  padding-top: 80px; /* 헤더 높이만큼 여백 추가 */
}
</style>
