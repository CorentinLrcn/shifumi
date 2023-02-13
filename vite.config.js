import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({ registerType: 'autoUpdate', manifest: { "name": "shifumi_react", "short_name": "shifumi_react", "start_url": "/", "display": "standalone", "background_color": "#ffffff", "lang": "en", "scope": "/" }, }),],
})
