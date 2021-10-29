<template>
  <div class="tags-warp">
    <el-tabs v-model="activeMenu" @tab-click="handleClick">
      <el-tab-pane v-for="route in visitedRoutes" :key="route.name" :label="route.label" :name="route.name">
        <span v-if="route.meta && route.meta.affix" slot="label" class="tab-label tab-label-affix" @contextmenu.prevent.stop="openContextMenu(route, $event)" >
          <i :class="route.meta.icon"></i>&nbsp;{{getMenuName(route.path)}}
        </span>
        <span v-else slot="label" class="tab-label" @contextmenu.prevent.stop="openContextMenu(route, $event)" >
            <i :class="route.meta.icon"></i>&nbsp;{{getMenuName(route.path)}}
            <i class="el-icon-close" @click.stop="handleRemove(route)"></i>
        </span>
      </el-tab-pane>
    </el-tabs>
    <ul v-show="visible" :style="{ left: left + 'px', top: top + 'px' }" class="contextmenu">
      <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">关闭</li>
      <li @click="closeOthersTags">关闭其他</li>
      <li @click="closeAllTags(selectedTag)">关闭全部</li>
    </ul>
  </div>
</template>

<script>
import XEUtils from 'xe-utils'
const visitedRoutes = {}
export default {
  inject: ['layoutCmp'],
  data(){
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {},
      visitedRoutes: []
    }
  },
  created() {
    let key = this.layoutCmp.routerParent || 'default'
    if (!visitedRoutes[key]) {
      visitedRoutes[key] = []
    }
    this.visitedRoutes = visitedRoutes[key]
  },
  computed:{
    activeMenu: {
      get() {
        const route = this.$route
        if (!route) {
          return '/'
        }
        const { meta, path } = route
        if (meta.activeMenu) {
          return meta.activeMenu
        }
        return path
      },
      set() {}
    },
    routes() {
      if (this.layoutCmp.routerParent) {
        return XEUtils.filter(this.$router.matcher.getRoutes(), (item) => item.parent && item.parent.name === this.layoutCmp.routerParent)
      }
      return this.$router.matcher.getRoutes()
    }
  },
  watch:{
    $route() {
      this.addTags()
    },
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted(){
    this.initTags()
    this.addTags()
  },
  methods: {
    initTags() {
      const affixTags = (this.affixTags = this.filterAffixTags())
      for (const tag of affixTags) {
        // Must have tag name
        if (tag.name) {
          this.ADD_VISITED_VIEW(tag)
        }
      }
    },
    addTags(){
      if (!this.$route) {
        return
      }
      if (this.$route.meta && this.$route.meta.noCache) {
        return
      }
      const {name} = this.$route
      if (name) {
        this.ADD_VISITED_VIEW(this.$route)
      }
      return false
    },
    filterAffixTags() {
      let tags = []
      XEUtils.each(this.routes, (route) => {
        if (route.meta && route.meta.affix) {
          tags.push(route)
        }
      })
      return tags
    },
    isAffix(tag) {
      return tag.meta && tag.meta.affix
    },
    closeSelectedTag(view) {
      this.DEL_VISITED_VIEW(view)
      if (this.isActive(view)) {
        this.toLastView(view)
      }
    },
    closeOthersTags() {
      if (this.$route.path !== this.selectedTag.path) {
        this.$router.push(this.selectedTag)
      }
      this.DEL_OTHERS_VISITED_VIEWS(this.selectedTag)
    },
    closeAllTags(view) {
      this.DEL_ALL_VISITED_VIEWS(view)
      if (this.affixTags.some((tag) => tag.path === view.path)) {
        return
      }
      this.toLastView(view)
    },
    handleRemove(view) {
      this.closeSelectedTag(view)
    },
    handleClick({ name }) {
      if (this.$route.path !== name) {
        this.$router.push(name)
      }
    },
    getMenuName(path) {
      let menu = XEUtils.find(this.routes, (item) => {
        return item.path === path
      })
      if (menu) {
        if (menu.meta && menu.meta.text) {
          return menu.meta.text
        }
        return menu.name
      }
      return path
    },
    openContextMenu(route, e) {
      let tabEl = e.srcElement
      if (!tabEl.id) {
        tabEl = tabEl.parentNode
      }
      if (tabEl.id) {
        const menuMinWidth = 105
        // const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
        const offsetWidth = this.$el.offsetWidth // container width
        const maxLeft = offsetWidth - menuMinWidth // left boundary
        const left = e.clientX + 10 // 15: margin right

        if (left > maxLeft) {
          this.left = maxLeft
        } else {
          this.left = left
        }

        this.top = e.clientY + 10
        this.visible = true
        this.selectedTag = route
      }
    },
    ADD_VISITED_VIEW(view){
      if (this.visitedRoutes.some((v)=> v.path === view.path)) {
        return
      }
      this.visitedRoutes.push(
        Object.assign({}, view, {
          title: view.meta.title || 'no-name'
        })
      )
    },
    DEL_VISITED_VIEW(view) {
      for (const [i, v] of this.visitedRoutes.entries()) {
        if (v.path === view.path) {
          this.visitedRoutes.splice(i, 1)
          break
        }
      }
    },

    DEL_OTHERS_VISITED_VIEWS(view) {
      this.visitedRoutes = this.visitedRoutes.filter((v) => {
        return v.meta.affix || v.path === view.path
      })
    },

    DEL_ALL_VISITED_VIEWS() {
      // keep affix tags
      const affixTags = this.visitedRoutes.filter((tag) => tag.meta.affix)
      this.visitedRoutes = affixTags
    },
  }
}
</script>

<style lang="scss" scope>
@import '../../styles/variables.scss';
.tags-warp {
  .el-tabs__nav {
    height: 40px;
    line-height: 40px;
    .el-tabs__item {
      padding: 0;
      .tab-label {
        margin: 0 3px;
        height: 24px;
        line-height: 24px;
        border: 1px solid #d8dce5;
        border-radius: 10px;
        background-color: $header-background-color;
        display: inline-block;
        font-size: 12px;
        padding: 0 10px 0 10px;
        .el-icon-close {
          margin-left: 5px;
          margin-right: -2px;
        }
      }
      .tab-label-affix {
        border: 1px solid transparent;
        background-color: transparent;
      }
    }
    .el-tabs__item:focus.is-active.is-focus:not(:active) {
      box-shadow: 0 0 0 0;
    }
    .el-tabs__item.is-active {
      .tab-label {
        background-color: $base-color;
        color: #fff;
      }
      .tab-label-affix {
        color: $base-color;
        background-color: transparent;
      }
    }
  }
}

.contextmenu {
  margin: 0;
  background: #fff;
  z-index: 3000;
  position: absolute;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
  text-align: left;
  li {
    margin: 0;
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
}
</style>