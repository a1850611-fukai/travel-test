import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: This base path must match your repository name exactly
  base: '/travel-test/', 
  define: {
    // CRITICAL FIX: Set process.env to an empty object to prevent "process is not defined" crash in browser.
    // The app code safely checks for this, but this define prevents the initial ReferenceError.
    'process.env': {}
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});