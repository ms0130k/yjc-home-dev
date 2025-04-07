<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <header class="app-header">
      <div class="header-container">
        <!-- 로고 영역 -->
        <div class="logo">
          <a href="/">
            <img src="/src/assets/logo.svg" alt="인천화학 로고" />
          </a>
        </div>

        <!-- 메인 메뉴 -->
        <nav class="main-menu">
          <ul>
            <li class="menu-item">
              <a href="/company">회사소개</a>
            </li>
            <li class="menu-item">
              <a href="/products">제품소개</a>
            </li>
            <li class="menu-item">
              <a href="/rnd">R&D</a>
            </li>
            <li class="menu-item">
              <a href="/business">사업영역</a>
            </li>
            <li class="menu-item">
              <a href="/support">고객지원</a>
            </li>
          </ul>
        </nav>

        <!-- 언어 선택 -->
        <div class="language-selector">
          <ul>
            <li class="active"><a href="#">KR</a></li>
            <li><a href="#">EN</a></li>
            <li><a href="#">中文</a></li>
            <li><a href="#">日本語</a></li>
          </ul>
        </div>

        <!-- 모바일 메뉴 버튼 -->
        <button class="mobile-menu-button">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <div class="content-container">
      <RouterView />
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

.app-container {
  min-height: 100vh;
}

.content-container {
  padding-top: 80px; /* 헤더 높이만큼 여백 추가 */
}

/* 헤더 스타일 */
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

.logo {
  padding: 10px 0;
}

.logo img {
  height: 40px;
  display: block;
}

.main-menu {
  flex: 1;
  margin-left: 50px;
}

.main-menu > ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  position: relative;
  margin: 0 15px;
}

.menu-item > a {
  display: block;
  padding: 10px 5px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s;
}

.menu-item > a:hover {
  color: #2e7d32;
}

.language-selector ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.language-selector li {
  margin-left: 10px;
}

.language-selector a {
  display: block;
  padding: 5px;
  color: #888;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
}

.language-selector .active a {
  color: #333;
  font-weight: bold;
}

.language-selector a:hover {
  color: #2e7d32;
}

.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
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
