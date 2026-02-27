<script setup>
import AppFooter from './Home/AppFooter.vue';
import MoodList from './Home/MoodList.vue';
import InputMood from './Home/InputMood.vue';
import AppHeader from './Home/AppHeader.vue';

</script>

<template>
    <div class="min-h-screen flex flex-col">
        <AppHeader />
        <InputMood />
        <MoodList />
        <AppFooter />
    </div>
</template>

<style lang="scss" scoped></style>