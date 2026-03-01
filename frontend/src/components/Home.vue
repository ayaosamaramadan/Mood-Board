<script setup>
import AppFooter from './Home/AppFooter.vue';
import AppHeader from './Home/AppHeader.vue';

</script>

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

<template>
    <div class="h-screen flex flex-col bg-gradient-to-br from-pink-100 via-purple-70 to-pink-50 overflow-hidden">
        <AppHeader />
        <main class="bg-white dark:bg-slate-900 flex-1 flex items-start justify-center px-4 py-4 overflow-hidden">
            <div>

                <h1>Home</h1>
                <p v-if="user">Welcome, {{ displayName }}</p>
                <p v-else>Welcome, Guest!</p>
            </div>
            <router-view />
        </main>
        <AppFooter />
    </div>
</template>

<style lang="scss" scoped></style>