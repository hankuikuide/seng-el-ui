<template>
  <el-container>
    <el-header height="65px">
      <navbar>11</navbar>
    </el-header>
    <el-main>
      <el-container>
        <siderbar>1</siderbar>
        <el-main>
          main
        </el-main>
      </el-container>
      
    </el-main>
    <!-- <el-footer >
      footer
    </el-footer> -->
  </el-container>
</template>

<script>
import siderbar from './siderbar.vue'
import navbar from './navbar.vue'

export default {
  components: { siderbar, navbar },
  name: 'se-layout',
}
</script>

<style lang="scss" scoped>

.el-container {
  height: 100%;
  padding: 0;
  margin: 0;
  width: 100%;
}

.el-aside,
.el-header,
.el-main {
  margin: 0;
  padding: 0;
}

</style>