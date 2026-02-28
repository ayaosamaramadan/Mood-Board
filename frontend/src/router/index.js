import MoodSpace from '@/components/Home/MoodSpace.vue'
import Selectedquote from '@/components/Selected/Selectedquote.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MoodSpace
    },
    {
        path: '/selectedid/:id',
        name: 'Selectedque',
        component: Selectedquote
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router