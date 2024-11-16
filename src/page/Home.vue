<script lang="ts">  export default { name: 'Home' } </script>
<script setup lang="ts">
import { watchEffect, markRaw, ref, reactive, computed, watch, isReactive, isRef, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useUserStore } from '@/store/test.store'

const userStore = useUserStore ()

// ======= ======= =======
//    см снипет    _ref_vs_reactive_vs_$ref
//    см снипет    _watch_
//                 есть инфа про watchEffect
// ======= ======= =======

// @ts-ignore
let dbUser: IUser = userStore.user
let localName = ref ( '' )

const changeName = () => {
   let userNew = {
      firstname: localName.value
   }
   // cm _patch_
   userStore.$patch ( { user: userNew } )
}

let title = import.meta.env.VUE_TITLE
console.log ( '===  =============================' )
console.log ( ':: .env ::', import.meta.env )
console.log ( '===  =============================' )

// userStore.$onAction ( ( { onError, name, store, after, args } ) => {
//    if ( name === 'update_Name' ) {
//
//    }
// } )

</script>

<template>
   <div class="global_green container">
      <h1 class="san_san">Title from .env ::: {{ title }} :::: deploy_vue_02
         <ui-icon name="tw" width="70px" height="70px" stroke="red" fill="none"></ui-icon>
      </h1>
      <hr>
      <h1 class="san_two">User-Object ::: {{ dbUser }}</h1>
      <hr>
      <h1 class="san_one">Email ::: {{ userStore.getEmail }}</h1>
      <hr>
      <h1>Payload ::: {{ userStore.getTest ( '!!!' ) }}</h1>
      <hr>
      
      <form @submit.prevent="changeName">
         <input type="text" v-model="localName" placeholder="localName ...">
         <hr>
         <button type="submit" class="rr">Change Name</button>
      </form>
      
      <pre class="text-blue">
               .global_margin   .global_red       .sss
               .global_find     .global_green     .yyy
               .global_child    .global_blue      .rrr
                                .global_yellow    .bbb
                                                  .ggg
                                                  .vvv
      </pre>
   
   </div>
</template>

<style lang="less" scoped>
.san_one {
   color: red;
   font-size: 40px;
   font-weight: 400;
   //font-weight: 700;
}

.san_burger {
   width: 4rem;
   height: 4rem;
}
</style>





















