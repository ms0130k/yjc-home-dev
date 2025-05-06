<template>
  <PageBanner
    title="설비 현황"
  />
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
              <td>4대</td>
              <td></td>
            </tr>
            <tr>
              <td>1360H Type</td>
              <td>8대</td>
              <td></td>
            </tr>
            <tr>
              <td>1700H Type</td>
              <td>5대</td>
              <td></td>
            </tr>
            <tr>
              <td>1900H Type</td>
              <td>2대</td>
              <td></td>
            </tr>
            <tr>
              <td>2000H Type</td>
              <td>2대</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">콤프레샤</td>
              <td>100HP</td>
              <td>2대</td>
              <td></td>
            </tr>
            <tr>
              <td>75HP</td>
              <td>3대</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">발포기</td>
              <td>1200P</td>
              <td>1대</td>
              <td></td>
            </tr>
            <tr>
              <td>1400P</td>
              <td>1대</td>
              <td></td>
            </tr>
            <tr>
              <td>1800P</td>
              <td>1대</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">싸이로 (SILO)</td>
              <td>EPS SILO</td>
              <td>3기</td>
              <td></td>
            </tr>
            <tr>
              <td>2종 원료 SILO</td>
              <td>6기</td>
              <td></td>
            </tr>
            <tr>
              <td>EPP SILO</td>
              <td>4기</td>
              <td></td>
            </tr>
            <tr>
              <td>가스보일러</td>
              <td>노통연관식 9톤</td>
              <td>1대</td>
              <td></td>
            </tr>
            <tr>
              <td>펠릿보일러</td>
              <td>수입산보령산 3톤</td>
              <td>1대</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="facilities-gallery">
        <div class="gallery-item" v-for="item in galleryItems" :key="item.label">
          <img :src="item.img" :alt="item.label" class="gallery-img" />
          <div class="gallery-label">{{ item.label }}</div>
        </div>
      </div>
    </template>
  </PageTwoColumn>
</template>

<script setup lang="ts">
import PageBanner from '@/components/common/PageBanner.vue'
import PageTwoColumn from '@/components/common/PageTwoColumn.vue'
const galleryItems = [
  { label: '성형기', img: '/images/break/목재유리1.jpeg' },
  { label: '콤프레샤', img: '/images/break/목재유리1.jpeg' },
  { label: '발포기', img: '/images/break/목재유리1.jpeg' },
  { label: '싸이로 (SILO)', img: '/images/break/목재유리1.jpeg' },
  { label: '펠릿/가스보일러', img: '/images/break/목재유리1.jpeg' },
]
</script>

<style scoped>
.facilities-container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 24px 48px 24px;
}

.facilities-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 32px;
  color: #222;
  border-bottom: 2px solid #e0e6ef;
  padding-bottom: 12px;
  letter-spacing: 1px;
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
.gallery-img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  background: #eee;
}
.gallery-label {
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
  color: #fff;
  background: #0c4da2;
  padding: 12px 0;
  letter-spacing: 1px;
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
