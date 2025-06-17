import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 关键代码
import tailwindcss from  'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server:{
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://204.152.194.234:8000',
        changeOrigin: true,
        secure:false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ]
    }
  },
  resolve: {
    alias: {
      // 关键代码
      '@': path.resolve(__dirname, './src')
    }
  }
})
