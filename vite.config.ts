import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@redux-app": path.resolve(__dirname, "./src/app"),
      "@redux-features": path.resolve(__dirname, "./src/features"),
      "@components": path.resolve(__dirname, "./src/components")
    }
  }
});
