import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Thai Journey: Bangkok',
        short_name: 'ThaiTrip',
        description: 'Bangkok Travel Itinerary & Guide',
        theme_color: '#d97706',
        background_color: '#fdfbf7',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/travel-test/',
        scope: '/travel-test/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  // IMPORTANT: This base path must match your repository name exactly
  base: '/travel-test/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});