import type { App } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'
import { http_status } from './http_status'

export function registerPlugins ( app: App ) {
   app.use ( createPinia () )
   app.use ( router )
   app.use ( {
      install ( app ) {
         app.config.globalProperties.$_ = http_status
      }
   } )
}
