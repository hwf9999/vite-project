import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { checkVersion } from "./plugins/vitePluginCheckVersion";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),checkVersion()],
})
