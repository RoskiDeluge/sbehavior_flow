import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sbehavior_flow/', // Set the base to match your GitHub Pages URL path
  plugins: [react()],
  server: {
    port: 3000
  }
})
