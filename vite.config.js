import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// These two lines define __dirname for ESM modules (fixes the crash)
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  base: "/NEPHRITE-EXE/", // <--- Added trailing slash
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})