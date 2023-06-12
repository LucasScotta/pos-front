import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      API_PATH: process.env.API_PATH,
      IO_PORT: process.env.IO_PORT,
      API_PORT: process.env
    },
  }
})
