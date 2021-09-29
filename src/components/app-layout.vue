<template>
  <se-layout :menus = "menus">
  </se-layout>
</template>

<script>
import XEUtils from 'xe-utils'

export default {
  data(){
    return {
      menus: XEUtils.toArrayTree(this.$store.getters.menus, { strict: true, parentKey: 'parentId', key: 'menuId', children: 'children' })
    }
  },
  mounted(){
  },
  computed:{
  }
}
</script>

<style>

</style>