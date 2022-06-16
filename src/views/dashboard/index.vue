<template>
  <div>
    <se-title style="background-color: #fff">
      默认标题
      <el-link slot="icons" icon="el-icon-edit">小按扭</el-link>
    </se-title>
    <se-panel title="单据列表" type="func" style="margin-top: 10px; height:300px;">
      <template slot="titleIcons">
        <el-button type="primary">主要按扭</el-button>
        <el-button type="success">成功按扭</el-button>
        <el-button type="success" @click="openMap">跳转到地图页</el-button>
      </template>
      <template slot="icons">
        <span>前端过滤:</span>
        <el-input style="width:100px;" placeholder="请输入关键字"></el-input>
        &nbsp;&nbsp;&nbsp;
        <el-button>默认按扭</el-button>
        <el-button type="primary">主要按扭</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </template>
      <div style="background-color: #eee; height:100%;">
        <se-table>
          <vxe-table-column type="checkbox" width="60"></vxe-table-column>
          <vxe-table-column type="seq" title="序号" width="60"></vxe-table-column>
          <vxe-table-column field="hisid" title="流水号" width="120" :visible="false"></vxe-table-column>
          <vxe-table-column field="setlTime" title="结算日期" width="120" :formatter="['date', 'yyyy-MM-dd']"></vxe-table-column>
        </se-table>
      </div>
      <template slot="bottom">底部区域</template>
    </se-panel>
  </div>
</template>

<script>
export default {
  methods: {
    openMap() {
      this.handleRouter(9);
    },
  },
};
</script>
<style>
</style>