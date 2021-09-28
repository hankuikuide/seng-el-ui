<template>
  <el-aside class="aside" width="auto">
    <div class="shadow-top"></div>
    <el-container>
      <el-main>
        <el-scrollbar wrap-class="scrollbar-wrapper" style="height:100%">
          <el-menu ref="menu" unique-opened :default-active="activeMenu" :collapse="isCollapse" :background-color="variables.menuBg"
           :text-color="variables.menuTextColor" :active-text-color="variables.menuActiveText">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-menu-item index="1-4">选项3</el-menu-item>
              <el-menu-item index="1-6">选项3</el-menu-item>
              <el-menu-item index="1-7">选项3</el-menu-item>
             
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
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
import variables from '../../styles/variables.scss'

export default {

  computed:{
    isCollapse:{
      get(){
        return !this.$store.getters.sidebarOpened
      },
      set(){
        this.$store.dispatch('app/toggleSidebar')
      }
    },
    activeMenu(){
      return "1-3"
    },
    variables(){
      console.dir(variables)
      return variables
    }
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.aside {
  background-color: $base-color;
  overflow: hidden;
  .shadow-top {
    box-shadow: inset -2px -1px 2px 0px darken($menu-background-color, 10%);
    width: 200%;
    height: 2px;
  }

  ::v-deep .scrollbar-wrapper {
    overflow-x: hidden !important;
  }
  .el-menu--collapse {
    width: 54px;
  }

  .el-menu {
    ::v-deep {
      .el-menu-item {
         height: 45px;
         line-height: 45px;
         border-top: 1px solid $menu-background-color;
         border-bottom: 1px solid transparent;
      }
      .el-submenu__title {
        height: 45px;
        line-height: 45px;
      }
    }
  }

  .el-menu:not(.el-menu--collapse) {
    width: $side-bar-width;
    min-height: 400px;
  }
}
.el-container {
  height: 100%;
}

.el-main {
  margin: 0;
  padding: 0px;
}

.el-footer {
  line-height: 40px;
  font-size: 12px;
  padding: 0;
  div {
      padding: 0 7px;
      box-shadow: -1px -2px 2px 0px darken($menu-background-color, 5%);
      i {
        width: 40px;
        text-align: center;
      }
    }
}

.el-submenu .el-menu-item {
  background-color: $sub-menu-background-color !important;
  &:hover {
    background-color: $sub-menu-hover-background-color !important;
  }
  &.is-active {
    background-color: darken($menu-hover-background-color, 10%) !important;
  }
}

::v-deep .el-submenu__title:hover,
.el-menu-item:hover {
  background-color: $menu-hover-background-color !important;
}
</style>