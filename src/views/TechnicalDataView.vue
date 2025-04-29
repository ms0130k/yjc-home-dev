<template>
  <div class="technical-data">
    <PageBanner title="EPS 생산공정" description="EPS 생산공정 안내" />
    <PageTwoColumn>
      <template #right>
        <div class="process-flow">
          <div v-for="(row, rowIdx) in rows" :key="rowIdx" class="process-row">
            <template v-for="(step, colIdx) in row" :key="step.label">
              <div class="process-step">
                <img :src="step.img" :alt="step.label" class="process-img" />
                <div class="process-label">{{ step.label }}</div>
              </div>
              <!-- 화살표: 마지막 이미지 뒤에는 표시하지 않음 -->
              <template v-if="colIdx < row.length - 1">
                <div class="arrow" :class="getArrowClass(rowIdx)">
                  {{ getArrowSymbol(rowIdx) }}
                </div>
              </template>
            </template>
          </div>
        </div>
      </template>
    </PageTwoColumn>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageBanner from '@/components/common/PageBanner.vue'
import PageTwoColumn from '@/components/common/PageTwoColumn.vue'

// 공정 단계 데이터
const processSteps = [
  { label: '원료 투입', img: '/images/break/목재유리1.jpeg' },
  { label: '예비발포', img: '/images/break/목재유리1.jpeg' },
  { label: '숙성', img: '/images/break/목재유리1.jpeg' },
  { label: '성형', img: '/images/break/목재유리1.jpeg' },
  { label: '건조', img: '/images/break/목재유리1.jpeg' },
  { label: '검사', img: '/images/break/목재유리1.jpeg' },
  { label: '포장', img: '/images/break/목재유리1.jpeg' },
  { label: '적재', img: '/images/break/목재유리1.jpeg' },
  { label: '출하', img: '/images/break/목재유리1.jpeg' },
]

// 3x3 그리드로 데이터 분할
const rows = [processSteps.slice(0, 3), processSteps.slice(3, 6), processSteps.slice(6, 9)]

// 화살표 방향 결정 함수
const getArrowSymbol = (rowIdx: number) => (rowIdx % 2 === 0 ? '→' : '←')
const getArrowClass = (rowIdx: number) => (rowIdx % 2 === 0 ? 'arrow-right' : 'arrow-left')
</script>

<style scoped>
.technical-data {
  width: 100%;
}

.process-flow {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  padding: 20px;
}

.process-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
}

.process-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.process-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.process-label {
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  text-align: center;
}

.arrow {
  font-size: 2.5rem;
  color: #0c4da2;
  font-weight: bold;
  margin: 0 8px;
  display: flex;
  align-items: center;
}

.arrow-left {
  transform: scaleX(-1);
}

/* 반응형 스타일 */
@media (max-width: 1200px) {
  .process-img {
    width: 150px;
    height: 150px;
  }

  .arrow {
    font-size: 2rem;
    margin: 0 4px;
  }
}

@media (max-width: 900px) {
  .process-flow {
    gap: 20px;
  }

  .process-img {
    width: 120px;
    height: 120px;
  }

  .arrow {
    font-size: 1.5rem;
  }

  .process-label {
    font-size: 0.9rem;
  }
}

@media (max-width: 600px) {
  .process-img {
    width: 100px;
    height: 100px;
  }

  .arrow {
    font-size: 1.2rem;
    margin: 0 2px;
  }
}
</style>
