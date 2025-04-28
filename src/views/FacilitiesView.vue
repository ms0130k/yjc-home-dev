<template>
  <PageBanner
    title="설비 현황"
    description="* 자세한 사항이나 기타 설비 문의는 전화 주시면 친절히 안내 드립니다."
  />
  <PageTwoColumn>
    <template #left>
      <div class="side-banner">
        <div class="side-title">안내 사항</div>
        <div class="side-description">
          주요 설비 현황 및 기타 문의는<br />
          아래 연락처로 문의해 주세요.
        </div>
        <div class="side-contact">
          <div class="side-tel-label">TEL</div>
          <div class="side-tel">031-997-0280</div>
        </div>
      </div>
    </template>
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
  { label: '성형기', img: '/public/images/break/목재유리1.jpeg' },
  { label: '콤프레샤', img: '/public/images/break/목재유리1.jpeg' },
  { label: '발포기', img: '/public/images/break/목재유리1.jpeg' },
  { label: '싸이로 (SILO)', img: '/public/images/break/목재유리1.jpeg' },
  { label: '펠릿/가스보일러', img: '/public/images/break/목재유리1.jpeg' },
]
</script>

<style scoped>
.box-specs-banner {
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

.banner-tel {
  color: white;
  font-size: 16px;
  font-weight: 500;
}

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
  .box-specs-banner {
    height: 180px;
  }
  .banner-title {
    font-size: 1.5rem;
  }
  .facilities-container {
    padding: 16px 4px 24px 4px;
  }
  .facilities-title {
    font-size: 1.2rem;
    margin-bottom: 18px;
    padding-bottom: 6px;
  }
  .facilities-table th,
  .facilities-table td {
    padding: 6px 4px;
    font-size: 0.9rem;
  }
}
.side-banner {
  background: #f7fafd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 32px 18px 24px 18px;
  margin-bottom: 24px;
  text-align: center;
}
.side-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #0c4da2;
  margin-bottom: 12px;
}
.side-description {
  font-size: 1rem;
  color: #333;
  margin-bottom: 18px;
}
.side-contact {
  margin-top: 12px;
  background: #fff;
  border-radius: 6px;
  padding: 10px 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
}
.side-tel-label {
  font-size: 0.95rem;
  color: #0c4da2;
  font-weight: bold;
}
.side-tel {
  font-size: 1.1rem;
  color: #222;
  font-weight: bold;
  margin-top: 2px;
}
</style>
