import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import store from './store/store'

import App from '@/App.vue'
import Home from '@/pages/Home.vue'
import Completed from '@/pages/Completed.vue'

import './style.css'

const routes = [
    {
        path: '/',
        component: Home
    },
    { 
        path: '/completed',
        component: Completed
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
