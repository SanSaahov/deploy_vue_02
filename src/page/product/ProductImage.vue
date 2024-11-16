<script lang="ts">  export default { name: 'ProductImage' } </script>
<script setup lang="ts">
import { watchEffect, markRaw, ref, reactive, computed, watch, isReactive, isRef, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useRouter, useRoute, useLink } from 'vue-router'

const products = [
   { id: 1, title: 'Заголовок №01', description: 'Соображения высшего порядка №01!', img: 'Картинка №01' },
   { id: 2, title: 'Заголовок №02', description: 'Соображения высшего порядка №02!', img: 'Картинка №02' },
]

const route = useRoute ()
const router = useRouter ()
const id = route.params.id
let product: any = ref<any> ( null )

const funcInit = () => {
   product.value = products.find ( ( prod ) => {
      return prod.id === parseInt ( id as any )
   } )
}
// Использование onMounted, onBeforeMount вызывали серьезыне глюки ??? ЗАГАДКА //TODO:
// Может потому что ±<script setup> сам является хуком и вызывается в нужное время
funcInit ()

</script>

<template>
   <div class="container">
      <h1>Product Image</h1>
      <div><small class="small">{{ product.img }}</small></div>
      <button class="btn" type="button"
              @click="router.back()"
      >Back</button>
   </div>
</template>

<style lang="less" scoped>
.small {
   font-size: 2rem;
   color: rgba(gray, .8);
}

.btn {
   border: 1px solid #000;
   background-color: #A5A5A5;
   padding: 1rem 2rem;
   border-radius: 8px;
   margin-top: 2rem;
}
</style>























