<template>
  <div class="about">
    <div class="container">
      <section class="history-section">
        <h2 class="section-title">연혁</h2>
        <div class="intro-content">
          <p class="intro-text">
            저희 영진화학은 1991년 8월 설립된 이후 제품개발 및 최신 자동화 설비로 품질 향상에 최선을
            다하고 있습니다.
          </p>
          <p class="intro-text">
            더불어 친환경에 부응코자 생산에서부터 스티로폼 재활용까지 품질 및 친환경 재일주의를
            추구하는 기업으로 향상 정진하고 있습니다.
          </p>
          <p class="intro-text">
            고객 여러분의 소중한 관심을 최대한 존중하여 신뢰가 더욱 깊은 기업으로, 최고의 만족을
            드리기 위하여 끊임없이 노력하는 기업이 될 것을 약속드립니다. 그동안 쌓아온 기술과 신뢰를
            바탕으로 고객 여러분께 보답코자 하오니 변함없는 성원을 부탁드립니다.
          </p>
        </div>

        <div class="timeline">
          <div class="timeline-line"></div>

          <!-- 2013년 이후 -->
          <div class="timeline-item">
            <div class="timeline-year">
              <div class="year">2013 ~</div>
            </div>
            <div class="timeline-content">
              <div class="event-card">
                <div class="event-image">
                  <img src="https://picsum.photos/id/101/800/400" alt="신축공장 이전" />
                </div>
                <div class="event-text">
                  <h3>신축공장 이전</h3>
                  <p>성형기 자동화 설비 증설</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 2004년 -->
          <div class="timeline-item">
            <div class="timeline-year">
              <div class="year">2004</div>
            </div>
            <div class="timeline-content">
              <div class="event-card">
                <div class="event-image">
                  <img src="https://picsum.photos/id/102/800/400" alt="설비 및 협력업체 지정" />
                </div>
                <div class="event-text">
                  <h3>폐스티로폼 감용기 설치(재활용 기계)</h3>
                  <p>보온판, 평판 등 성형기 설비</p>
                  <p>대우일렉트로닉스 협력업체 지정(인천공장)</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 2003년 -->
          <div class="timeline-item">
            <div class="timeline-year">
              <div class="year">2003</div>
            </div>
            <div class="timeline-content">
              <div class="event-card">
                <div class="event-image">
                  <img src="https://picsum.photos/id/103/800/400" alt="영진화학 제 2공장" />
                </div>
                <div class="event-text">
                  <h3>영진화학 제 2공장 준공</h3>
                  <p>제 2공장 (주)금성통상산업 법인 등록</p>
                  <p>평판용 성형기 자동화 설비</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 1996년 -->
          <div class="timeline-item">
            <div class="timeline-year">
              <div class="year">1996</div>
            </div>
            <div class="timeline-content">
              <div class="event-card">
                <div class="event-image">
                  <img src="https://picsum.photos/id/104/800/400" alt="성형기 자동화설비" />
                </div>
                <div class="event-text">
                  <h3>성형기 자동화설비</h3>
                  <p>업소용 ICE BOX</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 1991년 -->
          <div class="timeline-item">
            <div class="timeline-year">
              <div class="year">1991</div>
            </div>
            <div class="timeline-content">
              <div class="event-card">
                <div class="event-image">
                  <img src="https://picsum.photos/id/106/800/400" alt="영진화학 설립" />
                </div>
                <div class="event-text">
                  <h3>영진화학 설립</h3>
                  <p>설립 및 사업 시작</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// AppFooter는 App.vue에서 전역으로 포함될 예정이므로 여기서는 제거합니다.
</script>

<style scoped>
.about {
  padding-top: 80px;
  min-height: 100vh;
}

.page-banner {
  height: 250px;
  background-color: #0c4da2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
}

.banner-content {
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 20px;
}

.page-title {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 15px;
}

.subtitle {
  font-size: 18px;
  opacity: 0.9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 32px;
  font-weight: bold;
  color: #0c4da2;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: #0c4da2;
}

.company-intro {
  margin-bottom: 80px;
}

.intro-content {
  max-width: 900px;
  margin: 0 auto;
}

.intro-text {
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.7;
  color: #333;
}

/* 연혁 스타일링 */
.history-section {
  padding-bottom: 80px;
}

.timeline {
  position: relative;
  max-width: 1000px;
  margin: 60px auto 0;
}

.timeline-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 120px;
  width: 3px;
  background-color: #0c4da2;
}

.timeline-item {
  display: flex;
  margin-bottom: 60px;
  position: relative;
}

.timeline-year {
  width: 120px;
  flex-shrink: 0;
  position: relative;
}

.year {
  font-size: 24px;
  font-weight: bold;
  color: #0c4da2;
  text-align: right;
  padding-right: 30px;
}

.timeline-content {
  flex-grow: 1;
  padding-left: 40px;
  position: relative;
}

.timeline-content::before {
  content: '';
  position: absolute;
  left: -7px;
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #fff;
  border: 5px solid #0c4da2;
  z-index: 1;
}

.event-card {
  background-color: #f7f9fc;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.event-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
}

.event-image {
  height: 200px;
  overflow: hidden;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.event-card:hover .event-image img {
  transform: scale(1.05);
}

.event-text {
  padding: 20px;
}

.event-text h3 {
  font-size: 20px;
  color: #0c4da2;
  margin-bottom: 10px;
}

.event-text p {
  color: #555;
  margin-bottom: 5px;
}

@media (max-width: 768px) {
  .page-banner {
    height: 200px;
  }

  .page-title {
    font-size: 32px;
  }

  .section-title {
    font-size: 28px;
  }

  .timeline-line {
    left: 80px;
  }

  .timeline-year {
    width: 80px;
  }

  .year {
    font-size: 20px;
    padding-right: 20px;
  }

  .timeline-content {
    padding-left: 30px;
  }

  .event-image {
    height: 160px;
  }

  .event-text h3 {
    font-size: 18px;
  }
}

@media (max-width: 576px) {
  .timeline-line {
    left: 60px;
  }

  .timeline-year {
    width: 60px;
  }

  .year {
    font-size: 16px;
    padding-right: 15px;
  }

  .timeline-content {
    padding-left: 25px;
  }

  .event-image {
    height: 140px;
  }
}
</style>
