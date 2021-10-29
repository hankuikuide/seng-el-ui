<template>
  <el-container>
    <el-header height="65px">
      <navbar>11</navbar>
    </el-header>
    <el-main>
      <el-container>
        <siderbar  v-bind='$attrs'></siderbar>
        <el-main>
          <el-container>
            <el-header style="height: 40px; padding: 0 10px;background-color: #fff;">
              <tabs />
            </el-header>
            <el-main class="center-wrap">
              <div v-if="watermark.length" class="watermark">
                <div v-for="count in watermarkCount" :key="count" class="wrap">
                  <span class="word">
                    <span v-for="word in watermark" :key="word">
                      {{word}}
                    </span>
                  </span>
                </div>
              </div>
              <div class="center-div">
                <slot name="center">center</slot>
              </div>
            </el-main>
          </el-container>
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
import tabs from './tabs'
export default {
  components: { siderbar, navbar, tabs},
  name: 'se-layout',
  provide() {
    return {
      layoutCmp: this
    }
  },
  props:{

    /**
     * 水印文字
     */
    watermark: {
      type: Array,
      required: false,
      default() {
        return ["hanseng","用户名Hanseng","2021-09-28"]
      }
    },
  },
  data(){
    return {
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight
    }
  },
  mounted(){
  },
  computed:{
    watermarkCount() {
      let count = Math.ceil((this.clientWidth * this.clientHeight) / (150 * 150))
      let rel = []
      for (let index = 0; index < count; index++) {
        rel.push(index)
      }
      return rel
    }
  }
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

.center-wrap {
  padding: 0px 8px;
  margin: 8px 0;
  height: 100%;
  max-height: 100%;
  height: 100%;
  box-sizing: border-box;
  .center-div {
    height: 100%;
    max-height: 100%;
    min-width: 900px;
  }
}

.watermark {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 9999999999999999999;
  opacity: 0.1;
  pointer-events: none;
  word-wrap: break-word;
  text-align: center;
  overflow: hidden;
  font-size: 12px;
  .wrap {
    text-align: center;
    width: 150px;
    height: 150px;
    line-height: 150px;
    display: inline-block;
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg); /* IE 9 */
    -moz-transform: rotate(-45deg); /* Firefox */
    -webkit-transform: rotate(-45deg); /* Safari 和 Chrome */
    -o-transform: rotate(-45deg); /* Opera */
    .word {
      display: inline-block;
      vertical-align: middle;
      line-height: 20px;
      width: 100%;
      span {
        width: 100%;
        display: inline-block;
      }
    }
  }
}
</style>