import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { configs } from 'eslint-plugin-react-refresh'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
})
