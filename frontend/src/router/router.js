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
  routes,
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const isUserAuthenticated = store.getters.isUserAuthenticated

    if (requiresAuth && !isUserAuthenticated) {
        next('/login')
    } else {
        next()
    }
})

export default router