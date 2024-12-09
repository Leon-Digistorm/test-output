import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'

import App from '@/App.vue'
import Home from '@/pages/Home.vue'

import './style.css'

const routes = [
    {
        path: '/',
        component: Home
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
