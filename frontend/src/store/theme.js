import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)

  function apply(dark) {
    try {
      const el = document.documentElement
      if (dark) el.classList.add('dark')
      else el.classList.remove('dark')
    } catch (e) {
    
    }
  }

 
  apply(isDark.value)

  function toggle() {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    apply(isDark.value)
  }

  return { isDark, toggle }
})
