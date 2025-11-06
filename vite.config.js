import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/MoeZayKha/',
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
