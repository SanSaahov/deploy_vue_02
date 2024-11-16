import type { RouteLocationNormalized } from 'vue-router'

export async function loadLayoutMiddleware ( route: any ): Promise<void> {
   try {
      const { layout } = route.meta
      const normalizedLayoutName = layout || 'DefaultLayout'
      const component = await import(/* webpackChunkName: "normalizedLayoutName" */ `../../layout/${ normalizedLayoutName }.vue`)
      route.meta.layoutComponent = component.default
   } catch ( error: any ) {
      route.meta.layout = 'DefaultLayout'
      const component: any = await import(/* DefaultLayout: "home" */`../../layout/DefaultLayout.vue`)
      route.meta.layoutComponent = component.default
   }
}
