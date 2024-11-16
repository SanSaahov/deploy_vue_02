<script lang="ts"> export default { name: 'UiIcon' } </script>
<script setup lang="ts">
import { computed, nextTick } from 'vue'
import icons from './icon'

const props = defineProps ( {
   name: { type: String, default: 'settings' },
   width: { type: String, default: '24px' },
   height: { type: String, default: '24px' },
   stroke: { type: String, default: '#000' },
   fill: { type: String, default: 'none' }
} )

const elem = computed ( () => {
   // @ts-ignore
   return icons[ props.name ]
} )

nextTick ( () => {
   // ======= ======= ======= =======
   // == Это скрипт по вычислению общей длиты <path>
   // Для анимации, можно анимировать и другие свойства
   // == 'id' или '[data-id]' на '<svg>' можно повесить в обычном коде
   // ======= ======= ======= =======
   
   // const svgPath = document.querySelectorAll ( '[data-id] path' ) as SVGPathElement[]
   // const array = Array.from ( svgPath )
   // let result = array.reduce ( ( total, elem ) => {
   //    return total + elem.getTotalLength ()
   // }, 0 )
   // console.log ( 'Длина анимации ::: ', result )
} )

</script>

<template>
   <svg
      data-id="san-svg"
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      :stroke="stroke"
      :fill="fill"
      :viewBox="elem.viewBox"
      :stroke-dasharray="elem.stroke_dasharray"
      :stroke-width="elem.stroke_width"
      x="0"
      y="0"
      style="enable-background:new 0 0 512 512;"
      xml:space="preserve"
      v-html="elem.path"
   ></svg>
</template>

<style lang="less" scoped></style>























