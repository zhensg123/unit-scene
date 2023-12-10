import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import registerComponent from './components'
import 'highlight.js/styles/a11y-dark.css';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
registerComponent(app)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
