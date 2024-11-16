<script lang="ts">  export default { name: 'Debug' } </script>
<script setup lang="ts">

</script>

<template>
   <div class="debugGrid">
      <div class="container">
         <div class="dbrow ">
            <div class="dbcol-1"
                 v-for="elem in 12" :key="elem"
            >
               <div class="debugGrid__elem"></div>
            </div>
         </div>
      </div>
   </div>
</template>

