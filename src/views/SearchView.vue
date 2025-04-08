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
  [key: string]: string // 인덱스 타입 추가
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

interface SortDirections {
  width: 'asc' | 'desc' | 'none'
  depth: 'asc' | 'desc' | 'none'
  height: 'asc' | 'desc' | 'none'
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
const sortDimension = ref<'inner' | 'outer'>('inner') // 내경/외경 정렬 기준
const sortDirections = ref<SortDirections>({
  width: 'none',
  depth: 'none',
  height: 'none',
})

// 추가 데이터
const currentPage = ref(1)
const itemsPerPage = 20

// 페이지네이션 관련 계산 속성
const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage))
const paginatedProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return filteredProducts.value.slice(startIndex, endIndex)
})

// 페이지 변경 함수
const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

// 정렬 방향 설정 함수
const setSortDirection = (dimension: 'width' | 'depth' | 'height', direction: 'asc' | 'desc') => {
  // 같은 방향을 다시 클릭하면 정렬 해제
  if (sortDirections.value[dimension] === direction) {
    sortDirections.value[dimension] = 'none'
  } else {
    // 반대 방향이 활성화되어 있었다면 해제하고 현재 방향 활성화
    sortDirections.value[dimension] = direction
  }
  applyFilters()
}

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

// 커스텀 정렬 함수: 선택한 내경/외경 기준으로 정렬
const sortByDimensions = (items: ProductItem[]) => {
  return [...items].sort((a, b) => {
    // 정렬 기준 확인 (내경 또는 외경)
    const prefix = sortDimension.value === 'inner' ? 'inner' : 'outer'

    // 가로 기준 정렬
    if (sortDirections.value.width !== 'none') {
      const widthA = Number(a[`${prefix}Width`] || 0)
      const widthB = Number(b[`${prefix}Width`] || 0)
      if (widthA !== widthB) {
        return sortDirections.value.width === 'asc' ? widthA - widthB : widthB - widthA
      }
    }

    // 세로 기준 정렬
    if (sortDirections.value.depth !== 'none') {
      const depthA = Number(a[`${prefix}Depth`] || 0)
      const depthB = Number(b[`${prefix}Depth`] || 0)
      if (depthA !== depthB) {
        return sortDirections.value.depth === 'asc' ? depthA - depthB : depthB - depthA
      }
    }

    // 높이 기준 정렬
    if (sortDirections.value.height !== 'none') {
      const heightA = Number(a[`${prefix}Height`] || 0)
      const heightB = Number(b[`${prefix}Height`] || 0)
      if (heightA !== heightB) {
        return sortDirections.value.height === 'asc' ? heightA - heightB : heightB - heightA
      }
    }

    // 기본 정렬 (분류 > 제품명 순)
    const categoryCompare = a.mainCategory.localeCompare(b.mainCategory)
    if (categoryCompare !== 0) return categoryCompare
    return a.name.localeCompare(b.name)
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
  sortDimension.value = 'inner'
  sortDirections.value = {
    width: 'none',
    depth: 'none',
    height: 'none',
  }

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

  // 정렬 적용
  filteredProducts.value = sortByDimensions(result)

  // 첫 페이지로 이동
  currentPage.value = 1
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
  [searchFilters, selectedCategory, tolerance, sortDimension, sortDirections],
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

          <div class="filter-section">
            <h3 class="filter-section-title">정렬</h3>
            <div class="sorting-options">
              <div class="sort-controls">
                <div class="sort-left-group">
                  <div class="dimension-radio">
                    <label class="radio-label">
                      <input type="radio" v-model="sortDimension" value="inner" /> 내경
                    </label>
                    <label class="radio-label">
                      <input type="radio" v-model="sortDimension" value="outer" /> 외경
                    </label>
                  </div>

                  <div class="sort-dimensions">
                    <div class="sort-toggle-group">
                      <span class="sort-label">가로</span>
                      <div class="sort-buttons">
                        <button
                          @click="setSortDirection('width', 'asc')"
                          class="sort-toggle"
                          :class="{ active: sortDirections.width === 'asc' }"
                          title="가로 오름차순"
                        >
                          ▲
                        </button>
                        <button
                          @click="setSortDirection('width', 'desc')"
                          class="sort-toggle"
                          :class="{ active: sortDirections.width === 'desc' }"
                          title="가로 내림차순"
                        >
                          ▼
                        </button>
                      </div>
                    </div>
                    <div class="sort-toggle-group">
                      <span class="sort-label">세로</span>
                      <div class="sort-buttons">
                        <button
                          @click="setSortDirection('depth', 'asc')"
                          class="sort-toggle"
                          :class="{ active: sortDirections.depth === 'asc' }"
                          title="세로 오름차순"
                        >
                          ▲
                        </button>
                        <button
                          @click="setSortDirection('depth', 'desc')"
                          class="sort-toggle"
                          :class="{ active: sortDirections.depth === 'desc' }"
                          title="세로 내림차순"
                        >
                          ▼
                        </button>
                      </div>
                    </div>
                    <div class="sort-toggle-group">
                      <span class="sort-label">높이</span>
                      <div class="sort-buttons">
                        <button
                          @click="setSortDirection('height', 'asc')"
                          class="sort-toggle"
                          :class="{ active: sortDirections.height === 'asc' }"
                          title="높이 오름차순"
                        >
                          ▲
                        </button>
                        <button
                          @click="setSortDirection('height', 'desc')"
                          class="sort-toggle"
                          :class="{ active: sortDirections.height === 'desc' }"
                          title="높이 내림차순"
                        >
                          ▼
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="filter-actions">
                  <button @click="clearFilters" class="clear-button">조건 초기화</button>
                </div>
              </div>
            </div>
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
            <span
              v-if="
                sortDirections.width !== 'none' ||
                sortDirections.depth !== 'none' ||
                sortDirections.height !== 'none'
              "
              class="sort-info"
            >
              [{{ sortDimension === 'inner' ? '내경' : '외경' }} 기준
              <template v-if="sortDirections.width !== 'none'">
                가로 {{ sortDirections.width === 'asc' ? '▲' : '▼' }}
              </template>
              <template v-if="sortDirections.depth !== 'none'">
                {{ sortDirections.width !== 'none' ? ',' : '' }} 세로
                {{ sortDirections.depth === 'asc' ? '▲' : '▼' }}
              </template>
              <template v-if="sortDirections.height !== 'none'">
                {{ sortDirections.width !== 'none' || sortDirections.depth !== 'none' ? ',' : '' }}
                높이 {{ sortDirections.height === 'asc' ? '▲' : '▼' }}
              </template>
              ]
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
                <tr v-for="(product, index) in paginatedProducts" :key="index">
                  <td>{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
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
          <!-- 페이지네이션 추가 -->
          <div v-if="totalPages > 1" class="pagination">
            <button
              @click="goToPage(currentPage - 1)"
              class="page-button"
              :disabled="currentPage === 1"
            >
              이전
            </button>

            <div class="page-numbers">
              <button
                v-for="page in totalPages"
                :key="page"
                @click="goToPage(page)"
                class="page-number"
                :class="{ active: currentPage === page }"
              >
                {{ page }}
              </button>
            </div>

            <button
              @click="goToPage(currentPage + 1)"
              class="page-button"
              :disabled="currentPage === totalPages"
            >
              다음
            </button>
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

.tolerance-info,
.sort-info {
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
}

.products-table th,
.products-table td {
  border: 1px solid #ddd;
  padding: 6px 10px;
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
  padding: 4px 5px;
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

/* 정렬 기능 관련 스타일 수정 */
.sort-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.sort-left-group {
  display: flex;
  align-items: center;
  gap: 20px;
}

.dimension-radio {
  display: flex;
  gap: 15px;
  align-items: center;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  white-space: nowrap;
}

.sort-dimensions {
  display: flex;
  gap: 15px;
}

.sort-toggle-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sort-label {
  font-size: 14px;
  color: #555;
  min-width: 30px;
}

.sort-buttons {
  display: flex;
  flex-direction: row;
  gap: 4px;
}

.sort-toggle {
  width: 24px;
  height: 24px;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  padding: 0;
  transition: all 0.2s;
  color: #aaa;
}

.sort-toggle:hover {
  background-color: #f0f0f0;
}

.sort-toggle.active {
  background-color: #e0e8f0;
  color: #0c4da2;
  font-weight: bold;
}

.filter-actions {
  margin-top: 0;
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

  .sort-controls {
    flex-direction: column;
    align-items: flex-start;
  }

  .filter-actions {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
  }
}

/* 페이지네이션 스타일 */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
}

.page-numbers {
  display: flex;
  gap: 5px;
}

.page-number {
  width: 32px;
  height: 32px;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.page-number:hover:not(.active) {
  background-color: #f0f0f0;
}

.page-number.active {
  background-color: #0c4da2;
  color: white;
  border-color: #0c4da2;
}

.page-button {
  padding: 0 10px;
  height: 32px;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.page-button:hover:not(:disabled) {
  background-color: #f0f0f0;
}

.page-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
