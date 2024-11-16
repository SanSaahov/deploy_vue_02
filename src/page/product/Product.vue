<script lang="ts">  export default { name: 'Product' } </script>
<script setup lang="ts">
import { watchEffect, markRaw, ref, reactive, computed, watch, isReactive, isRef, nextTick, onMounted, onBeforeUnmount, onBeforeMount } from 'vue'
import { useRouter, useRoute, useLink } from 'vue-router'

const route = useRoute ()
const products = [
   { id: 1, title: 'Заголовок №01', description: 'Соображения высшего порядка №01!', img: 'Картинка №01' },
   { id: 2, title: 'Заголовок №02', description: 'Соображения высшего порядка №02!', img: 'Картинка №02' },
]

const props = defineProps ( {
   id: Number,
} )
const id = route.params.id
let product: any = ref<any> ( null )

const funcInit = () => {
   product.value = products.find ( ( prod ) => {
      return prod.id === parseInt ( props.id as any )
   } )
}
// Использование onMounted, onBeforeMount вызывали серьезыне глюки ??? ЗАГАДКА //TODO:
// Может потому что ±<script setup> сам является хуком и вызывается в нужное время
funcInit ()

</script>

<template>
   <div class="container">
      
      <div v-if="product">
         <h1>Product :: {{ props.id }}</h1>
         <p>{{ product.title }}</p>
         <div><small class="small">Здесь использую ссылку на нужный компанент</small></div>
         <div><small class="small">Во Vue-Компаненте в бд ищу по параметру из route нужный объект</small></div>
         <div><small class="small">Чтобы использовать Vue-Компанент и PROP
            <br>, нужен тег "< component >"</small></div>
         <p>
            Описание Элемента ::
            <router-link :to="{name: 'product_description'}" class=""
                         description="...description"
            >more...
            </router-link>
         </p>
         <p>
            Изображение Элемента ::
            <router-link :to="{name: 'product_image'}" class=""
                         description="elem.img"
            >more...
            </router-link>
         </p>
      </div>
      
      <div v-else>
         <h1>Продукт не найден!</h1>
      </div>
   
   </div>
</template>

<style lang="less" scoped>
.small {
   font-size: 2rem;
   color: rgba(gray, .8);
}
</style>























