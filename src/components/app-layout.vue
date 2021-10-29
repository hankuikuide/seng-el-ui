<template>
  <se-layout :menus = "menus">
    <slot slot="center">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive !== false" />
        </keep-alive>
      </transition>
      <transition name="fade-transform" mode="out-in">
        <router-view v-if="$route.meta.keepAlive === false" />
      </transition>
    </slot>
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