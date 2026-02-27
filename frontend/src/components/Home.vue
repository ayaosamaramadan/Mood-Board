<script setup>
import AppFooter from './Home/AppFooter.vue';
import MoodList from './Home/MoodList.vue';
import InputMood from './Home/InputMood.vue';
import AppHeader from './Home/AppHeader.vue';

</script>

<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50">
        <AppHeader />
        <main class="flex-1 flex flex-col items-center px-4 py-8">
            <InputMood />
            <MoodList />
        </main>
        <AppFooter />
    </div>
</template>

<style lang="scss" scoped></style>