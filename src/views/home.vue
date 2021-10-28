<template>
  home
</template>
<script setup lang="ts">
import { useStore } from 'vuex'
const store = useStore()
store.dispatch('set_test', '456')
console.log(store.state.test)

</script>

<style lang="scss">
.box {
  margin: 50;
}
</style>
