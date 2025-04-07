<script setup lang="ts">
import { defineComponent, ref } from 'vue'

const activeTab = ref('상품A')

const changeTab = (tab: string) => {
  activeTab.value = tab
}

defineComponent({
  name: 'ProductsView',
})
</script>

<template>
  <main class="products-view">
    <!-- 제품소개 이미지 영역 -->
    <div class="product-banner">
      <div class="banner-text">제품소개</div>
    </div>

    <div class="container">
      <!-- 제품 탭 메뉴 -->
      <div class="product-tabs">
        <button
          v-for="tab in ['상품A', '상품B', '상품C', '상품D', '상품E']"
          :key="tab"
          :class="['tab-button', { active: activeTab === tab }]"
          @click="changeTab(tab)"
        >
          {{ tab }}
        </button>
      </div>

      <!-- 제품 콘텐츠 -->
      <div class="product-content">
        <div v-if="activeTab === '상품A'" class="tab-content">
          <h2>상품A 소개</h2>
          <p>상품A에 대한 상세 설명입니다. 여기에 제품 정보가 표시됩니다.</p>
        </div>

        <div v-else-if="activeTab === '상품B'" class="tab-content">
          <h2>상품B 소개</h2>
          <p>상품B에 대한 상세 설명입니다. 여기에 제품 정보가 표시됩니다.</p>
        </div>

        <div v-else-if="activeTab === '상품C'" class="tab-content">
          <h2>상품C 소개</h2>
          <p>상품C에 대한 상세 설명입니다. 여기에 제품 정보가 표시됩니다.</p>
        </div>

        <div v-else-if="activeTab === '상품D'" class="tab-content">
          <h2>상품D 소개</h2>
          <p>상품D에 대한 상세 설명입니다. 여기에 제품 정보가 표시됩니다.</p>
        </div>

        <div v-else-if="activeTab === '상품E'" class="tab-content">
          <h2>상품E 소개</h2>
          <p>상품E에 대한 상세 설명입니다. 여기에 제품 정보가 표시됩니다.</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.products-view {
  padding-top: 80px;
  min-height: 100vh;
}

.product-banner {
  height: 250px;
  background-color: #cc0000; /* 붉은색 영역 표시 */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

.banner-text {
  color: white;
  font-size: 40px;
  font-weight: bold;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.product-tabs {
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 30px;
}

.tab-button {
  padding: 15px 25px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  outline: none;
  color: #555;
}

.tab-button.active {
  color: #2e7d32;
  font-weight: bold;
}

.tab-button.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #2e7d32;
}

.product-content {
  min-height: 400px;
}

.tab-content h2 {
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
}

.tab-content p {
  font-size: 16px;
  line-height: 1.6;
  color: #444;
}
</style>
