<template>
  <el-container>
    <el-header v-if="showHeader" :height="titleHeight" :style="autoHeight ? { height: 'initial' } : {}">
      <se-title :type="type">
        {{ title }}
        <slot name="titleIcons" slot="titleIcons"></slot>
        <slot name="icons" slot="icons"></slot>
      </se-title>
    </el-header>
    <el-main :class="mainClass">
      <div class="se-panel-body" :style="panelBodyStyle" :class="autoHeight ? 'cl-panel-body-autoheight' : ''">
        <slot></slot>
      </div>
    </el-main>
    <el-footer v-if="showFooter" :height="footerHeight">
      <slot name="bottom"></slot>
    </el-footer>
  </el-container>
</template>

<script>
import SeTitle from "../../title/src/index";
export default {
  name: "se-panel",
  componentName: "SePanel",
  components: { SeTitle },
  props: {
    /**
     * default | func | pop
     */
    type: {
      default: "default",
      type: String,
      required: false,
    },
    title: {
      default: "",
      type: String,
      required: false,
    },
    footerHeight: {
      default: "48px",
      type: String,
      required: false,
    },
    /**
     * 是否显示header与内容区的分割线
     */
    showHeaderSplit: {
      default: false,
      type: Boolean,
      required: false,
    },
    /**
     * 是否显示footer与内容区的分割线
     */
    showFooterSplit: {
      default: false,
      type: Boolean,
      required: false,
    },
    /**
     * 是否自动撑开显示
     */
    autoHeight: {
      default: false,
      type: Boolean,
      required: false,
    },
    /**
     * 内容区样式
     */
    bodyStyle: {
      type: Object,
      required: false,
      default() {
        return {
          padding: "0 10px 0 10px",
        };
      },
    },
  },
  data() {
    return {
      titleHeightObj: {
        default: "42px",
        func: "50px",
        pop: "48px",
      },
    };
  },
  computed: {
    mainClass() {
      let cls = "";
      if (this.showHeaderSplit) {
        cls += " border-top";
      }
      if (this.showFooterSplit) {
        cls += " border-bottom";
      }
      return cls;
    },
    titleHeight() {
      return this.titleHeightObj[this.type];
    },
    showHeader() {
      return this.title || this.$slots["icons"] || this.$slots["titleIcons"];
    },
    showFooter() {
      return this.$slots["bottom"];
    },
    panelBodyStyle() {
      if (this.$options.propsData.bodyStyle) {
        return this.bodyStyle;
      }
      return {
        padding: `${this.showHeader ? "0" : "10"}px 10px ${
          this.showFooter ? "0" : "10"
        }px 10px`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-container,
.el-header,
.el-main,
.el-footer {
  margin: 0;
  padding: 0;
}
.el-footer {
  padding: 6px 10px 10px 10px;
  text-align: left;
}
.el-main {
  position: relative;
  .se-panel-body {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0;
    bottom: 0;
  }
  .se-panel-body-autoheight {
    position: initial !important;
  }
}
</style>