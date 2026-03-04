<template>
  <div class="min-h-[70vh] flex items-center justify-center px-4">
    <div class="w-full max-w-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-xl shadow-lg p-6">
      <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Welcome back</h2>

      <form @submit.prevent="login" class="space-y-4" novalidate>
        <label class="block">
          <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Email</span>
          <input
            type="email"
            v-model="email"
            required
            placeholder="you@domain.com"
            class="mt-1 block w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            aria-label="Email address"
          />
        </label>

        <label class="block">
          <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Password</span>
          <input
            type="password"
            v-model="password"
            required
            placeholder="Enter your password"
            class="mt-1 block w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            aria-label="Password"
          />
        </label>

        <div class="flex items-center justify-between">
          <router-link to="/signup" class="text-sm text-pink-600 hover:underline">Create account</router-link>
          <button type="submit" class="ml-4 rounded-md bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-pink-300">Login</button>
        </div>
      </form>

      <div class="my-4 flex items-center gap-3">
        <hr class="flex-1 border-slate-200 dark:border-slate-700" />
        <span class="text-sm text-slate-500 dark:text-slate-400">or</span>
        <hr class="flex-1 border-slate-200 dark:border-slate-700" />
      </div>

      <div class="grid gap-3">
        <button @click="googleSignIn" type="button" class="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800/90 focus:outline-none focus:ring-2 focus:ring-pink-300 text-slate-700 dark:text-slate-200">
          <svg aria-hidden="true" class="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M21.35 11.1H12v2.8h5.35c-.23 1.4-1.02 2.6-2.17 3.4v2.8h3.5c2.05-1.92 3.22-4.69 3.22-8 0-.63-.06-1.24-.15-1.8z" fill="#4285F4"/><path d="M12 22c2.97 0 5.46-1 7.28-2.7l-3.5-2.8c-.98.66-2.23 1.06-3.78 1.06-2.9 0-5.35-1.96-6.23-4.58H2.07v2.87C3.86 19.9 7.66 22 12 22z" fill="#34A853"/><path d="M5.77 13.98A7.99 7.99 0 0 1 4.5 12c0-.67.11-1.32.3-1.95V7.17H2.07A11.99 11.99 0 0 0 .5 12c0 1.92.45 3.74 1.24 5.37l4.03-3.39z" fill="#FBBC05"/><path d="M12 4.5c1.6 0 3.04.55 4.17 1.62l3.12-3.12C17.46 1.4 14.97.5 12 .5 7.66.5 3.86 2.6 2.07 5.77l3.93 3.06C6.64 6.46 9.1 4.5 12 4.5z" fill="#EA4335"/></svg>
          <span class="text-sm text-slate-700 dark:text-slate-200">Continue with Google</span>
        </button>

        <button @click="githubSignIn" type="button" class="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800/90 focus:outline-none focus:ring-2 focus:ring-pink-300 text-slate-700 dark:text-slate-200">
          <svg aria-hidden="true" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.39.97.11-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.74.81 1.18 1.83 1.18 3.09 0 4.45-2.71 5.43-5.29 5.71.42.37.8 1.1.8 2.22 0 1.6-.01 2.89-.01 3.28 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z"/></svg>
          <span class="text-sm text-slate-700 dark:text-slate-200">Continue with Github</span>
        </button>
      </div>

      <p v-if="error" class="mt-4 text-sm text-red-600 dark:text-red-400">{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login() {
      this.error = null
      try {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })
        this.$router.push('/')
      } catch (err) {
        this.error = err.code ? `${err.code}: ${err.message}` : err.message || String(err)
      }
    },
    async googleSignIn() {
      this.error = null
      try {
        const { signInWithGoogle } = await import('@/auth/services/googleAuth')
        const user = await signInWithGoogle()
        await this.$store.dispatch('loginWithProvider', user)
        this.$router.push('/')
      } catch (err) {
        this.error = err.code ? `${err.code}: ${err.message}` : err.message || String(err)
      }
    },
    async githubSignIn() {
      this.error = null
      try {
        const { signInWithGithub } = await import('@/auth/services/githubAuth')
        const user = await signInWithGithub()
        await this.$store.dispatch('loginWithProvider', user)
        this.$router.push('/')
      } catch (err) {
        this.error = err.code ? `${err.code}: ${err.message}` : err.message || String(err)
      }
    }
  }
}
</script>