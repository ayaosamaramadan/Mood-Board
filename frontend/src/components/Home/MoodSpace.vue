<template>
   <div
      class="w-full max-w-md mx-auto mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-cute border border-pink-100">
      <div class="flex items-center gap-2 mb-4">
         <span class="text-2xl">💭</span>
         <h2 class="text-lg font-semibold text-purple-600">How are you feeling?</h2>
      </div>
      <div class="flex gap-3">
         <input v-model="moodInput" type="text" placeholder="Enter your mood..."
            class="flex-1 px-4 py-3 border-2 border-pink-200 rounded-2xl focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-100 transition-all duration-300 placeholder-pink-300 text-purple-700 bg-pink-50/50" />
         <button @click="sendMood"
            class="px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold rounded-2xl shadow-cute hover:shadow-cute-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2">
            <span>{{ Addoredit }}</span>
            <span class="text-lg">✨</span>
         </button>
      </div>
      <div class="flex justify-center gap-2 mt-4">
         <button v-for="mood in defmoodList" :key="mood.emoji"
            class="text-2xl hover:scale-125 transition-transform duration-200 hover:drop-shadow-lg" :title="mood.emoname"
            @click="moodReaction = mood.id">
            {{ mood.emoji }}
         </button>
      </div>
   </div>

   <MoodList :list="list" @edit="handleEdit" />
</template>

<script setup>
import { defmoodList } from '@/data/list';
import { ref } from 'vue';
import MoodList from './MoodList.vue';

const moodInput = ref('');
const moodReaction = ref('');
const list = ref([]);
const Addoredit = ref('Add');
const editMoodId = ref(null);

// watchEffect(() => {
//    console.log(moodInput.value)
//    console.log(moodReaction.value)
// })

function sendMood() {
   if (Addoredit.value === 'Edit' && editMoodId.value !== null) {
      const index = list.value.findIndex(m => m.id === editMoodId.value);
      if (index !== -1) {
         list.value[index] = {
            ...list.value[index],
            emoji: defmoodList.find(m => m.id === moodReaction.value)?.emoji || list.value[index].emoji,
            emoname: moodInput.value || 'Unnamed Mood',
            description: moodInput.value ? `Feeling ${moodInput.value.toLowerCase()}` : 'No description provided'
         };
      }
   } else {
   const newMood = {
         id: Date.now(),
         emoji: defmoodList.find(m => m.id === moodReaction.value)?.emoji || '❓',
         emoname: moodInput.value || 'Unnamed Mood',
         description: moodInput.value ? `Feeling ${moodInput.value.toLowerCase()}` : 'No description provided'
      };
      list.value.push(newMood);
   }
   
 
   moodInput.value = '';
   moodReaction.value = '';
   Addoredit.value = 'Add';
   editMoodId.value = null;
}

function handleEdit(mood) {
   moodInput.value = mood.emoname;
   moodReaction.value = defmoodList.find(m => m.emoji === mood.emoji)?.id || '';
   Addoredit.value = 'Edit';
   editMoodId.value = mood.id;
}

</script>

<style lang="scss" scoped></style>