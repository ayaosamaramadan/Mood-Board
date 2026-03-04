<template>
    <div class="min-h-[70vh] flex items-center justify-center px-4 py-8">
        <div class="w-full max-w-lg">
            <button @click="$router.back()" class="mb-6 flex items-center gap-2 text-sm text-purple-500 hover:text-purple-700 dark:text-purple-300 dark:hover:text-purple-100 transition-colors">
                ← Back
            </button>

            <div v-if="condition"
                class="p-6 sm:p-8 bg-gradient-to-br from-white/90 to-pink-50/80 dark:from-gray-800 dark:to-purple-900 backdrop-blur-md rounded-3xl shadow-lg border border-pink-200 dark:border-purple-800/40 hover:shadow-xl transition-shadow duration-300">
                <div class="flex items-center justify-between gap-4 mb-6 flex-wrap">
                    <span class="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-pink-100">{{ condition?.emoname }}</span>
                    <span class="text-5xl sm:text-6xl">{{ condition?.emoji }}</span>
                </div>
                <p class="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{{ condition?.description }}</p>
            </div>

            <div v-else class="text-center py-16 text-gray-500 dark:text-gray-400">
                <p class="text-lg">No mood selected.</p>
                <router-link to="/" class="mt-4 inline-block text-sm text-pink-500 hover:underline">← Go back to Mood Space</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMoodStore } from '@/store/moodstats';
import { ref } from 'vue';

import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

const moodStore = useMoodStore();

let condition = ref(moodStore.list.find(mood => mood?.id == id));
</script>

<style lang="scss" scoped></style>