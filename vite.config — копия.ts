import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import vue from '@vitejs/plugin-vue'
import Path from 'path'

// https://vitejs.dev/config/
export default defineConfig ( {
   envPrefix: 'VUE_',
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
   resolve: {
      alias: {
         // '@': fileURLToPath ( new URL ( './src', import.meta.url ) )
         '@': Path.join ( __dirname, './src' )
      },
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
      outDir: 'dist'
   },
   base: 'deploy_vue_02'
} )
