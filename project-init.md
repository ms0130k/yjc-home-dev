# Vue.js + TypeScript + PrimeVue 프로젝트 초기화 가이드

## 1. Vue 프로젝트 생성 (Vue 3 + TypeScript + Vite)

```bash
# Vue 프로젝트 생성 명령어
npm create vue@latest
```

대화형 프롬프트에서 다음과 같이 선택:

- Project name: yjc-home-dev (또는 원하는 이름)
- Add TypeScript?: **Yes**
- Add JSX Support?: No (필요하면 Yes)
- Add Vue Router for Single Page Application development?: **Yes**
- Add Pinia for state management?: **Yes**
- Add Vitest for unit testing?: **Yes**
- Add an End-to-End Testing Solution?: No (필요하면 Yes)
- Add ESLint for code quality?: **Yes**
- Add Prettier for code formatting?: **Yes**

## 2. 프로젝트 폴더로 이동 및 의존성 설치

```bash
cd yjc-home-dev  # 프로젝트 폴더명으로 변경
npm install
```

## 3. PrimeVue 및 필수 라이브러리 설치

```bash
# PrimeVue 설치
npm install primevue primeicons

# HTTP 클라이언트 라이브러리
npm install axios

# 날짜 처리 라이브러리
npm install dayjs

# 유틸리티 라이브러리
npm install lodash-es
npm install @types/lodash-es --save-dev

# 폼 유효성 검사 라이브러리
npm install vee-validate yup

# Vue용 유틸리티 함수 모음
npm install @vueuse/core
```

## 4. 필요한 개발 의존성 설치

```bash
# SASS/SCSS 지원
npm install sass --save-dev

# 환경 변수 타입 지원
npm install @types/node --save-dev
```

## 5. PrimeVue 설정 (main.ts 파일 수정)

```typescript
// src/main.ts 파일 수정
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// PrimeVue 관련 임포트
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Menubar from 'primevue/menubar'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dialog from 'primevue/dialog'
import Dropdown from 'primevue/dropdown'
import Textarea from 'primevue/textarea'

// PrimeVue 스타일 임포트
import 'primevue/resources/themes/lara-light-blue/theme.css' // 테마
import 'primevue/resources/primevue.min.css' // 코어 CSS
import 'primeicons/primeicons.css' // 아이콘
import '/node_modules/primeflex/primeflex.css' // PrimeFlex 그리드 시스템

// 전역 스타일 임포트
import './assets/css/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, { ripple: true })

// PrimeVue 컴포넌트 전역 등록
app.component('Button', Button)
app.component('Card', Card)
app.component('InputText', InputText)
app.component('Menubar', Menubar)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Dialog', Dialog)
app.component('Dropdown', Dropdown)
app.component('Textarea', Textarea)

app.mount('#app')
```

## 6. index.html 파일에 모바일 뷰포트 메타 태그 추가

```bash
# index.html 파일에 다음 메타 태그가 있는지 확인하고 없으면 추가
# <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 7. PrimeFlex 설치 (반응형 그리드 시스템)

```bash
npm install primeflex
```

## 8. 개발 서버 실행

```bash
npm run dev
```

## 9. 프로젝트 구조 설정

1. `src` 폴더 안에 필요한 디렉토리 생성:

```bash
mkdir -p src/assets src/components/common src/components/layout src/components/ui src/composables src/services src/types src/utils src/views
```

2. 기본 레이아웃 컴포넌트 생성:

레이아웃 디렉토리에 헤더, 푸터, 레이아웃 컴포넌트 생성:

```bash
touch src/components/layout/AppHeader.vue
touch src/components/layout/AppFooter.vue
touch src/components/layout/MainLayout.vue
```

3. 페이지 뷰 컴포넌트 생성:

```bash
touch src/views/HomeView.vue
touch src/views/AboutView.vue
touch src/views/ProductListView.vue
touch src/views/ProductSearchView.vue
touch src/views/ContactView.vue
```

4. 환경 변수 파일 생성 (예시):

```bash
# 루트 디렉토리에 .env 파일 생성
echo "VITE_API_URL=http://localhost:3000/api" > .env.development
```

## 10. 반응형 레이아웃 예시 (src/components/layout/MainLayout.vue)

```vue
<template>
  <div class="layout-wrapper">
    <AppHeader />

    <main class="layout-content">
      <div class="grid">
        <div class="col-12">
          <slot></slot>
        </div>
      </div>
    </main>

    <AppFooter />

    <!-- 모바일 플로팅 바 (모바일에서만 표시) -->
    <div class="mobile-floating-bar block md:hidden">
      <div class="grid">
        <div class="col-3 text-center">
          <Button icon="pi pi-home" class="p-button-text" @click="navigateTo('/')" />
        </div>
        <div class="col-3 text-center">
          <Button icon="pi pi-search" class="p-button-text" @click="navigateTo('/search')" />
        </div>
        <div class="col-3 text-center">
          <Button icon="pi pi-list" class="p-button-text" @click="navigateTo('/products')" />
        </div>
        <div class="col-3 text-center">
          <Button icon="pi pi-envelope" class="p-button-text" @click="navigateTo('/contact')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

const router = useRouter()

const navigateTo = (path: string) => {
  router.push(path)
}
</script>

<style scoped>
.layout-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout-content {
  flex: 1;
  padding: 2rem;
}

.mobile-floating-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  padding: 0.5rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

@media (min-width: 768px) {
  .layout-content {
    padding: 2rem 4rem;
  }
}
</style>
```

## 11. Git 연동 및 커밋

```bash
git add .
git commit -m "Initial project setup with Vue 3, TypeScript, and PrimeVue"
git push
```

## 12. 주요 설정 파일 확인

프로젝트 생성 후 다음 파일들을 확인하고 필요시 수정:

- `vite.config.ts`: Vite 설정
- `tsconfig.json`: TypeScript 설정
- `.eslintrc.js`: ESLint 설정
- `.prettierrc.json`: Prettier 설정
