<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

interface ProductItem {
  name: string
  outer: string
  inner: string
  quantity: string
  mainCategory: string
  outerWidth: string
  outerDepth: string
  outerHeight: string
  innerWidth: string
  innerDepth: string
  innerHeight: string
}

const products = ref<ProductItem[]>([])
const isLoading = ref(true)
const hasError = ref(false)
const searchKeyword = ref('')
const filteredProducts = ref<ProductItem[]>([])
const selectedCategory = ref<string>('all')
const categories = ref<string[]>([])

onMounted(async () => {
  try {
    const response = await axios.get('/yjc-data.json')
    products.value = response.data
    filteredProducts.value = response.data

    // 카테고리 목록 추출
    const uniqueCategories = new Set<string>()
    response.data.forEach((product: ProductItem) => {
      if (product.mainCategory) {
        uniqueCategories.add(product.mainCategory)
      }
    })
    categories.value = Array.from(uniqueCategories).sort()

    isLoading.value = false
  } catch (error) {
    console.error('데이터를 불러오는 중 오류가 발생했습니다:', error)
    hasError.value = true
    isLoading.value = false
  }
})

const searchProducts = () => {
  applyFilters()
}

const applyFilters = () => {
  let result = products.value

  // 카테고리 필터링
  if (selectedCategory.value !== 'all') {
    result = result.filter((product) => product.mainCategory === selectedCategory.value)
  }

  // 키워드 필터링
  if (searchKeyword.value.trim()) {
    const keyword = searchKeyword.value.toLowerCase()
    result = result.filter(
      (product) =>
        product.name.toLowerCase().includes(keyword) ||
        product.mainCategory.toLowerCase().includes(keyword) ||
        product.inner.toLowerCase().includes(keyword) ||
        product.outer.toLowerCase().includes(keyword),
    )
  }

  filteredProducts.value = result
}

const totalCount = computed(() => filteredProducts.value.length)
</script>

<template>
  <main class="search-view">
    <div class="search-banner">
      <div class="banner-content">
        <h1 class="banner-title">제품 검색</h1>
        <p class="banner-description">원하시는 제품을 검색해보세요.</p>
      </div>
    </div>

    <div class="container">
      <div class="search-container">
        <div class="search-filters">
          <div class="category-filter">
            <label for="category-select">제품 분류</label>
            <select
              id="category-select"
              v-model="selectedCategory"
              @change="applyFilters"
              class="category-select"
            >
              <option value="all">전체 분류</option>
              <option v-for="category in categories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
          </div>

          <div class="search-box">
            <input
              type="text"
              v-model="searchKeyword"
              @input="searchProducts"
              placeholder="제품명, 분류, 규격 등으로 검색하세요"
              class="search-input"
            />
            <button @click="searchProducts" class="search-button">검색</button>
          </div>
        </div>
      </div>

      <div class="search-results">
        <div v-if="isLoading" class="loading-message">데이터를 불러오는 중입니다...</div>

        <div v-else-if="hasError" class="error-message">
          데이터를 불러오는 데 문제가 발생했습니다. 다시 시도해주세요.
        </div>

        <div v-else>
          <div class="result-summary">
            검색 결과: <strong>{{ totalCount }}개</strong>의 제품이 검색되었습니다.
          </div>

          <div v-if="filteredProducts.length === 0" class="no-results">검색 결과가 없습니다.</div>

          <div v-else class="table-container">
            <table class="products-table">
              <thead>
                <tr>
                  <th>순번</th>
                  <th>분류</th>
                  <th>제품명</th>
                  <th>내경</th>
                  <th>외경</th>
                  <th>수량</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(product, index) in filteredProducts" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ product.mainCategory }}</td>
                  <td>{{ product.name }}</td>
                  <td>{{ product.inner }}</td>
                  <td>{{ product.outer }}</td>
                  <td>{{ product.quantity }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.search-view {
  padding-top: 80px;
  min-height: 100vh;
}

.search-banner {
  height: 200px;
  background-color: #0c4da2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

.banner-content {
  text-align: center;
}

.banner-title {
  color: white;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 15px;
}

.banner-description {
  color: white;
  font-size: 16px;
  margin-bottom: 5px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.search-container {
  margin-bottom: 30px;
}

.search-filters {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  margin: 0 auto;
}

.category-filter {
  display: flex;
  align-items: center;
  gap: 10px;
}

.category-filter label {
  min-width: 80px;
  font-weight: bold;
}

.category-select {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
}

.search-box {
  display: flex;
}

.search-input {
  flex: 1;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
  outline: none;
}

.search-button {
  background-color: #0c4da2;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 16px;
}

.search-button:hover {
  background-color: #0a3c82;
}

.result-summary {
  margin-bottom: 15px;
  font-size: 16px;
  color: #555;
}

.loading-message,
.error-message,
.no-results {
  text-align: center;
  padding: 30px;
  font-size: 18px;
  color: #555;
}

.error-message {
  color: #d32f2f;
}

.table-container {
  overflow-x: auto;
}

.products-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.products-table th,
.products-table td {
  border: 1px solid #ddd;
  padding: 12px 15px;
  text-align: center;
}

.products-table th {
  background-color: #f0f4f8;
  font-weight: bold;
  color: #333;
}

.products-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.products-table tr:hover {
  background-color: #f0f0f0;
}
</style>
