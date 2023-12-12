import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import registerComponent from './components'
import registerPackages from './packages'

import 'highlight.js/styles/a11y-dark.css';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../element-ui/lib/theme-chalk/index.css';
import './style/global.css'
const app = createApp(App)
registerComponent(app)
registerPackages(app)

app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
