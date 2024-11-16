<script lang="ts">
import { defineComponent } from 'vue'
import Debug from '@/component/Debug.vue'
import Navbar from '@/component/app/Navbar.vue'

export default defineComponent ( {
   name: 'DefaultLayout',
   components: { Navbar, Debug },
} )
</script>

<template>
   <div class="container-layout">
      <Navbar/>
      <main>
         <slot/>
      </main>
      <!-- <AppFooter/> -->
      <Debug></Debug>
   </div>
</template>





















