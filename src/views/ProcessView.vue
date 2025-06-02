<template>
  <div class="process-view">
    <PageBanner title="EPS 생산공정" description="EPS 생산공정 안내" />
    <PageTwoColumn>
      <template #right>
        <div class="process-flow">
          <div class="process-row">
            <template v-for="(row, rowIdx) in rows[0]" :key="rowIdx">
              <div class="process-step">
                <img :src="row.img" :alt="row.label" class="process-img" />
                <div class="process-label">{{ row.label }}</div>
                <template v-if="rowIdx === 2">
                  <ArrowDown :width="29" :height="29" color="#1a237e" />
                </template>
              </div>
              <template v-if="rowIdx < rows[0].length - 1">
                <div class="process-arrow">
                  <ArrowRight :width="29" :height="29" color="#1a237e" />
                </div>
              </template>
            </template>
          </div>
          <div class="process-row">
            <template v-for="(row, rowIdx) in rows[1]" :key="rowIdx">
              <div class="process-step">
                <img :src="row.img" :alt="row.label" class="process-img" />
                <div class="process-label">{{ row.label }}</div>
                <template v-if="rowIdx === 0">
                  <ArrowDown :width="29" :height="29" color="#1a237e" />
                </template>
              </div>
              <template v-if="rowIdx < rows[1].length - 1">
                <div class="process-arrow">
                  <ArrowLeft :width="29" :height="29" color="#1a237e" />
                </div>
              </template>
            </template>
          </div>
          <div class="process-row">
            <template v-for="(row, rowIdx) in rows[2]" :key="rowIdx">
              <div class="process-step">
                <img :src="row.img" :alt="row.label" class="process-img" />
                <div class="process-label">{{ row.label }}</div>
              </div>
              <template v-if="rowIdx < rows[2].length - 1">
                <div class="process-arrow">
                  <ArrowRight :width="29" :height="29" color="#1a237e" />
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
import { ArrowLeft, ArrowRight, ArrowDown } from '@iconoir/vue'
import PageBanner from '@/components/common/PageBanner.vue'
import PageTwoColumn from '@/components/common/PageTwoColumn.vue'

// 공정 단계 데이터
const processSteps = [
  { label: '원료 투입', img: '/images/break/목재유리1.jpeg' },
  { label: '예비발포', img: '/images/break/목재유리1.jpeg' },
  { label: '숙성', img: '/images/break/목재유리1.jpeg' },
  { label: '검사', img: '/images/break/목재유리1.jpeg' },
  { label: '건조', img: '/images/break/목재유리1.jpeg' },
  { label: '성형', img: '/images/break/목재유리1.jpeg' },
  { label: '포장', img: '/images/break/목재유리1.jpeg' },
  { label: '적재', img: '/images/break/목재유리1.jpeg' },
  { label: '출하', img: '/images/break/목재유리1.jpeg' },
]

// 3x3 그리드로 데이터 분할
const rows = [processSteps.slice(0, 3), processSteps.slice(3, 6), processSteps.slice(6, 9)]
</script>

<style scoped>
.process-view {
  width: 100%;
}

.process-flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 17px;
}

.process-row {
  display: flex;
  align-items: flex-start;
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

.process-arrow {
  height: 200px;
  display: flex;
  align-items: center;
}

.process-label {
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  text-align: center;
}

/* 반응형 스타일 */
@media (max-width: 1200px) {
  .process-img {
    width: 150px;
    height: 150px;
  }

  .process-arrow {
    height: 150px;
  }
}

@media (max-width: 900px) {
  .process-flow {
    gap: 10px;
  }

  .process-img {
    width: 120px;
    height: 120px;
  }

  .process-arrow {
    height: 120px;
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

  .process-arrow {
    height: 100px;
  }
}
</style>
