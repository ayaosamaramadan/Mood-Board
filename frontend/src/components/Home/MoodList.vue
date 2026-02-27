<template>
     <main class="w-full max-w-2xl mx-auto mt-8 p-6">
        <div class="flex items-center gap-2 mb-6">
            <span class="text-2xl">📋</span>
            <h2 class="text-xl font-semibold text-purple-600">Your Mood History</h2>
        </div>
        
       
       <div v-if="list.length > 0" class="grid gap-4">
            <div v-for="mood in list" :key="mood.id" class="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-cute transition-all duration-300 border border-pink-100 hover:border-pink-200 hover:-translate-y-1">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <span class="text-3xl group-hover:animate-bounce-slow">{{ mood.emoji }}</span>
                        <div>
                            <p class="font-medium text-purple-700">{{ mood.emoname }}</p>
                            <p class="text-sm text-pink-400">{{ mood.description }}</p>
                        </div>
                    </div>
                    <div @click="editMood(mood)" class="cursor-pointer text-pink-400 hover:text-purple-500 transition-colors duration-200">
                        edit
                    </div>
                    <div class="text-right">
                        <p class="text-xs text-purple-300">Today</p>
                        <p class="text-xs text-pink-300">2:30 PM</p>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="text-center py-12">
            <span class="text-6xl mb-4 block animate-float">🌸</span>
            <p class="text-purple-400 font-medium">No moods yet!</p>
            <p class="text-pink-300 text-sm">Start tracking how you feel ✨</p>
        </div>
    </main>
</template>

<script setup>

defineProps({
   list: {
      type: Array,
      required: true
   }
})

 const emit = defineEmits(['edit']);
function editMood(mood) {
    // alert(`Editing mood: ${mood.emoname}`);
   emit('edit', mood);
}
</script>

<style lang="scss" scoped>
</style>