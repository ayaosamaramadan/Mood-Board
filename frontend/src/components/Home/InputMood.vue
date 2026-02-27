<template>
    <div class="w-full max-w-md mx-auto mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-cute border border-pink-100">
        <div class="flex items-center gap-2 mb-4">
            <span class="text-2xl">💭</span>
            <h2 class="text-lg font-semibold text-purple-600">How are you feeling?</h2>
        </div>
        <div class="flex gap-3">
            <input 
                type="text" 
                placeholder="Enter your mood..." 
                class="flex-1 px-4 py-3 border-2 border-pink-200 rounded-2xl focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-100 transition-all duration-300 placeholder-pink-300 text-purple-700 bg-pink-50/50"
            />
            <button class="px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold rounded-2xl shadow-cute hover:shadow-cute-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2">
                <span>Add</span>
                <span class="text-lg">✨</span>
            </button>
        </div>
        <div class="flex justify-center gap-2 mt-4">
            <button class="text-2xl hover:scale-125 transition-transform duration-200 hover:drop-shadow-lg" title="Happy">😊</button>
            <button class="text-2xl hover:scale-125 transition-transform duration-200 hover:drop-shadow-lg" title="Sad">😢</button>
            <button class="text-2xl hover:scale-125 transition-transform duration-200 hover:drop-shadow-lg" title="Excited">🤩</button>
            <button class="text-2xl hover:scale-125 transition-transform duration-200 hover:drop-shadow-lg" title="Calm">😌</button>
            <button class="text-2xl hover:scale-125 transition-transform duration-200 hover:drop-shadow-lg" title="Love">🥰</button>
            <button class="text-2xl hover:scale-125 transition-transform duration-200 hover:drop-shadow-lg" title="Tired">😴</button>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>