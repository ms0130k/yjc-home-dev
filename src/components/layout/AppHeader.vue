<script setup lang="ts">
import { useRouter } from 'vue-router'
import { defineComponent } from 'vue'

const router = useRouter()

const navigateTo = (path: string) => {
  router.push(path)
}

defineComponent({
  name: 'AppHeader',
})
</script>

<template>
  <header class="app-header">
    <div class="header-container">
      <!-- 메인 메뉴 -->
      <nav class="main-menu">
        <ul>
          <li class="menu-item">
            <a href="/company" @click.prevent="navigateTo('/company')">회사소개</a>
            <span class="menu-underline"></span>
          </li>
          <li class="menu-item">
            <a href="/products" @click.prevent="navigateTo('/products')">제품소개</a>
            <span class="menu-underline"></span>
          </li>
          <li class="menu-item">
            <a href="/rnd" @click.prevent="navigateTo('/rnd')">R&D</a>
            <span class="menu-underline"></span>
          </li>
          <li class="menu-item">
            <a href="/business" @click.prevent="navigateTo('/business')">사업영역</a>
            <span class="menu-underline"></span>
          </li>
          <li class="menu-item">
            <a href="/support" @click.prevent="navigateTo('/support')">고객지원</a>
            <span class="menu-underline"></span>
          </li>
        </ul>
      </nav>

      <!-- 모바일 메뉴 버튼 -->
      <button class="mobile-menu-button">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
  height: 80px;
}

.main-menu {
  display: flex;
  justify-content: center;
  width: 100%;
}

.main-menu > ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  position: relative;
  margin: 0 25px;
  padding: 10px 5px;
}

.menu-item > a {
  display: block;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s;
  padding-bottom: 5px;
}

.menu-item > a:hover {
  color: #2e7d32;
}

/* 언더라인 효과 스타일 */
.menu-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: #2e7d32;
  transition: width 0.3s ease;
}

.menu-item:hover .menu-underline {
  width: 100%;
}

.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  position: absolute;
  right: 20px;
}

.mobile-menu-button span {
  display: block;
  width: 25px;
  height: 2px;
  background-color: #333;
  margin: 5px 0;
  transition:
    transform 0.3s,
    opacity 0.3s;
}

@media (max-width: 968px) {
  .main-menu {
    display: none;
  }

  .mobile-menu-button {
    display: block;
  }
}
</style>
