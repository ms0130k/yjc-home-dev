<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const isMobileMenuOpen = ref(false)

const navigateTo = (path: string) => {
  router.push(path)
  isMobileMenuOpen.value = false // 페이지 이동 시 모바일 메뉴 닫기
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <header class="app-header">
    <div class="header-container">
      <!-- 회사 로고 -->
      <div class="company-logo" @click="navigateTo('/')">
        <h1>영진화학</h1>
      </div>

      <!-- 메인 메뉴 (데스크톱) -->
      <nav class="main-menu">
        <ul>
          <li class="menu-item">
            <a href="/about" @click.prevent="navigateTo('/about')">회사소개</a>
            <span class="menu-underline"></span>
          </li>
          <li class="menu-item">
            <a href="/box-specs" @click.prevent="navigateTo('/box-specs')">박스규격</a>
            <span class="menu-underline"></span>
          </li>
          <li class="menu-item">
            <a href="/products" @click.prevent="navigateTo('/products')">제품안내</a>
            <span class="menu-underline"></span>
          </li>
          <li class="menu-item">
            <a href="/search" @click.prevent="navigateTo('/search')">제품검색</a>
            <span class="menu-underline"></span>
          </li>
          <li class="menu-item">
            <a href="/support" @click.prevent="navigateTo('/support')">제품문의</a>
            <span class="menu-underline"></span>
          </li>
          <li class="menu-item">
            <a href="/location" @click.prevent="navigateTo('/location')">오시는길</a>
            <span class="menu-underline"></span>
          </li>
        </ul>
      </nav>

      <!-- 모바일 메뉴 버튼 -->
      <button class="mobile-menu-button" @click="toggleMobileMenu">
        <span :class="{ 'top-bar': true, open: isMobileMenuOpen }"></span>
        <span :class="{ 'middle-bar': true, open: isMobileMenuOpen }"></span>
        <span :class="{ 'bottom-bar': true, open: isMobileMenuOpen }"></span>
      </button>

      <!-- 모바일 메뉴 (오버레이) -->
      <div
        class="mobile-menu-overlay"
        :class="{ open: isMobileMenuOpen }"
        @click="toggleMobileMenu"
      ></div>

      <!-- 모바일 메뉴 드로어 -->
      <nav class="mobile-menu" :class="{ open: isMobileMenuOpen }">
        <ul class="mobile-menu-items">
          <li class="mobile-menu-item">
            <a href="/about" @click.prevent="navigateTo('/about')">회사소개</a>
          </li>
          <li class="mobile-menu-item">
            <a href="/box-specs" @click.prevent="navigateTo('/box-specs')">박스규격</a>
          </li>
          <li class="mobile-menu-item">
            <a href="/products" @click.prevent="navigateTo('/products')">제품안내</a>
          </li>
          <li class="mobile-menu-item">
            <a href="/search" @click.prevent="navigateTo('/search')">제품검색</a>
          </li>
          <li class="mobile-menu-item">
            <a href="/support" @click.prevent="navigateTo('/support')">제품문의</a>
          </li>
          <li class="mobile-menu-item">
            <a href="/location" @click.prevent="navigateTo('/location')">오시는길</a>
          </li>
        </ul>
      </nav>
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
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
  height: 80px;
}

.company-logo {
  cursor: pointer;
}

.company-logo h1 {
  margin: 0;
  font-size: 24px;
  color: #2e7d32;
  font-weight: 700;
}

.main-menu {
  display: flex;
  justify-content: flex-end;
  height: 100%;
}

.main-menu > ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
}

.menu-item {
  position: relative;
  margin: 0 20px;
  padding: 0;
  height: 100%;
  display: flex;
  align-items: center;
}

.menu-item > a {
  display: flex;
  align-items: center;
  height: 100%;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s;
}

.menu-item > a:hover {
  color: #2e7d32;
  background-color: transparent;
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

/* 모바일 메뉴 버튼 스타일 */
.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1010;
}

.mobile-menu-button span {
  display: block;
  width: 25px;
  height: 2px;
  background-color: #333;
  margin: 5px 0;
  transition: all 0.3s ease;
}

/* 햄버거 버튼 애니메이션 */
.top-bar.open {
  transform: translateY(7px) rotate(45deg);
}

.middle-bar.open {
  opacity: 0;
}

.bottom-bar.open {
  transform: translateY(-7px) rotate(-45deg);
}

/* 모바일 메뉴 오버레이 */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1005;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
}

.mobile-menu-overlay.open {
  opacity: 1;
  visibility: visible;
}

/* 모바일 메뉴 드로어 스타일 */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -280px;
  width: 280px;
  height: 100%;
  background-color: white;
  z-index: 1010;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  overflow-y: auto;
}

.mobile-menu.open {
  right: 0;
}

.mobile-menu-items {
  list-style: none;
  padding: 80px 0 0 0;
  margin: 0;
}

.mobile-menu-item {
  padding: 0;
  border-bottom: 1px solid #eee;
}

.mobile-menu-item a {
  display: block;
  padding: 15px 20px;
  color: #333;
  text-decoration: none;
  font-size: 16px;
  transition: background-color 0.3s;
}

.mobile-menu-item a:hover {
  background-color: #f5f5f5;
  color: #2e7d32;
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
