<template>
  <PageBanner title="EPS 생산공정" description="EPS 생산공정 안내" />
  <PageTwoColumn>
    <template #right>
      <div class="process-title">EPS 생산공정</div>
      <div class="process-grid">
        <div v-for="(step, idx) in processSteps" :key="step.label" class="process-step-col">
          <div class="process-step">
            <img :src="step.img" :alt="step.label" class="process-img" />
            <div class="process-label">{{ step.label }}</div>
          </div>
          <div v-if="idx < processSteps.length - 1" class="arrow-next" :class="getArrowClass(idx)">
            {{ getArrowSymbol(idx) }}
          </div>
        </div>
      </div>
    </template>
  </PageTwoColumn>
</template>

<script setup lang="ts">
import PageBanner from '@/components/common/PageBanner.vue'
import PageTwoColumn from '@/components/common/PageTwoColumn.vue'

const processSteps = [
  { label: '원재료 입고', img: '/public/images/break/목재유리1.jpeg' },
  { label: '예비발포', img: '/public/images/break/목재유리1.jpeg' },
  { label: '발포검사', img: '/public/images/break/목재유리1.jpeg' },
  { label: '공정검사', img: '/public/images/break/목재유리1.jpeg' },
  { label: '성형', img: '/public/images/break/목재유리1.jpeg' },
  { label: '숙성 (SILO)', img: '/public/images/break/목재유리1.jpeg' },
  { label: '건조', img: '/public/images/break/목재유리1.jpeg' },
  { label: '검사 및 포장', img: '/public/images/break/목재유리1.jpeg' },
  { label: '출하 검사 및 출하', img: '/public/images/break/목재유리1.jpeg' },
]

function getArrowSymbol(idx: number): string {
  if ((idx + 1) % 3 === 0) return '↓'
  if (Math.floor(idx / 3) % 2 === 0) return '→'
  return '←'
}
function getArrowClass(idx: number): string {
  if ((idx + 1) % 3 === 0) return 'down'
  if (Math.floor(idx / 3) % 2 === 0) return 'right'
  return 'left'
}
</script>

<style scoped>
.process-title {
  font-size: 2rem;
  font-weight: bold;
  color: #222;
  text-align: center;
  margin-bottom: 18px;
  border-bottom: 2px solid #e0e6ef;
  padding-bottom: 12px;
  letter-spacing: 1px;
}
.process-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin: 0 auto;
  max-width: 900px;
}
.process-step-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.process-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}
.process-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  background: #eee;
}
.process-label {
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
  color: #fff;
  background: #0c4da2;
  padding: 12px 0;
  letter-spacing: 1px;
}
.arrow-next {
  margin-top: 8px;
  font-size: 2.2rem;
  color: #0c4da2;
  font-weight: bold;
}
.arrow-next.right {
  align-self: flex-end;
}
.arrow-next.left {
  align-self: flex-start;
}
.arrow-next.down {
  align-self: center;
}
@media (max-width: 900px) {
  .process-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 98vw;
  }
}
</style>
