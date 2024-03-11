import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/view/home/index.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/view/home/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/view/login/index.vue'),
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: () => import('@/view/introduction/index.vue'),
    },
    {
      path: '/news',
      name: 'news',
      redirect: '/newsList',
      component: () => import('@/view/news/index.vue'),
      children: [
        {
          path: '/newsList',
          name: 'newsList',
          component: () => import('@/view/news/list.vue'),
        },
        {
          path: '/newsDetail',
          name: 'newsDetail',
          component: () => import('@/view/news/detail.vue'),
        },
      ],
    },
    {
      path: '/taoyuan',
      name: 'taoyuan',
      component: () => import('@/view/taoyuan/index.vue'),
      children: [
        {
          path: '/taoyuanList',
          name: 'taoyuanList',
          component: () => import('@/view/taoyuan/list.vue'),
        },
        {
          path: '/taoyuanDetail',
          name: 'taoyuanDetail',
          component: () => import('@/view/taoyuan/detail.vue'),
        },
      ],
    },
    {
      path: '/huadu',
      name: 'huadu',
      redirect: '/huaduList',
      component: () => import('@/view/huadu/index.vue'),
      children: [
        {
          path: '/huaduList',
          name: 'huaduList',
          component: () => import('@/view/huadu/list.vue'),
        },
        {
          path: '/huaduDetail',
          name: 'huaduDetail',
          component: () => import('@/view/huadu/detail.vue'),
        },
      ],
    },
    {
      path: '/travelGuide',
      name: 'travelGuide',
      redirect: '/guideList',
      component: () => import('@/view/travelGuide/index.vue'),
      children: [
        {
          path: '/guideList',
          name: 'guideList',
          component: () => import('@/view/travelGuide/list.vue'),
        },
        {
          path: '/guideDetail',
          name: 'guideDetail',
          component: () => import('@/view/travelGuide/detail.vue'),
        },
      ],
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: () => import('@/view/aboutUs/index.vue'),
    },
    {
      path: '/reserve',
      name: 'reserve',
      component: () => import('@/view/reserve/index.vue'),
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: () => import('@/view/shopping/index.vue'),
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: () => import('@/view/questionnaire/index.vue'),
    },
    {
      path: '/threeJs',
      name: 'threeJs',
      component: () => import('@/view/threeJs/index.vue'),
    },
  ],
})

export default router
