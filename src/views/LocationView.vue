<script setup lang="ts">
import { onMounted, ref } from 'vue'

// Kakao 지도를 위한 변수 선언
declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void
        Map: new (container: HTMLElement, options: any) => any
        LatLng: new (lat: number, lng: number) => any
        Marker: new (options: { position: any }) => any
        InfoWindow: new (options: { content: string }) => any
      }
    }
  }
}

// 회사 위치 정보
const companyLocation = {
  name: '영진화학',
  address: '경기도 김포시 대곶면 대곶로 202번길 215 (송마리 245-1)',
  phone: '031-997-0280',
  email: 'yjin6038@hanmail.net',
  lat: 37.640739, // 김포시 대곶면 송마리 근처 위도 좌표
  lng: 126.578385, // 김포시 대곶면 송마리 근처 경도 좌표
}

const mapLoaded = ref(false)

// 카카오맵 로드 및 초기화
onMounted(() => {
  // 카카오맵 API 스크립트 동적 로드
  const script = document.createElement('script')
  script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=9d08a56f06c2c243b6c6fb02a22b3957&autoload=false`
  script.async = true

  script.onload = () => {
    window.kakao.maps.load(() => {
      initializeMap()
      mapLoaded.value = true
    })
  }

  document.head.appendChild(script)
})

// 지도 초기화 함수
const initializeMap = () => {
  const container = document.getElementById('company-map')
  if (!container) return // 컨테이너가 없으면 초기화하지 않음

  const options = {
    center: new window.kakao.maps.LatLng(companyLocation.lat, companyLocation.lng),
    level: 3,
  }

  const map = new window.kakao.maps.Map(container, options)

  // 마커 추가
  const markerPosition = new window.kakao.maps.LatLng(companyLocation.lat, companyLocation.lng)
  const marker = new window.kakao.maps.Marker({
    position: markerPosition,
  })
  marker.setMap(map)

  // 인포윈도우 추가
  const infoContent = `<div style="padding:10px;width:200px;text-align:center;"><strong>${companyLocation.name}</strong></div>`
  const infoWindow = new window.kakao.maps.InfoWindow({
    content: infoContent,
  })
  infoWindow.open(map, marker)
}

// 클립보드 복사 함수
const copyToClipboard = (text: string) => {
  if (navigator && navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert('주소가 클립보드에 복사되었습니다.')
      })
      .catch((err) => {
        console.error('클립보드 복사 실패:', err)
      })
  } else {
    // 대체 방법: 임시 input 요소 사용
    const tempInput = document.createElement('input')
    tempInput.value = text
    document.body.appendChild(tempInput)
    tempInput.select()
    document.execCommand('copy')
    document.body.removeChild(tempInput)
    alert('주소가 클립보드에 복사되었습니다.')
  }
}
</script>

<template>
  <main class="location-view">
    <!-- 페이지 배너 -->
    <div class="location-banner">
      <div class="banner-content">
        <h1 class="banner-title">오시는 길</h1>
        <p class="banner-description">영진화학을 방문하시는 방법을 안내해 드립니다.</p>
      </div>
    </div>

    <div class="container">
      <!-- 회사 주소 및 연락처 섹션 -->
      <section class="company-info-section">
        <div class="info-card">
          <div class="info-item">
            <h3 class="info-title">주소</h3>
            <p class="info-content">{{ companyLocation.address }}</p>
            <button class="copy-button" @click="copyToClipboard(companyLocation.address)">
              주소 복사
            </button>
          </div>

          <div class="info-item">
            <h3 class="info-title">연락처</h3>
            <p class="info-content">{{ companyLocation.phone }}</p>
          </div>

          <div class="info-item">
            <h3 class="info-title">이메일</h3>
            <p class="info-content">{{ companyLocation.email }}</p>
          </div>

          <div class="info-item">
            <h3 class="info-title">영업시간</h3>
            <p class="info-content">
              평일: 09:00 ~ 18:00<br />
              점심시간: 12:00 ~ 13:00<br />
              토요일, 일요일, 공휴일 휴무
            </p>
          </div>
        </div>
      </section>

      <!-- 지도 섹션 -->
      <section class="map-section">
        <h2 class="section-title">찾아오시는 길</h2>
        <div id="company-map" class="map-container"></div>
        <p v-if="!mapLoaded" class="map-loading">지도를 불러오는 중입니다...</p>
      </section>

    </div>
  </main>
</template>

<style scoped>
.location-view {
  padding-top: 80px;
  min-height: 100vh;
}

.location-banner {
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
  position: relative;
  padding-bottom: 10px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background-color: #0c4da2;
}

/* 회사 정보 섹션 */
.company-info-section {
  margin-bottom: 40px;
}

.info-card {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.info-item {
  flex: 1;
  min-width: 250px;
}

.info-title {
  font-size: 18px;
  font-weight: bold;
  color: #0c4da2;
  margin-bottom: 10px;
}

.info-content {
  font-size: 16px;
  line-height: 1.6;
  color: #444;
}

.copy-button {
  margin-top: 10px;
  padding: 6px 12px;
  background-color: #0c4da2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.copy-button:hover {
  background-color: #0a3f85;
}

/* 지도 섹션 */
.map-section {
  margin-bottom: 50px;
}

.map-container {
  width: 100%;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.map-loading {
  text-align: center;
  padding: 100px 0;
  color: #666;
  background-color: #f5f5f5;
  border-radius: 8px;
}

/* 교통편 안내 섹션 */
.transportation-section {
  margin-bottom: 60px;
}

.transportation-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 30px;
}

.transport-card {
  flex: 1;
  min-width: 300px;
  background-color: #fff;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.transport-title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #f0f0f0;
}

.transport-content {
  color: #444;
  line-height: 1.7;
}

.transport-content p {
  margin-bottom: 12px;
}

.transport-content strong {
  color: #0c4da2;
}

@media (max-width: 768px) {
  .info-card {
    flex-direction: column;
    gap: 20px;
  }

  .info-item {
    min-width: 100%;
  }

  .transportation-cards {
    flex-direction: column;
  }

  .transport-card {
    min-width: 100%;
  }

  .map-container {
    height: 350px;
  }
}
</style>
