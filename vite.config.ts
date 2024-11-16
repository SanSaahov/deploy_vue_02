import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import vue from '@vitejs/plugin-vue'
import Path from 'path'

// Конфигурация Vite
// https://vitejs.dev/config/
export default defineConfig ( {
   // Префикс для переменных окружения
   envPrefix: 'VUE_',
   // Плагины, используемые в проекте
   plugins: [
      vue (),
      ViteImageOptimizer ( {
         // все опции см в файле  __read.me.js
         jpeg: {
            quality: 50,
         },
         jpg: {
            quality: 50,
         },
      } )
   ],
   // Разрешение модулей
   resolve: {
      alias: {
         // '@': fileURLToPath ( new URL ( './src', import.meta.url ) )
         // Использование path.resolve вместо Path.join что делает код более универсальным и безопасным
         '@': Path.resolve ( __dirname, './src' )
      },
      // Расширения для разрешения модулей
      extensions: [ '.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue', ]
   },
   server: {
      port: 8080,
      host: '127.0.0.1', // '127.0.0.1' || '0.0.0.0'
      hmr: true,
      // watch:{
      //    usePolling: true
      // }
   },
   build: {
      // Директория для выходных файлов сборки
      outDir: 'build'
   },
   base: process.env.NODE_ENV === 'production' ? '/deploy_vue_02/' : '/'
} )
