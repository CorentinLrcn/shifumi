import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate', manifest: {"name":"shifumi_react","short_name":"shifumi_react","start_url":"/","display":"standalone","background_color":"#ffffff","lang":"en","scope":"/","icons":[{"src":"assets/E58D7072-5971-4E09-B9B6-EBC209FB8B02-modified (2).png","sizes":"144x144","type":"image/jpg"}]}
  }),],
})
