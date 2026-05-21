import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path' // <-- Añadimos esto para manejar las rutas

// https://vite.dev/config/
export default defineConfig({
  logLevel: 'error', 
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // <-- ¡Esto le enseña a Vite qué significa el "@"!
    },
  },
})