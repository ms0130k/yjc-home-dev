<template>
  <div class="mold-making">
    <PageBanner title="금형제작" />
    <PageTwoColumn>
      <template #right>
        <img src="/images/mold/mold-stack-1.jpg" alt="금형 적재 모습" class="mold-stack-image" />
        <div class="content">
          <h2>주요 특징</h2>
          <ul>
            <li>정밀한 설계와 제작</li>
            <li>최신 장비 활용</li>
            <li>품질 보증</li>
          </ul>
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
.mold-making {
  width: 100%;
}

.mold-stack-image {
  display: block;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

@media (max-width: 768px) {
  .mold-stack-image {
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
  }
}

.content {
  padding: 2rem;
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
