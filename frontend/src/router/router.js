import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/auth'
// import Home from '../components/Home.vue'
import Login from '../auth/views/Login.vue'
import SignUp from '../auth/views/SignUp.vue'
import MoodSpace from '@/components/Home/MoodSpace.vue'
import Selectedquote from '@/components/Selected/Selectedquote.vue'

const routes = [

    { path: '/login', name: 'Login', component: Login },
    { path: '/signup', name: 'SignUp', component: SignUp },
    {
        path: '/',
        name: 'Home',
        component: MoodSpace,

    },
    {
        path: '/selectedid/:id',
        name: 'Selectedque',
        component: Selectedquote
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const isUserAuthenticated = store.getters.isUserAuthenticated
    const publicPaths = ['/login', '/signup']
    if (!isUserAuthenticated && !publicPaths.includes(to.path)) {
        return next({ path: '/login', query: { redirect: to.fullPath } })
    }
    next()
})

export default router