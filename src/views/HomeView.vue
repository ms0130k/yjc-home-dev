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
      <div class="banner-wrapper">
        <div class="banner-content">
          <h1 class="banner-title">오늘의 신뢰할수 있는 기술이</h1>
          <p class="banner-subtitle">친환경 제품을 위한 내일의 기회를 만듭니다.</p>
        </div>
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
  width: 100vw;
  height: 600px;
  overflow: hidden;
  margin-top: -100px;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
}

.banner-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/main/main-factory.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.banner-wrapper {
  position: relative;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
}

.banner-content {
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.banner-title {
  font-size: 3.2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.banner-subtitle {
  font-size: 2rem;
  font-weight: normal;
  margin: 0;
}

/* 반응형 스타일 */
@media (max-width: 768px) {
  .main-banner {
    height: 400px;
    margin-top: -80px;
  }

  .banner-wrapper {
    padding: 0 1rem;
  }

  .banner-title {
    font-size: 2.2rem;
  }

  .banner-subtitle {
    font-size: 1.5rem;
  }
}

.container {
  max-width: 1400px;
  margin: 0 auto;
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
