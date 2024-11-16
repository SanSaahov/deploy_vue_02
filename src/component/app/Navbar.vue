<script lang="ts">  export default { name: 'Navbar' } </script>
<script setup lang="ts">

</script>

<template>
   <section class="container">
      <ul class="menu__list">
         <router-link :to="{name: 'home'}" class="">Home</router-link>
         <router-link :to="{name: 'products'}" class="">Product List</router-link>
         <router-link :to="{name: 'product_item', params: {id: 1} }" class="">Product №01</router-link>
      </ul>
   </section>
</template>

<style lang="less" scoped>
.menu__list {
   padding: 1rem;
   border: 1px solid #000;
   display: flex;
   justify-content: flex-end;
   gap: 20px;
}
</style>























