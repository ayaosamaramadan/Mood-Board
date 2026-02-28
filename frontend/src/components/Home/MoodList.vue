<template>
    <div class="w-full max-w-xl p-8 bg-gradient-to-br from-white/90 to-purple-50/80 backdrop-blur-md rounded-[2rem] shadow-cute-lg border-2 border-purple-100/50 relative overflow-hidden dark:from-gray-800 dark:to-purple-900 dark:border-purple-800/40">
        <div class="absolute -top-8 -left-8 w-28 h-28 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-2xl dark:from-purple-700/30 dark:to-pink-700/20"></div>
        
        <div class="relative">
            <div class="flex items-center justify-center gap-3 mb-6">
                <FiClipboard class="w-7 h-7 text-purple-500" />
                <h2 class="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Your Mood History</h2>
            </div>
            
            <div v-if="moodStore.list.length > 0" class="grid gap-3 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-purple-100/50">
                 <div v-for="mood in moodStore.list" :key="mood.id" class="group p-4 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-purple-100 hover:border-purple-200 dark:bg-gray-800/70 dark:border-purple-800/30">
                    <div class="flex items-center justify-between gap-3">
                      <router-link :to="`/selectedid/${mood.id}`">
                 <div class="flex items-center gap-3 flex-1 min-w-0">
                            <span class="text-3xl flex-shrink-0">{{ mood.emoji }}</span>
                            <div class="min-w-0">
                                    <p class="font-semibold text-purple-700 text-base truncate dark:text-pink-100">{{ mood.emoname }}</p>
                                    <p class="text-sm text-pink-400 truncate dark:text-pink-200">{{ mood.description }}</p>
                            </div>
                        </div> </router-link>
                        <div class="flex items-center gap-2 flex-shrink-0">
                            <button @click="moodStore.handleEdit(mood)" class="p-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-400 hover:text-purple-600 transition-all duration-200 hover:scale-110 dark:bg-purple-900/10 dark:text-purple-200">
                                <FiEdit2 class="w-5 h-5" />
                            </button>
                            <button @click="moodStore.handleDelete(mood.id)" class="p-2 rounded-xl bg-pink-50 hover:bg-red-100 text-pink-400 hover:text-red-500 transition-all duration-200 hover:scale-110 dark:bg-pink-900/10 dark:text-pink-200">
                                <FiTrash2 class="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div> 
               
            </div>

                <div v-else class="text-center py-12">
                <FiFeather class="w-16 h-16 mx-auto mb-4 text-purple-300 animate-float dark:text-purple-200" />
                <p class="text-purple-400 font-semibold text-lg dark:text-pink-100">No moods yet!</p>
                <p class="text-pink-300 text-sm flex items-center justify-center gap-1 dark:text-pink-200">Start tracking how you feel <FiStar class="w-4 h-4" /></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMoodStore } from '@/store';
import { FiClipboard, FiFeather, FiStar, FiEdit2, FiTrash2 } from 'vue-icons-plus/fi';
const moodStore = useMoodStore();

// defineProps({
//    list: {
//       type: Array,
//       required: true
//    }
// })

// const emit = defineEmits(['edit', 'delete']);

// function editMood(mood) {
//    emit('edit', mood);
// }

// function deleteMood(id) {
//    emit('delete', id);
// }
</script>

<style lang="scss" scoped>
</style>