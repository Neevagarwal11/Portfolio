import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
console.log('Building with Vite...');
export default {
  build: {
    outDir: 'dist',
  },
};