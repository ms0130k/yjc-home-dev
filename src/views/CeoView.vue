<script setup lang="ts">
import PageTwoColumn from '@/components/common/PageTwoColumn.vue'
import InfoTable from '@/components/common/info-table.vue'
import PageBanner from '@/components/common/PageBanner.vue'

const ceoInfo = {
  name: '박명환',
  title: '대표',
  image: '/images/ceo.jpg', // 실제 이미지 경로에 맞게 수정 필요
}

const greetingSubtitle = '(주)영진화학 홈페이지를 찾아주셔서 진심으로 감사드립니다.'
const greetingContent = `
(주)30년의 노하우로 다양한 스티로폼 포장재 및 제품 제작이 가능합니다. 다양한 택배용 스티로폼 박스 및 완충제용 박스/ 패드 보유하고 있으며, 원하시는 사이즈의 완충제 생산이 가능합니다.
저희 영진화학은 1991년 8월 설립된 이후 제품개발 및 최신 자동화 설비로 품질 향상에 최선을 다하고 있습니다.
더불어 친환경에 부응코자 생산에서부터 스티로폼 재활용까지 품질 및 친환경 제일주의를 추구하는 기업으로 항상 정진하고 있습니다.
고객 여러분의 소중한 관심을 최대한 존중하여 신뢰가 더욱 깊은 기업으로, 최고의 만족을 드리기 위하여 끊임없이 노력하는 기업이 될 것을 약속드립니다. 그동안 쌓아온 기술과 신용을 바탕으로 고객여러분께 보답코자 하오니 변함없는 성원을 부탁드립니다.
`

const companyRows = [
  { label: '회사명', value: '주식회사 영진화학' },
  { label: '설립일', value: '1995년 06월 01일' },
  { label: '주요생산품', value: 'EPP / EPS / 하나팩 성형품' },
  { label: '대표자', value: '박명환' },
  { label: '소재지', value: '경기도 김포시 대곶면 대곶로 202번길 215 (송마리 245-1)' },
  { label: '전화번호', value: '031-997-0280' },
  { label: '팩스번호', value: '031-997-0281' },
  { label: '대지', value: '4,600평' },
  { label: '공장규모', value: '건물(연면적) 2,000평' },
  { label: '형태', value: '자가' },
]
</script>

<template>
  <PageBanner
    title="CEO 인사말"
  />
  <PageTwoColumn>
    <template #right>
      <div class="ceo-page">
        <div class="ceo-content">
          <div class="ceo-profile">
            <img :src="ceoInfo.image" alt="대표님 사진" class="ceo-image" />
            <div class="ceo-name">{{ ceoInfo.title }} {{ ceoInfo.name }}</div>
          </div>
          <div class="greeting-section">
            <h2 class="greeting-subtitle">{{ greetingSubtitle }}</h2>
            <div class="greeting-body">
              <span v-for="(line, idx) in greetingContent.split('\n')" :key="idx">
                {{ line }}<br v-if="line" />
              </span>
            </div>
          </div>
        </div>
        <div class="company-table-section">
          <InfoTable :rows="companyRows" />
        </div>
      </div>
    </template>
  </PageTwoColumn>
</template>

<style scoped>
.ceo-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px 60px 20px;
}
.ceo-header {
  text-align: center;
  margin-bottom: 32px;
}
.greeting-title {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: #222;
}
.greeting-underline {
  width: 60px;
  height: 3px;
  background: #0c4da2;
  margin: 0 auto;
}
.ceo-content {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  margin-bottom: 40px;
}
.ceo-profile {
  flex: 0 0 220px;
  text-align: center;
}
.ceo-image {
  width: 200px;
  height: 260px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #e0e4ea;
  margin-bottom: 12px;
}
.ceo-name {
  font-size: 1.1rem;
  color: #444;
  margin-top: 4px;
}
.greeting-section {
  flex: 1;
}
.greeting-subtitle {
  font-size: 1.15rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 18px;
}
.greeting-body {
  font-size: 1rem;
  color: #333;
  line-height: 1.9;
  white-space: pre-line;
}
.company-table-section {
  margin-top: 40px;
}
@media (max-width: 900px) {
  .ceo-content {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
  .ceo-profile {
    width: 100%;
  }
}
</style>
