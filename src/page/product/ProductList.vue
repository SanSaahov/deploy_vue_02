<script lang="ts">  export default { name: 'ProductList' } </script>
<script setup lang="ts">
const products = [
   { id: 1, title: 'Заголовок №01', description: 'Соображения высшего порядка №01!', img: 'Картинка №01' },
   { id: 2, title: 'Заголовок №02', description: 'Соображения высшего порядка №02!', img: 'Картинка №02' },
]

</script>

<template>
   <div class="container">
      <h1>Product List</h1>
      <hr>
      <div v-for="(elem, index) in products">
         <router-link :to="{name: 'product_item', params: {id: elem.id} }" class="">{{ elem.title }}</router-link>
      </div>
   </div>
</template>

<style lang="less" scoped></style>
























