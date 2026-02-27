<template>
     <main class="w-full max-w-2xl mx-auto mt-8 p-6">
        <div class="flex items-center gap-2 mb-6">
            <span class="text-2xl">📋</span>
            <h2 class="text-xl font-semibold text-purple-600">Your Mood History</h2>
        </div>
        
       
       <div class="grid gap-4">
            <div class="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-cute transition-all duration-300 border border-pink-100 hover:border-pink-200 hover:-translate-y-1">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <span class="text-3xl group-hover:animate-bounce-slow">😊</span>
                        <div>
                            <p class="font-medium text-purple-700">Happy</p>
                            <p class="text-sm text-pink-400">Feeling great today!</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="text-xs text-purple-300">Today</p>
                        <p class="text-xs text-pink-300">2:30 PM</p>
                    </div>
                </div>
            </div>

            <div class="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-cute transition-all duration-300 border border-pink-100 hover:border-pink-200 hover:-translate-y-1">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <span class="text-3xl group-hover:animate-bounce-slow">🥰</span>
                        <div>
                            <p class="font-medium text-purple-700">Loved</p>
                            <p class="text-sm text-pink-400">Spending time with family</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="text-xs text-purple-300">Yesterday</p>
                        <p class="text-xs text-pink-300">6:45 PM</p>
                    </div>
                </div>
            </div>

            <div class="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-cute transition-all duration-300 border border-pink-100 hover:border-pink-200 hover:-translate-y-1">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <span class="text-3xl group-hover:animate-bounce-slow">😌</span>
                        <div>
                            <p class="font-medium text-purple-700">Calm</p>
                            <p class="text-sm text-pink-400">Peaceful morning meditation</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="text-xs text-purple-300">2 days ago</p>
                        <p class="text-xs text-pink-300">8:00 AM</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="hidden text-center py-12">
            <span class="text-6xl mb-4 block animate-float">🌸</span>
            <p class="text-purple-400 font-medium">No moods yet!</p>
            <p class="text-pink-300 text-sm">Start tracking how you feel ✨</p>
        </div>
    </main>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>