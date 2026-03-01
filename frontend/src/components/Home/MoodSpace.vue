<template>
   <div class=" w-full max-w-6xl flex gap-8 mt-4 items-start justify-center px-8">
      <div
         class="w-full max-w-lg p-8 bg-gradient-to-br from-white/90 to-pink-50/80 backdrop-blur-md rounded-[2rem] shadow-cute-lg border-2 border-pink-100/50 relative overflow-hidden dark:from-gray-800 dark:to-purple-900 dark:border-purple-800/40 dark:bg-gradient-to-br">

         <div
            class="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-pink-200/40 to-purple-200/40 rounded-full blur-2xl dark:from-purple-700/30 dark:to-pink-700/20">
         </div>
         <div
            class="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-2xl dark:from-purple-700/30 dark:to-pink-700/20">
         </div>

         <div class="relative">
            <div class="flex items-center justify-center mt-5 gap-3 mb-6">
               <FiMessageCircle class="w-8 h-8 animate-bounce-slow text-purple-400 dark:text-purple-200" />
               <h2
                  class="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  How are you feeling?
               </h2>
            </div>

            <div class="flex gap-4">
               <div class="flex-1 relative">
                  <input v-model="moodStore.moodInput" type="text" placeholder="Describe your mood..."
                     class="w-full px-5 py-4 text-lg border-2 border-pink-200/70 rounded-2xl focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-100/50 transition-all duration-300 placeholder-pink-300/70 text-purple-700 bg-white/70 backdrop-blur-sm dark:bg-gray-800 dark:text-pink-100 dark:border-purple-800/40" />
                  <FiFeather
                     class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-300/50 dark:text-pink-200/40" />
               </div>
               <button @click="moodStore.sendMood"
                  class="px-8 py-4 text-lg bg-gradient-to-r from-pink-400 via-pink-500 to-purple-500 text-white font-bold rounded-2xl shadow-cute hover:shadow-cute-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group">
                  <span class="text-sm">{{ moodStore.Addoredit }}</span>
                  <FiPlus class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
               </button>
            </div>

            <div class="mt-6 p-4 bg-white/50 rounded-2xl border border-pink-100/50">
               <p class="text-sm text-purple-400 text-center mb-3 font-medium">Quick mood select</p>
               <div class="flex justify-center gap-3 flex-wrap">
                  <button v-for="mood in defmoodList" :key="mood.emoji"
                     class="text-3xl p-2 rounded-xl hover:scale-125 hover:bg-pink-100/50 transition-all duration-200 hover:drop-shadow-lg active:scale-95"
                     :class="{ 'bg-purple-100 ring-2 ring-purple-300 scale-110': moodStore.moodReaction === mood.id }"
                     :title="mood.emoname" @click="moodStore.moodReaction = mood.id">
                     {{ mood.emoji }}
                  </button>
               </div>
            </div>
         </div>
      </div>

      <MoodList />
      <!-- :list="moodStore.list" @edit="moodStore.handleEdit" @delete="moodStore.handleDelete"  -->

   </div>
</template>

<script setup>
import { defmoodList } from '@/data/list';
import MoodList from './MoodList.vue';
import { FiMessageCircle, FiFeather, FiPlus } from 'vue-icons-plus/fi';
import { useMoodStore } from '@/store/moodstats';

const moodStore = useMoodStore();
</script>

<style lang="scss" scoped></style>