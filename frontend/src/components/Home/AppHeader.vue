<template>
    <header
        class="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 text-white p-6 shadow-cute-lg dark:from-purple-900 dark:via-pink-900 dark:to-gray-900">

        <div class="max-w-4xl mx-auto flex items-center justify-center gap-3">
            <DarkModeToggle />
            <FiStar class="w-8 h-8 animate-bounce-slow text-yellow-200" />
            <h1 class="text-3xl font-bold tracking-wide drop-shadow-md">
                Mood Board
            </h1>
            
            <FiStar class="w-8 h-8 animate-bounce-slow text-pink-200" style="animation-delay: 0.5s" />
        </div>
        <p class="text-center text-pink-100 mt-2 text-sm font-medium dark:text-pink-200">Track your feelings, embrace
            your emotions</p>
    </header>
</template>

<script setup>
import DarkModeToggle from '../ui/DarkModeToggle.vue';
import { FiStar } from 'vue-icons-plus/fi';
</script>

<style lang="scss" scoped></style>