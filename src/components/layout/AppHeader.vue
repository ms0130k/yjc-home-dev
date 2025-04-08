<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const router = useRouter()
const isMobileMenuOpen = ref(false)
const showScrollTop = ref(false)

const navigateTo = (path: string) => {
  router.push(path)
  isMobileMenuOpen.value = false // 페이지 이동 시 모바일 메뉴 닫기
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// 스크롤 상단 버튼 표시 여부 결정
const checkScrollPosition = () => {
  showScrollTop.value = window.scrollY > 300
}

// 페이지 상단으로 스크롤
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScrollPosition)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollPosition)
})
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
        <div class="mobile-menu-header">
          <button class="close-button" @click="toggleMobileMenu" aria-label="메뉴 닫기">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
              />
            </svg>
          </button>
        </div>
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

  <!-- 카카오톡 플로팅 배너 추가 -->
  <a
    href="https://open.kakao.com/o/sy5Lanaf"
    target="_blank"
    rel="noopener noreferrer"
    class="kakao-floating-button"
    title="카카오톡 문의하기"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M12,2.772c-5.523,0-10,3.53-10,7.885,0,2.815,1.872,5.285,4.687,6.68-.153.528-.984,3.4-1.017,3.624,0,0-.02.169.09.234A.3.3,0,0,0,6,21.209c.315-.043,3.649-2.385,4.226-2.792A12.608,12.608,0,0,0,12,18.541c5.523,0,10-3.53,10-7.884S17.523,2.772,12,2.772ZM7.048,12.858a.578.578,0,0,1-1.154,0V9.431h-.9a.565.565,0,1,1,0-1.13H7.948a.565.565,0,1,1,0,1.13h-.9Zm4.849.464a.875.875,0,0,1-.367.079.472.472,0,0,1-.48-.254l-.286-.748H9.005l-.286.748a.472.472,0,0,1-.48.254.874.874,0,0,1-.366-.079c-.159-.074-.312-.275-.137-.819L9.116,8.87a.8.8,0,0,1,1.538,0L12.033,12.5C12.209,13.047,12.056,13.249,11.9,13.322Zm2.916,0H12.962a.542.542,0,0,1-.553-.529V8.878a.589.589,0,0,1,1.178,0v3.389h1.226a.529.529,0,1,1,0,1.058Zm4.292-.054a.566.566,0,0,1-.347.116.573.573,0,0,1-.461-.229l-1.353-1.793-.2.2v1.259a.577.577,0,0,1-1.154,0V8.878a.577.577,0,0,1,1.154,0v1.24l1.609-1.61a.448.448,0,0,1,.32-.128.584.584,0,0,1,.567.536.451.451,0,0,1-.127.351L17.8,10.582l1.42,1.881a.577.577,0,0,1-.113.808ZM9.885,9.74l.576,1.637H9.308Z"
      ></path>
    </svg>
  </a>

  <!-- 전화걸기 플로팅 배너 -->
  <a href="tel:031-997-0280" class="call-floating-button" title="전화 문의하기">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
      />
    </svg>
  </a>

  <!-- 스크롤 업 버튼 -->
  <button
    class="scroll-top-button"
    @click="scrollToTop"
    :class="{ visible: showScrollTop }"
    title="맨 위로 이동"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 4l-8 8h5v8h6v-8h5z" />
    </svg>
  </button>
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
  display: flex;
  flex-direction: column;
}

.mobile-menu.open {
  right: 0;
}

.mobile-menu-header {
  display: flex;
  justify-content: flex-end;
  padding: 20px 15px;
  border-bottom: 1px solid #f0f0f0;
}

.close-button {
  background: none;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.close-button:hover {
  background-color: #f5f5f5;
}

.close-button svg {
  fill: #333;
}

.mobile-menu-items {
  list-style: none;
  padding: 10px 0 0 0;
  margin: 0;
  flex: 1;
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

/* 카카오톡 플로팅 배너 스타일 */
.kakao-floating-button {
  position: fixed;
  bottom: 100px; /* 위치 조정 */
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fee500; /* 카카오톡 노란색 */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 999;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  padding: 0;
  border: none;
}

.kakao-floating-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.kakao-floating-button svg {
  width: 35px;
  height: 35px;
  fill: #000000;
}

/* 전화걸기 플로팅 배너 스타일 */
.call-floating-button {
  position: fixed;
  bottom: 30px; /* 카카오 버튼 아래로 위치 변경 */
  right: 30px; /* 카카오 버튼과 동일한 가로 위치 */
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #4caf50; /* 녹색 배경 */
  display: none; /* 기본적으로 숨김 */
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 999;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  padding: 0;
  border: none;
}

.call-floating-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.call-floating-button svg {
  width: 30px;
  height: 30px;
  fill: white;
}

/* 모바일에서 크기 조정 */
@media (max-width: 768px) {
  .kakao-floating-button {
    width: 50px;
    height: 50px;
    bottom: 80px; /* 모바일에서 위치 조정 */
    right: 20px;
  }

  .kakao-floating-button svg {
    width: 30px;
    height: 30px;
  }

  /* 모바일에서만 전화걸기 버튼 표시 */
  .call-floating-button {
    display: flex;
    width: 50px;
    height: 50px;
    bottom: 20px;
    right: 20px; /* 카카오톡 버튼과 동일한 가로 위치 */
  }

  .call-floating-button svg {
    width: 26px;
    height: 26px;
  }

  /* 스크롤 버튼이 표시될 때 버튼들 위치 조정 */
  .scroll-top-button.visible ~ .kakao-floating-button {
    bottom: 140px; /* 스크롤 버튼이 있을 때 위로 올림 */
  }

  .scroll-top-button.visible ~ .call-floating-button {
    bottom: 80px; /* 스크롤 버튼이 있을 때 위로 올림 */
  }
}

/* 스크롤 상단 버튼 스타일 */
.scroll-top-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 998;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease,
    transform 0.3s ease;
  border: none;
  transform: translateY(20px);
}

.scroll-top-button.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.scroll-top-button svg {
  width: 24px;
  height: 24px;
  fill: #333;
}

.scroll-top-button:hover {
  background-color: #f5f5f5;
}

/* 모바일에서 크기와 위치 조정 */
@media (max-width: 768px) {
  .scroll-top-button {
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 20px;
  }

  .scroll-top-button svg {
    width: 20px;
    height: 20px;
  }
}
</style>
