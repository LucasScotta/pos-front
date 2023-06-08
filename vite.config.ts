import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      API_PATH: process.env.API_PATH || 'http://localhost',
      IO_PORT: process.env.IO_PORT || '1234',
      API_PORT: process.env || '8080'
    },
  }
})
