<script setup lang="ts">
interface Props {
  title: string
  description?: string
}
const props = withDefaults(defineProps<Props>(), {
  description: '자세한 사항이나 기타 설비 문의는 전화 주시면 친절히 안내 드립니다.',
})
</script>

<template>
  <div class="page-banner">
    <div class="banner-content">
      <h1 class="banner-title" :class="{ 'no-margin': !props.description }">{{ props.title }}</h1>
      <p v-if="props.description" class="banner-description">{{ props.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.page-banner {
  height: 200px;
  max-width: 1920px;
  margin: 0 auto;
  background-image: url('/images/banner/page-banner.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  position: relative;
}
.page-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4); /* 검은 반투명 배경 */
  z-index: 0;
}
.banner-content {
  text-align: center;
  z-index: 1;
}
.banner-title {
  color: white;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 15px;
}
.no-margin {
  margin-bottom: 0;
}
.banner-description {
  color: white;
  font-size: 1.2rem;
  margin-bottom: 5px;
}
@media (max-width: 768px) {
  .page-banner {
    height: 180px;
  }
  .banner-title {
    font-size: 1.5rem;
  }
  .banner-description {
    font-size: 1rem;
  }
}
</style>
