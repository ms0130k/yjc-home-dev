<script setup lang="ts">
// 필요한 컴포넌트나 라이브러리를 여기에 임포트
</script>

<template>
  <main>
    <!-- 메인 배너 섹션 -->
    <section class="main-banner">
      <div class="banner-image">
        <!-- 이미지는 background-image로 설정됩니다 -->
      </div>
      <div class="banner-content">
        <h1 class="banner-title">오늘의 신뢰할수 있는 기술이</h1>
        <p class="banner-subtitle">친환경 제품을 위한 내일의 기회를 만듭니다.</p>
      </div>
    </section>

    <!-- 나머지 컨텐츠 -->
    <div class="container">
      <div class="content">
        <h1 class="title">영진 화학!</h1>
        <div class="card">
          <p class="welcome-text">영진 화학에 오신 것을 환영합니다.</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main-banner {
  position: relative;
  width: 100%;
  height: 500px; /* 배너 높이 조정 */
  overflow: hidden;
}

.banner-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/main/main-factory.jpg'); /* 이미지 경로는 실제 이미지에 맞게 수정 필요 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.banner-content {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.banner-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.banner-subtitle {
  font-size: 1.5rem;
  font-weight: normal;
  margin: 0;
}

/* 반응형 스타일 */
@media (max-width: 768px) {
  .main-banner {
    height: 300px;
  }

  .banner-content {
    left: 5%;
    right: 5%;
  }

  .banner-title {
    font-size: 1.8rem;
  }

  .banner-subtitle {
    font-size: 1.2rem;
  }
}

.container {
  padding: 2rem;
  text-align: center;
}

.content {
  max-width: 800px;
  margin: 0 auto;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 2rem 0;
  color: #2c3e50;
}

.card {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.welcome-text {
  font-size: 1.5rem;
  line-height: 1.6;
  margin: 1rem 0;
}
</style>
