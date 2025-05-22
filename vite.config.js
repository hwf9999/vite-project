import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { checkVersion } from "./plugins/vitePluginCheckVersion";

// @ai-start
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),checkVersion()],
})
// @ai-end