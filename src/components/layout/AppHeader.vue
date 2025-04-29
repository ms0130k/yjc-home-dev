<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const router = useRouter()
const isMobileMenuOpen = ref(false)
const showScrollTop = ref(false)
const isMoreOptionsOpen = ref(false)

const navigateTo = (path: string) => {
  router.push(path)
  isMobileMenuOpen.value = false // 페이지 이동 시 모바일 메뉴 닫기
}

const navigateAndClose = (path: string) => {
  router.push(path)
  closeMoreOptions()
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const toggleMoreOptions = () => {
  isMoreOptionsOpen.value = !isMoreOptionsOpen.value
}

const closeMoreOptions = () => {
  isMoreOptionsOpen.value = false
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

// nav-menu hover 이벤트 처리
const handleNavMenuMouseEnter = () => {
  const header = document.querySelector('.header')
  if (header) {
    header.classList.add('nav-hover')
  }
}

const handleNavMenuMouseLeave = () => {
  const header = document.querySelector('.header')
  if (header) {
    header.classList.remove('nav-hover')
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkScrollPosition)
  const navMenu = document.querySelector('.nav-menu')
  if (navMenu) {
    navMenu.addEventListener('mouseenter', handleNavMenuMouseEnter)
    navMenu.addEventListener('mouseleave', handleNavMenuMouseLeave)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollPosition)
  const navMenu = document.querySelector('.nav-menu')
  if (navMenu) {
    navMenu.removeEventListener('mouseenter', handleNavMenuMouseEnter)
    navMenu.removeEventListener('mouseleave', handleNavMenuMouseLeave)
  }
})
</script>

<template>
  <header class="header">
    <div class="header-content">
      <router-link to="/" class="logo">
        <span class="logo-text">영진화학</span>
      </router-link>

      <nav class="nav-menu">
        <!-- 메가 메뉴 배경 (맨 위로 이동) -->
        <div class="mega-menu">
          <div class="mega-menu-content"></div>
        </div>

        <div class="nav-item-wrapper">
          <router-link to="/about" class="nav-item">회사소개</router-link>
          <div class="dropdown-column">
            <router-link to="/ceo" class="dropdown-item">CEO 인사말</router-link>
            <router-link to="/about" class="dropdown-item">회사연혁</router-link>
          </div>
        </div>
        <div class="nav-item-wrapper">
          <router-link to="/facilities" class="nav-item">기술자료</router-link>
          <div class="dropdown-column">
            <router-link to="/facilities" class="dropdown-item">설비현황</router-link>
            <router-link to="/technical-data" class="dropdown-item">생산공정</router-link>
          </div>
        </div>
        <div class="nav-item-wrapper">
          <router-link to="/products" class="nav-item">제품안내</router-link>
          <div class="dropdown-column">
            <router-link to="/box-specs" class="dropdown-item">박스규격</router-link>
            <router-link to="/products" class="dropdown-item">제품안내</router-link>
          </div>
        </div>
        <div class="nav-item-wrapper">
          <router-link to="/search" class="nav-item">제품검색</router-link>
          <div class="dropdown-column">
            <router-link to="/search" class="dropdown-item">제품검색</router-link>
          </div>
        </div>
        <div class="nav-item-wrapper">
          <router-link to="/support" class="nav-item">고객지원</router-link>
          <div class="dropdown-column">
            <router-link to="/support" class="dropdown-item">제품문의</router-link>
            <router-link to="/location" class="dropdown-item">오시는길</router-link>
          </div>
        </div>
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

  <!-- 모바일용 더보기/닫기 버튼 -->
  <button
    v-if="!isMoreOptionsOpen"
    class="more-options-button"
    @click="toggleMoreOptions"
    title="더 많은 옵션"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="5" r="2" />
      <circle cx="12" cy="19" r="2" />
    </svg>
  </button>

  <button
    v-else
    class="more-options-button close-button-mobile"
    @click="closeMoreOptions"
    title="닫기"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      />
    </svg>
  </button>

  <!-- 모바일용 기능 메뉴 오버레이 -->
  <div
    class="mobile-options-overlay"
    :class="{ open: isMoreOptionsOpen }"
    @click="closeMoreOptions"
  ></div>

  <!-- 모바일용 기능 메뉴 -->
  <div class="mobile-options-menu" :class="{ open: isMoreOptionsOpen }">
    <!-- 전화걸기 버튼 -->
    <a href="tel:031-997-0280" class="mobile-option-item" title="전화 문의하기">
      <div class="option-icon phone-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
          />
        </svg>
      </div>
      <span>전화</span>
    </a>

    <!-- 오시는길 버튼 -->
    <a
      href="/location"
      @click.prevent="navigateAndClose('/location')"
      class="mobile-option-item"
      title="오시는길"
    >
      <div class="option-icon location-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
          />
        </svg>
      </div>
      <span>오시는길</span>
    </a>

    <!-- 카카오톡 버튼 (모바일 메뉴 내부용) -->
    <a
      href="https://open.kakao.com/o/sy5Lanaf"
      target="_blank"
      rel="noopener noreferrer"
      class="mobile-option-item"
      title="카카오톡 문의하기"
    >
      <div class="option-icon kakao-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12,2.772c-5.523,0-10,3.53-10,7.885,0,2.815,1.872,5.285,4.687,6.68-.153.528-.984,3.4-1.017,3.624,0,0-.02.169.09.234A.3.3,0,0,0,6,21.209c.315-.043,3.649-2.385,4.226-2.792A12.608,12.608,0,0,0,12,18.541c5.523,0,10-3.53,10-7.884S17.523,2.772,12,2.772Z"
          ></path>
        </svg>
      </div>
      <span>카카오톡</span>
    </a>
  </div>

  <!-- 전화걸기 플로팅 배너 (모바일 전용이지만 미사용) -->
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
.header {
  background-color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 100;
  height: 90px;
  width: 100%;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

.header.nav-hover {
  border-color: #eaeaea;
}

.header-content {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  align-items: center;
  height: 100%;
  background-color: #ffffff;
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin-left: 1.5rem;
  position: absolute;
  left: 0;
}

.logo img {
  height: 60px;
  margin-right: 1rem;
}

.logo-text {
  font-size: 1.8rem;
  font-weight: bold;
  color: #1a237e;
}

.nav-menu {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 8rem;
  margin: 0 auto;
  position: relative;
}

.nav-item-wrapper {
  position: relative;
  height: 70px;
  display: flex;
  align-items: center;
}

.nav-item {
  font-size: 1.2rem;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.3s;
  white-space: nowrap;
  text-align: center;
}

.nav-item:hover {
  color: #1a237e;
}

/* 메가 메뉴 스타일 */
.mega-menu {
  position: fixed;
  top: 90px;
  left: 0;
  width: 100%;
  height: 200px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 99;
  transform: translateY(-5px);
  box-sizing: border-box;
}

/* nav-menu에 호버했을 때 메가메뉴 표시 */
.nav-menu:hover .mega-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* dropdown-column 스타일 수정 */
.dropdown-column {
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 99;
  background-color: transparent;
  box-sizing: border-box;
}

/* nav-menu에 호버했을 때 모든 dropdown-column 표시 */
.nav-menu:hover .dropdown-column {
  opacity: 1;
  visibility: visible;
}

/* nav-item-wrapper에 호버했을 때의 스타일은 제거하고 대신 active 스타일 추가 */
.nav-item-wrapper:hover .nav-item {
  color: #1a237e;
}

.dropdown-item {
  display: block;
  padding: 0.5rem 1rem;
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
  white-space: nowrap;
  text-align: center;
}

.dropdown-item:hover {
  color: #1a237e;
}

@media (max-width: 968px) {
  .mega-menu,
  .dropdown-column {
    display: none;
  }
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
  font-size: 1.2rem;
  transition: background-color 0.3s;
}

.mobile-menu-item a:hover {
  background-color: transparent;
  color: #2e7d32;
}

@media (max-width: 968px) {
  .nav-menu {
    display: none;
  }

  .mobile-menu-button {
    display: block;
  }
}

/* 카카오톡 플로팅 배너 스타일 */
.kakao-floating-button {
  position: fixed;
  bottom: 30px;
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

/* 전화걸기 플로팅 배너 스타일 - 기존에 있었지만 미사용 */
.call-floating-button {
  display: none; /* 항상 숨김 처리 */
}

/* 모바일용 더보기 버튼 스타일 */
.more-options-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #1a237e; /* 짙은 남색 */
  display: none; /* 기본적으로 숨김 (데스크톱) */
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 999;
  cursor: pointer;
  border: none;
  padding: 0;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.more-options-button svg {
  width: 28px;
  height: 28px;
  fill: white;
}

.more-options-button.close-button-mobile svg {
  width: 28px;
  height: 28px;
  fill: white;
}

.more-options-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

/* 모바일용 메뉴 오버레이 스타일 */
.mobile-options-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
}

.mobile-options-overlay.open {
  opacity: 1;
  visibility: visible;
}

/* 모바일용 메뉴 스타일 */
.mobile-options-menu {
  position: fixed;
  bottom: 110px;
  right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease,
    transform 0.3s ease;
}

.mobile-options-menu.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* 모바일 옵션 아이템 스타일 */
.mobile-option-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: 5px;
}

.option-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.option-icon svg {
  width: 28px;
  height: 28px;
  fill: white;
}

.option-icon.phone-icon {
  background-color: #1a237e; /* 짙은 남색으로 통일 */
}

.option-icon.location-icon {
  background-color: #1a237e; /* 짙은 남색으로 통일 */
}

.option-icon.kakao-icon {
  background-color: #fee500; /* 카카오톡 노란색 유지 */
}

.option-icon.kakao-icon svg {
  fill: #000000;
}

.mobile-option-item span {
  color: white;
  font-size: 12px;
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

/* 모바일에서 크기 조정 */
@media (max-width: 768px) {
  .kakao-floating-button {
    display: none; /* 모바일에서는 카카오톡 플로팅 버튼 숨김 */
  }

  .more-options-button {
    display: flex; /* 모바일에서만 더보기 버튼 표시 */
    width: 50px;
    height: 50px;
    bottom: 20px;
    right: 20px;
  }

  .more-options-button svg {
    width: 24px;
    height: 24px;
  }

  .mobile-options-menu {
    bottom: 90px;
    right: 20px;
  }

  .option-icon {
    width: 45px;
    height: 45px;
  }

  .option-icon svg {
    width: 24px;
    height: 24px;
  }

  /* 스크롤 버튼이 표시될 때 버튼들 위치 조정 */
  .scroll-top-button.visible ~ .more-options-button {
    bottom: 80px;
  }

  .scroll-top-button.visible ~ .mobile-options-menu {
    bottom: 150px;
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
