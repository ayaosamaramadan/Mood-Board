import './assets/main.css'
import router from './router/router'
import { createApp } from 'vue'

import App from './App.vue'
import { createPinia } from 'pinia'
import store from './store/auth'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(store)
app.mount('#app')