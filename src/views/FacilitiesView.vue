<template>
  <PageBanner title="설비 현황" />
  <PageTwoColumn>
    <template #right>
      <div class="facilities-container">
        <table class="facilities-table">
          <thead>
            <tr>
              <th>설비명</th>
              <th>규격</th>
              <th>보유 수</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="5">성형기</td>
              <td>500GF Type</td>
              <td>2대</td>
              <td>소형 스티로폼 성형</td>
            </tr>
            <tr>
              <td>1360H Type</td>
              <td>7대</td>
              <td>스티로폼 성형</td>
            </tr>
            <tr>
              <td>1700H Type</td>
              <td>8대</td>
              <td>저발포 성형</td>
            </tr>
            <tr>
              <td>1900H Type</td>
              <td>2대</td>
              <td>양식용 부자 성형기</td>
            </tr>
            <tr>
              <td>2000H Type</td>
              <td>2대</td>
              <td>스티로폼 성형</td>
            </tr>
            <tr>
              <td>평판기</td>
              <td>3X6</td>
              <td>1대</td>
              <td>건축용 단열재 및 포장용패드</td>
            </tr>
            <tr>
              <td rowspan="2">콤프레샤</td>
              <td>100HP</td>
              <td>3대</td>
              <td>AIR 생산</td>
            </tr>
            <tr>
              <td>75HP</td>
              <td>2대</td>
              <td>AIR 생산</td>
            </tr>
            <tr>
              <td rowspan="2">발포기</td>
              <td>2800P</td>
              <td>1대</td>
              <td rowspan="2">예비발포/ 10톤 (일일생산량)</td>
            </tr>
            <tr>
              <td>1800P</td>
              <td>1대</td>
            </tr>
            <tr>
              <td>싸이로 (SILO)</td>
              <td>EPS SILO</td>
              <td>38기</td>
              <td>원료 발포 숙성용</td>
            </tr>
            <tr>
              <td>자동건조설비</td>
              <td>150평</td>
              <td></td>
              <td>제품 자동화 건조</td>
            </tr>
            <tr>
              <td>냉각설비</td>
              <td>강제순환식</td>
              <td></td>
              <td>냉각수냉각</td>
            </tr>
            <tr>
              <td>감용기(잉코트)</td>
              <td></td>
              <td>1대</td>
              <td>폐스티로폼 재활용 기계</td>
            </tr>
            <tr>
              <td>가스보일러</td>
              <td>LPG 가스보일러 10톤</td>
              <td>1대</td>
              <td>스팀생산</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="facilities-gallery">
        <div class="gallery-item" v-for="item in galleryItems" :key="item.label">
          <ImageGalleryCard :label="item.label" :images="item.images"/>
        </div>
      </div>
    </template>
  </PageTwoColumn>
</template>

<script setup lang="ts">
import PageBanner from '@/components/common/PageBanner.vue'
import PageTwoColumn from '@/components/common/PageTwoColumn.vue'
import ImageGalleryCard from '@/components/common/ImageGalleryCard.vue'
const galleryItems = [
  { label: '성형기', images: ['/images/facilities/성형기1.png', '/images/facilities/성형기2.jpg', '/images/facilities/성형기3.jpg'] },
  { label: '평판기', images: ['/images/facilities/평판기.jpg'] },
  { label: '콤프레샤', images: ['/images/facilities/콤프레샤.jpg'] },
  { label: '싸이로', images: ['/images/facilities/싸이로.jpg'] },
  { label: '가스보일러', images: ['/images/facilities/가스보일러.jpg'] },
  { label: '감용기', images: ['/images/facilities/감용기.jpg'] },
]
</script>

<style scoped>
.facilities-container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 24px 48px 24px;
}

.facilities-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
  background: #fafbfc;
}

.facilities-table th,
.facilities-table td {
  border: 1px solid #e0e6ef;
  padding: 12px 16px;
  text-align: center;
}

.facilities-table th {
  background: #f0f4f8;
  color: #222;
  font-weight: bold;
}

.facilities-table tr:nth-child(even) {
  background: #f7fafd;
}

.facilities-gallery {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin: 40px auto 0 auto;
  max-width: 1250px;
  padding: 0 24px 32px 24px;
}
.gallery-item {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f7fafd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  min-width: 120px;
}

@media (max-width: 900px) {
  .facilities-gallery {
    flex-direction: column;
    gap: 20px;
    max-width: 98vw;
  }
  .gallery-item {
    width: 100%;
    min-width: 0;
  }
}
@media (max-width: 768px) {
  .facilities-container {
    padding: 16px 4px 24px 4px;
  }
  .facilities-table th,
  .facilities-table td {
    padding: 6px 4px;
    font-size: 0.9rem;
  }
}
</style>
