import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/box-specs',
      name: 'box-specs',
      component: () => import('../views/BoxSpecsView.vue'),
    },
    {
      path: '/mold-making',
      name: 'mold-making',
      component: () => import('../views/MoldMakingView.vue'),
    },
    {
      path: '/ice-pack',
      name: 'ice-pack',
      component: () => import('../views/IcePackView.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue'),
    },
    {
      path: '/location',
      name: 'location',
      component: () => import('../views/LocationView.vue'),
    },
    {
      path: '/facilities',
      name: 'facilities',
      component: () => import('../views/FacilitiesView.vue'),
    },
    {
      path: '/process',
      name: 'process',
      component: () => import('../views/ProcessView.vue'),
    },
    {
      path: '/recycling',
      name: 'recycling',
      component: () => import('../views/RecyclingView.vue'),
    },
    {
      path: '/support',
      name: 'support-list',
      component: () => import('../views/SupportListView.vue'),
    },
    {
      path: '/support/new',
      name: 'support-write',
      component: () => import('../views/SupportWriteView.vue'),
    },
    {
      path: '/ceo',
      name: 'ceo',
      component: () => import('../views/CeoView.vue'),
    },
  ],
})

export default router
