<template>
  <div class="mold-making">
    <PageBanner
      title="금형제작"
      subtitle="고품질 금형 제작 서비스"
      background-image="/images/banner/mold-making-banner.jpg"
    />
    <PageTwoColumn>
      <template #right>
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

.content {
  padding: 2rem;
}

h2 {
  color: #1a237e;
  margin-bottom: 1.5rem;
}

ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}
</style>
