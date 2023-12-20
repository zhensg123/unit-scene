import { createRouter, createWebHashHistory } from 'vue-router'
import {generateRoutes} from './util'

// require.context在函数内部使用会报错
// 展示-布局数据
export const showLayoutViewsRoutes = generateRoutes(require.context('../views/show/layout', true, /\.vue$/), 'show-layout')

// 展示-数据展示数据
export const showDatashowViewsRoutes = generateRoutes(require.context('../views/show/datashow', true, /\.vue$/), 'show-datashow')

// 展示-导航数据
export const showNavigationViewsRoutes = generateRoutes(require.context('../views/show/navigation', true, /\.vue$/), 'show-navigation')

// 交互-数据
export const showInteractiveViewsRoutes = generateRoutes(require.context('../views/interactive', true, /\.vue$/), 'interactive')

// 反馈-数据
export const showFeedbackViewsRoutes = generateRoutes(require.context('../views/feedback', true, /\.vue$/), 'feedback')

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  ...showLayoutViewsRoutes,
  ...showDatashowViewsRoutes,
  ...showNavigationViewsRoutes,
  ...showInteractiveViewsRoutes,
  ...showFeedbackViewsRoutes
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
