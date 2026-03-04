<template>
    <header class="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 text-white dark:from-purple-900 dark:via-pink-900 dark:to-gray-900 shadow-lg">
        <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <FiStar class="w-8 h-8 text-yellow-200 animate-bounce-slow" aria-hidden="true" />
                <router-link to="/">
                    <h1 class="text-2xl md:text-3xl font-extrabold tracking-tight">Mood Board</h1>
                </router-link>
                <FiStar class="w-8 h-8 text-pink-200 hidden md:inline-block animate-bounce-slow" style="animation-delay:0.5s" aria-hidden="true" />
            </div>

            <p class="hidden md:block text-sm text-pink-50 dark:text-pink-200">Track your feelings — embrace your emotions</p>

            <div class="flex items-center gap-3">
                <nav class="hidden sm:flex items-center gap-2" aria-label="Main navigation">
                    <template v-if="!isAuthenticated">
                        <router-link to="/login" class="px-3 py-2 rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white">Login</router-link>
                        <router-link to="/signup" class="px-3 py-2 rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white">Sign Up</router-link>
                    </template>
                    <template v-if="isAuthenticated">
                        <span class="px-3 py-2 text-sm font-medium truncate max-w-xs">{{ displayName }}</span>
                        <button @click="handleLogout" class="px-3 py-2 rounded-md bg-white/20 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white">Logout</button>
                    </template>
                </nav>

                <DarkModeToggle />
            </div>
        </div>

        <div class="sm:hidden px-4 pb-3">
            <nav class="flex items-center justify-center flex-wrap gap-3" aria-label="Mobile navigation">
                <router-link to="/" class="text-sm px-2 py-1 rounded-md hover:bg-white/20">Home</router-link>
                <template v-if="!isAuthenticated">
                    <router-link to="/login" class="text-sm px-2 py-1 rounded-md hover:bg-white/20">Login</router-link>
                    <router-link to="/signup" class="text-sm px-2 py-1 rounded-md hover:bg-white/20">Sign Up</router-link>
                </template>
                <template v-if="isAuthenticated">
                    <span class="text-sm px-2 py-1 truncate max-w-[120px]">{{ displayName }}</span>
                    <button @click="handleLogout" class="text-sm px-2 py-1 rounded-md bg-white/20 hover:bg-white/30">Logout</button>
                </template>
            </nav>
        </div>
    </header>
</template>


<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['user']),
        displayName() {
            if (!this.user) return ''
            return this.user.displayName || this.user.email || 'User'
        }
    }}
</script>

<script setup>
import DarkModeToggle from '../ui/DarkModeToggle.vue';
import { FiStar } from 'vue-icons-plus/fi';

import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const isAuthenticated = computed(() => store.getters.isUserAuthenticated)
const handleLogout = async () => {
    await store.dispatch('logout')
}

</script>

<style lang="scss" scoped></style>