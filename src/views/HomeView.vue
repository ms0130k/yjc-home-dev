<script setup lang="ts">
import { Tools, Settings, Mail, Pin } from '@iconoir/vue'
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

    <div class="info-panel">
      <router-link to="/facilities" class="info-item" style="text-decoration: none">
        <Tools :width="34" :height="34" color="#fff" class="info-icon" />
        <div class="info-title">설비현황</div>
        <div class="info-subtitle">Facilities</div>
      </router-link>
      <div class="info-divider"></div>
      <router-link to="/technical-data" class="info-item" style="text-decoration: none">
        <Settings :width="34" :height="34" color="#fff" class="info-icon" />
        <div class="info-title">생산공정</div>
        <div class="info-subtitle">Production Process</div>
      </router-link>
      <div class="info-divider"></div>
      <router-link to="/support" class="info-item" style="text-decoration: none">
        <Mail :width="34" :height="34" color="#fff" class="info-icon" />
        <div class="info-title">온라인 Q&amp;A</div>
        <div class="info-subtitle">Inquiry</div>
      </router-link>
      <div class="info-divider"></div>
      <router-link to="/location" class="info-item" style="text-decoration: none">
        <Pin :width="34" :height="34" color="#fff" class="info-icon" />
        <div class="info-title">오시는 길</div>
        <div class="info-subtitle">Location</div>
      </router-link>
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
  background-image: url('/images/main/main-factory.jpg');
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

.info-panel {
  margin-top: 56px;
  display: flex;
  background: #0c2d5a;
  padding: 26px 0;
  justify-content: center;
  align-items: stretch;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.info-item {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  gap: 8px;
}
.info-icon {
  width: 34px;
  height: 34px;
  margin-bottom: 8px;
  fill: #fff;
}
.info-title {
  font-size: 1rem;
  font-weight: bold;
}
.info-subtitle {
  font-size: 0.95rem;
  color: #b0c4de;
}
.info-divider {
  width: 1px;
  margin: 0 32px;
  background: repeating-linear-gradient(to bottom, #3a5a8c 0 6px, transparent 6px 12px);
}
@media (max-width: 900px) {
  .info-panel {
    flex-direction: column;
    align-items: stretch;
    padding: 13px 0;
    width: 80%;
  }
  .info-divider {
    width: 100%;
    height: 1px;
    margin: 24px 0;
    background: repeating-linear-gradient(to right, #3a5a8c 0 6px, transparent 6px 12px);
  }
}
</style>
