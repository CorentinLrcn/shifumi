import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate', manifest: {
      "name": "shifumi_react", "short_name": "shifumi_react", "start_url": "/", "display": "standalone", "background_color": "#ffffff", "lang": "en", "scope": "/",
      "icons": [
        {
          "src": "assets/1200-L-le-1000tipla-de-vilebrequin-se-dvoile-au-mondial-de-lauto-2022-nos-photos-de-ce-monospace-de-1-000-chevaux.jpg",
          "sizes": "144x144",
          "type": "image/jpg"
        }
      ]
    },
  }),],
})
