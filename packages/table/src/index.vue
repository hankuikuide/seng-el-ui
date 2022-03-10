<template>
  <se-panel>
    <template v-if="showPager" slot="bottom">
      <slot name="titleIcons" slot="titleIcons"></slot>
      <slot name="icons" slot="icons"></slot>
      <div ref="tableWrap" class="table-wrap">
        <vxe-table ref="table" height="100%" :auto-resize="true" v-bind="tableProps" v-on="$listeners">
          <slot />
        </vxe-table>
      </div>
      <el-pagination background>
        <el-pagination background :layout="pageLayout" v-bind="tablePage" :total="tablePage.total" :page-size.sync="tablePage.pageSize" :current-page.sync="tablePage.pageNum" @size-change="handlePageSizeChange" @current-change="handlePageChange" @prev-click="handlePageChange" @next-click="handlePageChange">
        </el-pagination>
      </el-pagination>
    </template>
  </se-panel>
</template>

<script>
import { Table } from "vxe-table";
import SePanel from "../../panel/src/index.vue";
export default {
  name: "se-table",
  componentName: "SeTable",
  components: { SePanel },
  props: {
    ...Table.props,
    filterMethod: Function,
    showPager: {
      default: false,
      type: Boolean,
      required: false,
    },
    pageLayout: {
      default: "total, ->, sizes, prev, pager, next, jumper",
      type: String,
      required: false,
    },
    tablePage: {
      type: Object,
      required: false,
      default() {
        return {
          total: 0,
          pageNum: 1,
          pageSize: 10,
        };
      },
    },
    /**
     * 保存配置所用的标识，需保证系统内唯一
     * 为空则不展示编辑按钮，无法自定义布局
     */
    configKey: {
      type: String,
      required: false,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      visible: false,
      tableColumns: [],
    };
  },
};
</script>

<style>
</style>