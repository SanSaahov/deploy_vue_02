import { createRouter, createWebHistory, createMemoryHistory, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';
import { loadLayoutMiddleware } from './middleware/loadLayout.middleware'

// import { nextTick } from 'vue'
// import { useAuthStore } from '@/store/auth'

const routes = [
   {
      name: 'home',
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '../page/Home.vue'),
      meta: {
         layout: 'DefaultLayout', auth: false
      },
      // beforeEnter(to, from, next){
      //    // если нет аутентификации, можно отправить на '/login'
      //    next({ name: "login" })
      //
      //    // отклонить навигацию
      //    return false
      //
      //    // разрешить вход
      //    next()
      // }
   },
   {
      path: '/products',
      children: [
         {
            name: 'products',
            path: '',
            component: () => import (/* webpackChunkName: "Product" */ '../page/product/ProductList.vue'),
            meta: {
               layout: 'DefaultLayout', auth: false
            },
         },
         {
            name: 'product_item',
            path: ':id',
            component: () => import (/* webpackChunkName: "ProductItem" */ '../page/product/Product.vue'),
            // обозначает что параметр уйдет в компанент как пропс
            props: true,
            meta: {
               layout: 'DefaultLayout', auth: false
            },
         },
         {
            name: 'product_image',
            path: ':id/image',
            component: () => import (/* webpackChunkName: "ProductImage" */ '../page/product/ProductImage.vue'),
            // обозначает что параметр уйдет в компанент как пропс
            props: true,
            meta: {
               layout: 'DefaultLayout', auth: false
            },
         },
         {
            name: 'product_description',
            path: ':id/description',
            component: () => import (/* webpackChunkName: "ProductDescription" */ '../page/product/ProductDescription.vue'),
            // обозначает что параметр уйдет в компанент как пропс
            props: true,
            meta: {
               layout: 'DefaultLayout', auth: false
            },
         },
      ],
   },
   {
      path: '/:notFound(.*)*',
      component: () => import(/* webpackChunkName: "error" */ '../page/Error.vue'),
      meta: {
         layout: 'ErrorLayout', auth: false
      },
   }
]

const router = createRouter ( {
   // history: createWebHistory(import.meta.env.BASE_URL),
   history: createWebHistory ( import.meta.env.BASE_URL ),
   routes,
   linkExactActiveClass: 'active_exact_link',
   linkActiveClass: 'active_link',
} )

router.beforeEach ( loadLayoutMiddleware )

export default router
 