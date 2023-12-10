import { createRouter, createWebHashHistory } from 'vue-router'
import {generateRoutes} from './util'

// require.context在函数内部使用会报错
// 展示-布局数据
export const showLayoutViewsRoutes = generateRoutes(require.context('../views/show/layout', true, /\.vue$/), 'show-layout')

// 展示-数据展示数据
export const showDatashowViewsRoutes = generateRoutes(require.context('../views/show/datashow', true, /\.vue$/), 'show-datashow')

// 展示-导航数据
export const showNavigationViewsRoutes = generateRoutes(require.context('../views/show/navigation', true, /\.vue$/), 'show-navigation')

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/show-layout-VerticalCenter'
  },
  ...showLayoutViewsRoutes,
  ...showDatashowViewsRoutes,
  ...showNavigationViewsRoutes,
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
