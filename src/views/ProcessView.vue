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
  { label: '원료 투입', img: '/images/process/raw-material-input.jpg' },
  { label: '발포', img: '/images/process/expansion.jpg' },
  { label: '숙성', img: '/images/process/aging.jpg' },
  { label: '검사', img: '/images/process/inspection.jpg' },
  { label: '건조', img: '/images/process/drying.jpg' },
  { label: '성형', img: '/images/process/molding.jpg' },
  { label: '포장', img: '/images/process/packaging.jpg' },
  { label: '적재', img: '/images/process/stacking.jpg' },
  { label: '출하', img: '/images/process/shipping.jpg' },
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
  border-radius: 8px;
}

.process-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.process-arrow {
  height: 200px;
  display: flex;
  align-items: center;
}

.process-label {
  padding: 10px 0;
  width: 100%;
  height: 100%;
  background-color: #0c4da2;
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;
  text-align: center;
  border-radius: 0 0 10px 10px;
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
    padding: 0;
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
    padding: 4px 0;
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
