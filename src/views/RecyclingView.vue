<template>
  <div class="recycling-view">
    <PageBanner title="재활용처리" />
    <PageTwoColumn>
      <template #right>
        <img
          src="/images/recycling/recycling-process.jpg"
          alt="금형 적재 모습"
          class="recycling-process-image"
        />
        <div class="content">
          <h2>주요 특징</h2>
          <div>
            <ul>
              <li>폐스티로폼 재활용</li>
              <li>환경 친화적 처리 과정</li>
              <li>고효율 재활용 기계 사용</li>
            </ul>
          </div>
        </div>
      </template>
    </PageTwoColumn>
  </div>
</template>

<script setup lang="ts">
import PageBanner from '@/components/common/PageBanner.vue'
import PageTwoColumn from '@/components/common/PageTwoColumn.vue'
</script>

<style scoped>
.recycling-view {
  width: 100%;
}

.recycling-process-image {
  display: block;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.content {
  margin-top: 2rem;
}

h2 {
  color: #1a237e;
  margin-bottom: 1rem;
}

ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}
</style>
