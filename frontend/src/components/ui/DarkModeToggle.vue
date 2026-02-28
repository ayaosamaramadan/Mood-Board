<template>
  <button
    @click="theme.toggle()"
    :aria-pressed="theme.isDark"
    class="w-10 h-10 flex items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/8"
    title="Toggle dark mode"
  >
    <FiSun v-if="!theme.isDark" class="w-5 h-5 text-yellow-400" />
    <FiMoon v-else class="w-5 h-5 text-yellow-200" />
  </button>
</template>

<script setup>
import { useThemeStore } from '@/store/theme'
import { FiSun, FiMoon } from 'vue-icons-plus/fi'
const theme = useThemeStore()
</script>

<style scoped></style>
