<script setup>
import { FiStar } from 'vue-icons-plus';
</script>

<template>
    <footer
        class="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 text-white py-4 px-4 text-center shadow-lg">
        <div class="max-w-4xl mx-auto">

            <p class="text-pink-100 text-sm flex items-center justify-center gap-1">
                &copy; 2026 Mood Board. All rights reserved. <FiStar class="w-4 h-4 inline" />
            </p>
            <div class="flex justify-center gap-4 mt-3">
                <a href="#" class="text-white/80 hover:text-white transition-colors text-sm hover:underline">Privacy</a>
                <span class="text-pink-200">•</span>
                <a href="#" class="text-white/80 hover:text-white transition-colors text-sm hover:underline">Terms</a>
                <span class="text-pink-200">•</span>
                <a href="#" class="text-white/80 hover:text-white transition-colors text-sm hover:underline">Contact</a>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped></style>