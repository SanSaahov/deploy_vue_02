<script lang="ts">
import { defineComponent } from 'vue'

export default {
   name: 'AppMiddlewareLayout',
}
</script>


<template>
   <component :is="$route.meta.layoutComponent">
      <slot/>
   </component>
</template>


<style lang="less" scoped></style>





















