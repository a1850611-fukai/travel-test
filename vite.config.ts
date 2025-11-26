import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: This base path must match your repository name
  base: '/travel-test/', 
  define: {
    // This allows the app to access process.env without crashing in the browser
    'process.env': process.env
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});