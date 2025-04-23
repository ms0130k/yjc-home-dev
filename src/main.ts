import './assets/css/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/AboutView.vue'),
    },
    {
      path: '/box-specs',
      name: 'BoxSpecs',
      component: () => import('./views/BoxSpecsView.vue'),
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('./views/ProductsView.vue'),
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('./views/SearchView.vue'),
    },
    {
      path: '/location',
      name: 'Location',
      component: () => import('./views/LocationView.vue'),
    },
  ],
})

const app = createApp(App)
app.use(PrimeVue, {
  ripple: false, // 차분한 느낌을 위해 ripple 효과 비활성화
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: 'system',
    },
  },
})

app.use(createPinia())
app.use(router)

// 리다이렉트 처리
const redirectPath = sessionStorage.getItem('redirect')
if (redirectPath) {
  sessionStorage.removeItem('redirect')
  router.push(redirectPath)
}

app.mount('#app')

// PrimeVue 라이브러리가 설치되면 아래 코드의 주석을 해제하세요
/*

// PrimeVue 스타일 - 자연친화적인 느낌을 위한 Lara Light Green 테마

// PrimeVue 4의 테마 프리셋을 사용하려면 아래와 같이 설정 (설치 필요: npm install @primeuix/themes)

// 기본 컴포넌트 임포트
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Menubar from 'primevue/menubar'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dialog from 'primevue/dialog'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'

// PrimeVue 설정


// PrimeVue 컴포넌트 전역 등록
app.component('PrimeButton', Button)
app.component('PrimeCard', Card)
app.component('PrimeInputText', InputText)
app.component('PrimeMenubar', Menubar)
app.component('PrimeDataTable', DataTable)
app.component('PrimeColumn', Column)
app.component('PrimeDialog', Dialog)
app.component('PrimeSelect', Select)
app.component('PrimeTextarea', Textarea)
*/
