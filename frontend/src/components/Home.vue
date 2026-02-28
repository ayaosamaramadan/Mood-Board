<script setup>
import AppFooter from './Home/AppFooter.vue';
import MoodSpace from './Home/MoodSpace.vue';
import AppHeader from './Home/AppHeader.vue';

</script>

<template>
    <div class="h-screen flex flex-col bg-gradient-to-br from-pink-100 via-purple-70 to-pink-50 overflow-hidden">
        <AppHeader />
        <main class="bg-white dark:bg-slate-900 flex-1 flex items-start justify-center px-4 py-4 overflow-hidden">
            <!-- <MoodSpace /> -->
               <router-view />
        </main>
        <AppFooter />
    </div>
</template>

<style lang="scss" scoped></style>