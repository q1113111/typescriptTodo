import { defineConfig } from 'vite'
import path from 'path' // 主要用于alias文件路径别名
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ]
    })],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      '~/': `${path.resolve(__dirname, './')}/`
    }
  },
  server: {
    // proxy: {
    //   '/cms': {
    //     target: 'http://microchat-api.9976cbe1d6f04a2d8420.japanwest.aksapp.io/',
    //     changeOrigin: true
    //     // rewrite: path => path.replace(/^\/api/, '')
    //   }
    // },
    // host: '0.0.0.0' // 显示IP位置
  }

})
