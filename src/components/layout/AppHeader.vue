<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeSubmenu = ref<string | null>(null)

const toggleSubmenu = (menu: string) => {
  if (activeSubmenu.value === menu) {
    activeSubmenu.value = null
  } else {
    activeSubmenu.value = menu
  }
}

const navigateTo = (path: string) => {
  router.push(path)
  activeSubmenu.value = null
}

// 메뉴 아이템 정의
const menuItems = [
  {
    name: '회사소개',
    path: '/company',
    submenu: [
      { name: 'CEO 인사말', path: '/company/ceo' },
      { name: '회사연혁', path: '/company/history' },
      { name: '인천산단환경협의회', path: '/company/environment' },
      { name: '홍보영상물', path: '/company/promotion' },
      { name: '오시는 길', path: '/company/location' },
      { name: '투자정보서', path: '/company/investment' },
    ],
  },
  {
    name: '제품소개',
    path: '/products',
    submenu: [
      { name: '무기화합물', path: '/products/inorganic' },
      { name: '바켈라이트', path: '/products/bakelite' },
      { name: '일반약품', path: '/products/general' },
      { name: '나노도금합금개발', path: '/products/nano' },
      { name: '주석도금합금개발', path: '/products/tin' },
      { name: '아크다이어학염료', path: '/products/dye' },
    ],
  },
  {
    name: 'R&D',
    path: '/rnd',
    submenu: [
      { name: '연구소 소개', path: '/rnd/intro' },
      { name: '전담부서', path: '/rnd/department' },
      { name: '연구개발', path: '/rnd/development' },
    ],
  },
  {
    name: '사업영역',
    path: '/business',
    submenu: [
      { name: '인천공장사업', path: '/business/incheon' },
      { name: '석탄공장사업', path: '/business/coal' },
      { name: 'MSDS', path: '/business/msds' },
      { name: 'NEWS공지사항', path: '/business/news' },
    ],
  },
  {
    name: '고객지원',
    path: '/support',
    submenu: [],
  },
]

// 언어 선택 옵션
const languages = [
  { code: 'kr', name: 'KR' },
  { code: 'en', name: 'EN' },
  { code: 'cn', name: '中文' },
  { code: 'jp', name: '日本語' },
]
const currentLang = ref('kr')

const changeLang = (lang: string) => {
  currentLang.value = lang
}
</script>

<template>
  <header class="app-header">
    <div class="header-container">
      <!-- 로고 영역 -->
      <div class="logo">
        <a href="/" @click.prevent="navigateTo('/')">
          <img src="/src/assets/logo.svg" alt="인천화학 로고" />
        </a>
      </div>

      <!-- 메인 메뉴 -->
      <nav class="main-menu">
        <ul>
          <li
            v-for="(item, index) in menuItems"
            :key="index"
            class="menu-item"
            @mouseover="toggleSubmenu(item.name)"
          >
            <a :href="item.path" @click.prevent="navigateTo(item.path)">{{ item.name }}</a>

            <!-- 서브메뉴 -->
            <div
              class="submenu-container"
              v-if="item.submenu.length > 0 && activeSubmenu === item.name"
            >
              <ul class="submenu">
                <li v-for="(subitem, subIndex) in item.submenu" :key="subIndex">
                  <a :href="subitem.path" @click.prevent="navigateTo(subitem.path)">{{
                    subitem.name
                  }}</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>

      <!-- 언어 선택 -->
      <div class="language-selector">
        <ul>
          <li
            v-for="lang in languages"
            :key="lang.code"
            :class="{ active: currentLang === lang.code }"
          >
            <a href="#" @click.prevent="changeLang(lang.code)">{{ lang.name }}</a>
          </li>
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

.submenu-container {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.submenu {
  list-style: none;
  padding: 10px 0;
  margin: 0;
}

.submenu li a {
  display: block;
  padding: 8px 20px;
  color: #555;
  text-decoration: none;
  font-size: 14px;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.submenu li a:hover {
  background-color: #f5f5f5;
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
