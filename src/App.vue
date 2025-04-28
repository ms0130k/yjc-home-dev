<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>

<template>
  <div class="app-container">
    <AppHeader />

    <div class="content-container">
      <RouterView />
    </div>

    <AppFooter />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background: #fff;
}

.app-container {
  min-height: 100vh;
  background: #fff;
}

.content-container {
  padding-top: 100px; /* 헤더 높이만큼 여백 추가 */
}
</style>
