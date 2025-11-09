import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    base: '/my-react-ci-cd/',  // 👈 این خط اضافه یا اصلاح بشه
})
