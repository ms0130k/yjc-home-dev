<script setup lang="ts">
import { RulerArrows, FrameTool, MessageText, MapPin } from '@iconoir/vue'
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
          <h1 class="banner-title">신뢰를 최고의 가치로 생각하는 기업</h1>
          <p class="banner-subtitle">택배용 박스/각종 스티로폼 포장재 제작</p>
          <p class="banner-subtitle">스티로폼 금형 제작</p>
        </div>
      </div>
    </section>

    <div class="info-panel">
      <router-link to="/box-specs" class="info-item" style="text-decoration: none">
        <div class="info-content">
          <RulerArrows :width="34" :height="34" color="#fff" class="info-icon" />
          <div class="info-text">
            <div class="info-title">제품규격</div>
            <div class="info-subtitle">Product Specifications</div>
          </div>
        </div>
      </router-link>
      <div class="info-divider"></div>
      <router-link to="/mold-making" class="info-item" style="text-decoration: none">
        <div class="info-content">
          <FrameTool :width="34" :height="34" color="#fff" class="info-icon" />
          <div class="info-text">
            <div class="info-title">금형제작</div>
            <div class="info-subtitle">Mold Making</div>
          </div>
        </div>
      </router-link>
      <div class="info-divider"></div>
      <router-link to="/support" class="info-item" style="text-decoration: none">
        <div class="info-content">
          <MessageText :width="34" :height="34" color="#fff" class="info-icon" />
          <div class="info-text">
            <div class="info-title">온라인 Q&amp;A</div>
            <div class="info-subtitle">Inquiry</div>
          </div>
        </div>
      </router-link>
      <div class="info-divider"></div>
      <router-link to="/location" class="info-item" style="text-decoration: none">
        <div class="info-content">
          <MapPin :width="34" :height="34" color="#fff" class="info-icon" />
          <div class="info-text">
            <div class="info-title">오시는 길</div>
            <div class="info-subtitle">Location</div>
          </div>
        </div>
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
  padding: 10px 0;
  justify-content: center;
  align-items: stretch;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.info-item {
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  gap: 8px;
}
.info-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 85px;
}
.info-icon {
  width: 28px;
  height: 28px;
  margin-bottom: 0;
  fill: #fff;
}
.info-text {
  display: flex;
  flex-direction: column;
  margin-left: 14px;
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
  background: repeating-linear-gradient(to bottom, #3a5a8c 0 6px, transparent 6px 12px);
}
@media (max-width: 900px) {
  .info-panel {
    flex-direction: column;
    align-items: start;
    padding: 13px 0;
    width: 80%;
  }
  .info-item {
    padding-left: 30%;
  }
  .info-content {
    height: auto;
  }
  .info-divider {
    width: 100%;
    height: 1px;
    margin: 10px 0;
    background: repeating-linear-gradient(to right, #3a5a8c 0 6px, transparent 6px 12px);
  }
}
</style>
