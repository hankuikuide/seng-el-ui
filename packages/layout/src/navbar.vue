<template>
  <div class="header">
    <div class="left-container">
      <el-image v-if="logoUrl" style="width: 34px;height:100%;vertical-align: top;" :src="logoUrl" fit="contain"></el-image>
      <span class="app-title">{{ appTitle }}</span>
    </div>
    <div class="right-container">

    </div>
  </div>
</template>

<script>
import XEUtils from 'xe-utils'
export default {
  props:{
    navbarConfig: {
      type: Object,
      required: false,
      default(){
        return {}
      }
    }
  },
  data(){
    return XEUtils.assign({}, this.navbarConfig)
  }
}
</script>

<style lang="scss" scope>
@import '../../styles/variables.scss';

.header {
  background-color: $base-color;
  height: 100%;
  color: #fff;
  .left-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: justify;
    height: 100%;
    font-size: 16px;
    line-height: 16px;
    .app-title {
      margin-left: 15px;
      font-size: 22px;
      font-weight: 700;
      display: inline-block;
    }
  }
}
</style>