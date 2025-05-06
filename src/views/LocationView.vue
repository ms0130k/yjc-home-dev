<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PageBanner from '@/components/common/PageBanner.vue'
import PageTwoColumn from '@/components/common/PageTwoColumn.vue'
import InfoTable from '@/components/common/info-table.vue'

// Kakao 지도를 위한 변수 선언
declare const kakao: any
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
  fax: '031-997-0281',
  email: 'yjin6038@hanmail.net',
  lat: 37.640739, // 김포시 대곶면 송마리 근처 위도 좌표
  lng: 126.578385, // 김포시 대곶면 송마리 근처 경도 좌표
}

// InfoTable에 전달할 데이터
const infoRows = [
  { label: '주소', value: companyLocation.address },
  { label: '전화', value: companyLocation.phone },
  { label: '팩스', value: companyLocation.fax },
]

const mapLoaded = ref(false)

// 카카오맵 로드 및 초기화
onMounted(() => {
  // 카카오맵 API 스크립트 동적 로드
  const script = document.createElement('script')
  script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=a5ef8f3b9321b2b00dfe51aabebccb35&autoload=false`
  script.async = true

  script.onload = () => {
    kakao.maps.load(() => {
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
    center: new kakao.maps.LatLng(companyLocation.lat, companyLocation.lng),
    level: 3,
  }
  const map = new kakao.maps.Map(container, options)

  // 마커 추가
  const markerPosition = new kakao.maps.LatLng(companyLocation.lat, companyLocation.lng)
  const marker = new kakao.maps.Marker({
    position: markerPosition,
  })
  marker.setMap(map)

  // 인포윈도우 추가
  const infoContent = `<div style="padding:10px;width:200px;text-align:center;"><strong>${companyLocation.name}</strong></div>`
  const infoWindow = new kakao.maps.InfoWindow({
    content: infoContent,
  })
  infoWindow.open(map, marker)
}
</script>

<template>
  <!-- 페이지 배너 -->
  <PageBanner
    title="오시는 길"
    description="* 자세한 사항이나 기타 설비 문의는 전화 주시면 친절히 안내 드립니다."
  />

  <PageTwoColumn>
    <template #right>
      <div class="container">
        <!-- 지도 섹션 -->
        <section class="map-section">
          <div id="company-map" class="map-container"></div>
          <p v-if="!mapLoaded" class="map-loading">지도를 불러오는 중입니다...</p>
        </section>

        <!-- 회사 주소 및 연락처 섹션 -->
        <!-- 회사 정보 테이블 섹션 -->
        <section>
          <InfoTable :rows="infoRows" />
        </section>
      </div>
    </template>
  </PageTwoColumn>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
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
  border: 1px solid #e0e4ea;
}

.map-loading {
  text-align: center;
  padding: 100px 0;
  color: #666;
  background-color: #f5f5f5;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .map-container {
    height: 350px;
  }
}
</style>
