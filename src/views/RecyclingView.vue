<template>
  <div class="recycling-view">
    <PageBanner title="재활용처리" />
    <PageTwoColumn>
      <template #right>
        <img
          src="/images/recycling/recycling-machine.png"
          alt="스티로폼 재활용 설비"
          class="recycling-main-image"
        />
        <div class="recycling-steps">
          <div class="step" v-for="step in steps" :key="step.num">
            <div class="step-icon">{{ step.num }}</div>
            <div class="step-content">
              <div class="step-title">{{ step.title }}</div>
              <div class="step-desc" v-if="step.desc">{{ step.desc }}</div>
            </div>
          </div>
        </div>
      </template>
    </PageTwoColumn>
  </div>
</template>

<script setup lang="ts">
import PageBanner from '@/components/common/PageBanner.vue'
import PageTwoColumn from '@/components/common/PageTwoColumn.vue'

const steps = [
  {
    num: 1,
    title: '깨끗한 폐스티로폼을 투입',
    desc: '',
  },
  {
    num: 2,
    title: '분쇄 및 가열',
    desc: '',
  },
  {
    num: 3,
    title: '잉코트로 재탄생',
    desc: '잉코트는 각종 건축 자재 및 장식품 등에 재사용',
  },
]
</script>

<style scoped>
.recycling-view {
  width: 100%;
}

.recycling-main-image {
  display: block;
  max-width: 600px;
  width: 100%;
  margin: 0 auto 2rem auto;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.recycling-steps {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.step {
  flex: 1 1 0;
  min-width: 180px;
  background: #f5f8ff;
  border-radius: 16px;
  padding: 1.5rem 1rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-icon {
  width: 48px;
  height: 48px;
  background: #fff;
  border: 2px solid #0c4da2;
  color: #0c4da2;
  border-radius: 50%;
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.step-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #0c4da2;
}

.step-desc {
  font-size: 0.98rem;
  color: #333;
}

@media (max-width: 900px) {
  .recycling-steps {
    flex-direction: column;
    gap: 16px;
    padding: 0 15px;
  }

  .step {
    min-width: 0;
  }

  .recycling-main-image {
    padding: 0 15px;
  }
}
</style>
