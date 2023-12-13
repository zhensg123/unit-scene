import { createRouter, createWebHashHistory } from 'vue-router'
import {generateRoutes} from './util'

// require.context在函数内部使用会报错
// 展示-布局数据
export const showLayoutViewsRoutes = generateRoutes(require.context('../views/show/layout', true, /\.vue$/), 'show-layout')

// 展示-数据展示数据
export const showDatashowViewsRoutes = generateRoutes(require.context('../views/show/datashow', true, /\.vue$/), 'show-datashow')
console.log(showDatashowViewsRoutes, 'dede')
// 展示-导航数据
export const showNavigationViewsRoutes = generateRoutes(require.context('../views/show/navigation', true, /\.vue$/), 'show-navigation')

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  ...showLayoutViewsRoutes,
  ...showDatashowViewsRoutes,
  ...showNavigationViewsRoutes
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
