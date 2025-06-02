<template>
  <div class="ice-pack">
    <PageBanner
      title="아이스팩"
      subtitle="고품질 아이스팩 제품"
    />
    <PageTwoColumn>
      <template #right>
        <img src="/images/ice-pack/ice-pack-1.png" alt="아이스팩" class="ice-pack-image" />
        <div class="content">
          <h2>제품 특징</h2>
          <ul>
            <li>장시간 보냉 효과</li>
            <li>환경 친화적 소재</li>
            <li>다양한 사이즈</li>
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
.ice-pack {
  width: 100%;
}

.ice-pack-image {
  display: block;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
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
