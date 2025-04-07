import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Menubar from 'primevue/menubar'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dialog from 'primevue/dialog'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'

import 'primevue/resources/themes/lara-light-blue/theme.css' // 테마
import 'primevue/resources/primevue.min.css' // 코어 CSS
import 'primeicons/primeicons.css' // 아이콘
import '/node_modules/primeflex/primeflex.css' // PrimeFlex 그리드 시스템

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, { ripple: true })

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

app.mount('#app')
