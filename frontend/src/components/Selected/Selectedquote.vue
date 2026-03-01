<template>
    <div class="p-4">
        <h2 class="text-2xl font-bold mb-4">Selected Quote</h2>

        <div v-if="condition"
            class="p-6 bg-gradient-to-br from-white/90 to-pink-50/80 backdrop-blur-md rounded-3xl shadow-lg border border-pink-200 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center justify-between gap-4 mb-6">
            <span class="text-4xl font-bold text-gray-800">{{ condition?.emoname }}</span>
            <span class="text-5xl">{{ condition?.emoji }}</span>
            </div>
            <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{{ condition?.description }}</p>
        </div>

        <div v-else class="text-gray-500 dark:text-gray-400">
            No quote selected. Please select a quote from the Mood Space.
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