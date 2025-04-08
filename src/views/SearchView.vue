<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
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

interface SearchFilters {
  name: string
  innerWidth: string
  innerDepth: string
  innerHeight: string
  outerWidth: string
  outerDepth: string
  outerHeight: string
}

const products = ref<ProductItem[]>([])
const isLoading = ref(true)
const hasError = ref(false)
const searchFilters = ref<SearchFilters>({
  name: '',
  innerWidth: '',
  innerDepth: '',
  innerHeight: '',
  outerWidth: '',
  outerDepth: '',
  outerHeight: '',
})
const tolerance = ref<number>(0)
const filteredProducts = ref<ProductItem[]>([])
const selectedCategory = ref<string>('all')
const categories = ref<string[]>([])

onMounted(async () => {
  try {
    const response = await axios.get('/yjc-data.json')
    products.value = response.data

    // 정렬된 데이터 설정
    filteredProducts.value = sortByDefault([...response.data])

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

// 기본 정렬 함수: 분류 > 제품명 > 외경 > 내경 순
const sortByDefault = (items: ProductItem[]) => {
  return [...items].sort((a, b) => {
    // 1. 분류 기준 정렬
    const categoryCompare = a.mainCategory.localeCompare(b.mainCategory)
    if (categoryCompare !== 0) return categoryCompare

    // 2. 제품명 기준 정렬
    const nameCompare = a.name.localeCompare(b.name)
    if (nameCompare !== 0) return nameCompare

    // 3. 외경 기준 정렬
    const outerCompare = a.outer.localeCompare(b.outer)
    if (outerCompare !== 0) return outerCompare

    // 4. 내경 기준 정렬
    return a.inner.localeCompare(b.inner)
  })
}

// 오차 범위 내에 있는지 확인하는 함수
const isWithinTolerance = (value: string, target: string, toleranceValue: number): boolean => {
  if (!value || !target || !toleranceValue) return false

  // 숫자가 아닌 경우 문자열 비교
  if (isNaN(Number(value)) || isNaN(Number(target))) {
    return value.includes(target)
  }

  const valueNum = Number(value)
  const targetNum = Number(target)

  return valueNum >= targetNum - toleranceValue && valueNum <= targetNum + toleranceValue
}

// 필터 초기화 함수
const clearFilters = () => {
  searchFilters.value = {
    name: '',
    innerWidth: '',
    innerDepth: '',
    innerHeight: '',
    outerWidth: '',
    outerDepth: '',
    outerHeight: '',
  }
  selectedCategory.value = 'all'
  tolerance.value = 0

  // 필터 초기화시 기본 정렬 적용
  filteredProducts.value = sortByDefault([...products.value])
}

const applyFilters = () => {
  let result = products.value

  // 카테고리 필터링
  if (selectedCategory.value !== 'all') {
    result = result.filter((product) => product.mainCategory === selectedCategory.value)
  }

  // 제품명 필터링
  if (searchFilters.value.name.trim()) {
    const nameKeyword = searchFilters.value.name.toLowerCase()
    result = result.filter((product) => product.name.toLowerCase().includes(nameKeyword))
  }

  // 내경 필터링 (오차 범위 적용)
  if (searchFilters.value.innerWidth.trim()) {
    result = result.filter((product) =>
      tolerance.value > 0
        ? isWithinTolerance(product.innerWidth, searchFilters.value.innerWidth, tolerance.value)
        : product.innerWidth?.includes(searchFilters.value.innerWidth),
    )
  }

  if (searchFilters.value.innerDepth.trim()) {
    result = result.filter((product) =>
      tolerance.value > 0
        ? isWithinTolerance(product.innerDepth, searchFilters.value.innerDepth, tolerance.value)
        : product.innerDepth?.includes(searchFilters.value.innerDepth),
    )
  }

  if (searchFilters.value.innerHeight.trim()) {
    result = result.filter((product) =>
      tolerance.value > 0
        ? isWithinTolerance(product.innerHeight, searchFilters.value.innerHeight, tolerance.value)
        : product.innerHeight?.includes(searchFilters.value.innerHeight),
    )
  }

  // 외경 필터링 (오차 범위 적용)
  if (searchFilters.value.outerWidth.trim()) {
    result = result.filter((product) =>
      tolerance.value > 0
        ? isWithinTolerance(product.outerWidth, searchFilters.value.outerWidth, tolerance.value)
        : product.outerWidth?.includes(searchFilters.value.outerWidth),
    )
  }

  if (searchFilters.value.outerDepth.trim()) {
    result = result.filter((product) =>
      tolerance.value > 0
        ? isWithinTolerance(product.outerDepth, searchFilters.value.outerDepth, tolerance.value)
        : product.outerDepth?.includes(searchFilters.value.outerDepth),
    )
  }

  if (searchFilters.value.outerHeight.trim()) {
    result = result.filter((product) =>
      tolerance.value > 0
        ? isWithinTolerance(product.outerHeight, searchFilters.value.outerHeight, tolerance.value)
        : product.outerHeight?.includes(searchFilters.value.outerHeight),
    )
  }

  // 기본 정렬 적용
  filteredProducts.value = sortByDefault(result)
}

const totalCount = computed(() => filteredProducts.value.length)

// URL 쿼리 파라미터로부터 초기 검색 조건 설정
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  const queryParam = urlParams.get('query')
  const categoryParam = urlParams.get('category')

  if (queryParam) {
    searchFilters.value.name = queryParam
  }

  if (categoryParam) {
    selectedCategory.value = categoryParam
  }
})

// 검색 필터 또는 카테고리가 변경될 때마다 필터 적용
watch(
  [searchFilters, selectedCategory, tolerance],
  () => {
    applyFilters()
  },
  { deep: true },
)
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
          <div class="filter-row">
            <div class="filter-group">
              <label for="category-select">제품 분류</label>
              <select id="category-select" v-model="selectedCategory" class="filter-input">
                <option value="all">전체 분류</option>
                <option v-for="category in categories" :key="category" :value="category">
                  {{ category }}
                </option>
              </select>
            </div>
            <div class="filter-group">
              <label for="tolerance-select">±오차범위</label>
              <select id="tolerance-select" v-model="tolerance" class="filter-input">
                <option :value="0">오차범위 없음</option>
                <option :value="10">±10</option>
                <option :value="20">±20</option>
                <option :value="30">±30</option>
                <option :value="40">±40</option>
                <option :value="50">±50</option>
                <option :value="60">±60</option>
              </select>
            </div>
          </div>

          <div class="filter-row">
            <div class="filter-group">
              <label for="name-input">제품명</label>
              <input
                id="name-input"
                type="text"
                v-model="searchFilters.name"
                placeholder="제품명 검색"
                class="filter-input"
              />
            </div>
          </div>

          <div class="filter-section">
            <h3 class="filter-section-title">내경 규격</h3>
            <div class="filter-row dimensions">
              <div class="filter-group">
                <label for="inner-width-input">가로</label>
                <input
                  id="inner-width-input"
                  type="text"
                  v-model="searchFilters.innerWidth"
                  placeholder="내경 가로"
                  class="filter-input"
                />
              </div>
              <div class="filter-group">
                <label for="inner-depth-input">세로</label>
                <input
                  id="inner-depth-input"
                  type="text"
                  v-model="searchFilters.innerDepth"
                  placeholder="내경 세로"
                  class="filter-input"
                />
              </div>
              <div class="filter-group">
                <label for="inner-height-input">높이</label>
                <input
                  id="inner-height-input"
                  type="text"
                  v-model="searchFilters.innerHeight"
                  placeholder="내경 높이"
                  class="filter-input"
                />
              </div>
            </div>
          </div>

          <div class="filter-section">
            <h3 class="filter-section-title">외경 규격</h3>
            <div class="filter-row dimensions">
              <div class="filter-group">
                <label for="outer-width-input">가로</label>
                <input
                  id="outer-width-input"
                  type="text"
                  v-model="searchFilters.outerWidth"
                  placeholder="외경 가로"
                  class="filter-input"
                />
              </div>
              <div class="filter-group">
                <label for="outer-depth-input">세로</label>
                <input
                  id="outer-depth-input"
                  type="text"
                  v-model="searchFilters.outerDepth"
                  placeholder="외경 세로"
                  class="filter-input"
                />
              </div>
              <div class="filter-group">
                <label for="outer-height-input">높이</label>
                <input
                  id="outer-height-input"
                  type="text"
                  v-model="searchFilters.outerHeight"
                  placeholder="외경 높이"
                  class="filter-input"
                />
              </div>
            </div>
          </div>

          <div class="filter-actions">
            <button @click="clearFilters" class="clear-button">조건 초기화</button>
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
            <span v-if="tolerance > 0" class="tolerance-info">
              (±{{ tolerance }} 오차범위 적용)
            </span>
          </div>

          <div v-if="filteredProducts.length === 0" class="no-results">검색 결과가 없습니다.</div>

          <div v-else class="table-container">
            <table class="products-table">
              <thead>
                <tr>
                  <th>순번</th>
                  <th>분류</th>
                  <th>제품명</th>
                  <th>
                    내경
                    <div class="dimension-header">
                      <span>가로</span>
                      <span>세로</span>
                      <span>높이</span>
                    </div>
                  </th>
                  <th>
                    외경
                    <div class="dimension-header">
                      <span>가로</span>
                      <span>세로</span>
                      <span>높이</span>
                    </div>
                  </th>
                  <th>수량</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(product, index) in filteredProducts" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ product.mainCategory }}</td>
                  <td>{{ product.name }}</td>
                  <td class="dimensions-cell">
                    <div class="dimension-values">
                      <span>{{ product.innerWidth || '-' }}</span>
                      <span>{{ product.innerDepth || '-' }}</span>
                      <span>{{ product.innerHeight || '-' }}</span>
                    </div>
                  </td>
                  <td class="dimensions-cell">
                    <div class="dimension-values">
                      <span>{{ product.outerWidth || '-' }}</span>
                      <span>{{ product.outerDepth || '-' }}</span>
                      <span>{{ product.outerHeight || '-' }}</span>
                    </div>
                  </td>
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
  gap: 20px;
  background-color: #f5f8fc;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.filter-row {
  display: flex;
  gap: 15px;
  align-items: flex-start;
}

.filter-group {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 5px;
}

.filter-group label {
  font-weight: bold;
  font-size: 14px;
  color: #333;
}

.filter-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.filter-input:focus {
  border-color: #0c4da2;
}

.filter-section {
  border-top: 1px solid #e0e0e0;
  padding-top: 15px;
}

.filter-section-title {
  margin: 0 0 10px 0;
  font-size: 16px;
  color: #0c4da2;
}

.dimensions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.filter-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.clear-button {
  background-color: #f0f0f0;
  color: #555;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.clear-button:hover {
  background-color: #e0e0e0;
}

.result-summary {
  margin-bottom: 15px;
  font-size: 16px;
  color: #555;
}

.tolerance-info {
  margin-left: 10px;
  color: #0c4da2;
  font-weight: 500;
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
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

.dimension-header,
.dimension-values {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  font-size: 13px;
}

.dimension-header {
  color: #666;
  font-weight: normal;
  margin-top: 5px;
  font-size: 12px;
}

.dimensions-cell {
  padding: 8px 5px;
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

@media (max-width: 768px) {
  .filter-row {
    flex-direction: column;
  }

  .dimensions {
    grid-template-columns: 1fr;
  }

  .search-filters {
    padding: 15px;
  }
}
</style>
