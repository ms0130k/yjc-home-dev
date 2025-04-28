<script setup lang="ts">
interface Props {
  title: string
  description?: string
  tel?: string
}
defineProps<Props>()
</script>

<template>
  <div class="page-banner">
    <div class="banner-content">
      <h1 class="banner-title">{{ title }}</h1>
      <p v-if="description" class="banner-description">{{ description }}</p>
      <p v-if="tel" class="banner-tel">TEL : {{ tel }}</p>
    </div>
  </div>
</template>

<style scoped>
.page-banner {
  height: 250px;
  background-color: #0c4da2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}
.banner-content {
  text-align: center;
}
.banner-title {
  color: white;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 15px;
}
.banner-description {
  color: white;
  font-size: 16px;
  margin-bottom: 5px;
}
.banner-tel {
  color: white;
  font-size: 16px;
  font-weight: 500;
}
@media (max-width: 768px) {
  .page-banner {
    height: 180px;
  }
  .banner-title {
    font-size: 1.5rem;
  }
}
</style>
