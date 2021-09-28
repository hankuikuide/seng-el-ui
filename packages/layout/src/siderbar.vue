<template>
  <el-aside class="aside" width="auto">
    <el-container>
      <el-main>
        <el-scrollbar style="height:100%">
sider bar main
        </el-scrollbar>
        
      </el-main>
      <el-footer height="40px">
        <div style="cursor: pointer;text-align: left; color:#fff" @click="isCollapse=!isCollapse">
          <i v-if="isCollapse" class="el-icon-d-arrow-right">&nbsp;展开</i>
          <i v-if="!isCollapse" class="el-icon-d-arrow-left">&nbsp;收起</i>
        </div>
      </el-footer>
    </el-container>
  </el-aside>
</template>

<script>
export default {

  computed:{
    isCollapse:{
      get(){
        return true
      },
      set(){
        this.$store.dispatch('app/toggleSidebar')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.aside {
  background-color: $base-color;
}
.el-container {
  height: 100%;
}

.el-main {
  margin: 0;
  padding: 0px;
}

</style>