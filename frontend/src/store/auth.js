import { createStore } from 'vuex'
import router from '../router/router'
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../auth/services/firebase'
import { useMoodStore } from '@/store/moodstats'

const store = createStore({
    state: {
        user: null,
        token: localStorage.getItem('token')
    },
    getters: {
        isUserAuthenticated: state => state.token !== null
    },
    actions: {
        async login({ commit }, { email, password }) {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password)
                const token = await userCredential.user.getIdToken()
                commit('setToken', token)
                commit('setUser', {
                    uid: userCredential.user.uid,
                    displayName: userCredential.user.displayName || null,
                    email: userCredential.user.email || null,
                    providers: (userCredential.user.providerData || []).map(p => p.providerId)
                })
                return token
            } catch (err) {
                console.error('Firebase login error', err.code || err.message || err)
                throw err
            }
        },
        async signup({ commit }, { email, password }) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password)
                const token = await userCredential.user.getIdToken()
                commit('setToken', token)
                commit('setUser', {
                    uid: userCredential.user.uid,
                    displayName: userCredential.user.displayName || null,
                    email: userCredential.user.email || null,
                    providers: (userCredential.user.providerData || []).map(p => p.providerId)
                })
                return token
            } catch (err) {
                console.error('Firebase signup error', err.code || err.message || err)
                throw err
            }
        },
        async loginWithProvider({ commit }, user) {
            try {
                let token = null
                if (user && typeof user.getIdToken === 'function') {
                    token = await user.getIdToken()
                } else {
                    const current = auth.currentUser
                    if (current && typeof current.getIdToken === 'function') {
                        token = await current.getIdToken()
                    }
                }
                if (token) {
                    commit('setToken', token)
                     const u = user || auth.currentUser
                    if (u) {
                        commit('setUser', {
                            uid: u.uid,
                            displayName: u.displayName || null,
                            email: u.email || null,
                            providers: (u.providerData || []).map(p => p.providerId)
                        })
                    }
                }
                return token
            } catch (err) {
                console.error('Provider login error', err.code || err.message || err)
                throw err
            }
        },

       
    async logout({ commit }) {
            await signOut(auth)
            commit('setToken', null)
            commit('setUser', null)
            try {
                const moodStore = useMoodStore()
                moodStore.stopMoodsListener()
                moodStore.list = []
            } catch (e) {
                // ignore if Pinia not ready
            }
            router.push('/login')
        } },
    mutations: {
        setToken(state, token) {
            state.token = token
            if (token) {
                localStorage.setItem('token', token)
            } else {
                localStorage.removeItem('token')
            }
        },
        setUser(state, user) {
            state.user = user
        }
    }
})

export default store