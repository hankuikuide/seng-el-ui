<template>
  <div style="width:100%; height:100%">
    <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>

    <el-amap ref="map" vid="amapDemo" :center="center" :zoom="zoom" :events="events" class="amap-demo">
      <el-amap-marker v-for="marker in markers" :position="marker.position" :key="marker.id" :events="marker.events" :icon="iconImg" :content="iconContent" style="width:1px;height:1px">
      </el-amap-marker>
      <el-amap-info-window v-if="window" :position="window.position" :visible="window.visible" :content="window.content" :offset="window.offset"></el-amap-info-window>

    </el-amap>
  </div>

</template>

<script>
export default {
  data: function () {
    return {
      zoom: 10,
      center: [114.43354, 30.612423],
      events: {
        // click: () => {
        //   alert("map clicked");
        // },
      },
      mapStyle: "amap://styles/blue", //修改地图的背景颜⾊
      markers: [],
      windows: [],
      window: "",
      // 地图搜索对象
      searchOption: {
        city: "",
        citylimit: true,
      },
      iconContent:
        '<i style="color:red;font-size:40px;" class="el-icon-location"></i>',
      iconImg:
        "http://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png",
    };
  },
  mounted() {
    this.loadMarkers();
  },
  methods: {
    onSearchResult(pois) {
      console.dir(pois);
    },
    loadMarkers() {
      //⾃定义map点坐标图标
      // let icon = new VueAMap.Icon({
      //   image: location,
      //   size: new AMap.Size(2, 2),
      //   imageSize: new AMap.Size(2, 2),
      // });
      let markers = [];
      let windows = [];
      let that = this;

      let pointMarkers = [
        {
          id: 1,
          lng: 114.271682,
          lat: 30.575991,
          stationName: "青浦⽔⽂站1",
        },
        {
          id: 2,
          lng: 114.347189,
          lat: 30.515675,
          stationName: "青浦⽔⽂站2",
        },
        {
          id: 3,
          lng: 114.272477,
          lat: 30.57509,
          stationName: "青浦⽔⽂站2",
        },
        {
          id: 4,
          lng: 114.357012,
          lat: 30.612345,
          stationName: "青浦⽔⽂站2",
        },
        {
          id: 5,
          lng: 114.358043,
          lat: 30.589908,
          stationName: "青浦⽔⽂站2",
        },
      ];

      pointMarkers.forEach((item, index) => {
        markers.push({
          position: [item.lng, item.lat],
          // icon: location,
          id: item.id,
          events: {
            click() {
              that.windows.forEach((window) => {
                window.visible = false;
              });
              that.window = that.windows[index];
              // that.$nextTick(() => {
              //   that.window.visible = true;
              // });
            },
          },
        });
        windows.push({
          position: [item.lng, item.lat],
          content:
            "" +
            "<div>" +
            item.stationName +
            "</div>" +
            "<div>" +
            "<span style='color: #66A0FF'>" +
            "经度：" +
            item.lat +
            "</span>" +
            "</div>" +
            "<div>" +
            "<span style='color: #66A0FF'>" +
            "纬度：" +
            item.lng +
            "</span>" +
            "</div>",
          offset: [5, -15], //窗体偏移
          visible: false, //初始是否显⽰
        });
      });

      //添加点标注
      this.markers = markers;
      //⽣成弹窗
      this.windows = windows;
    },
  },
};
</script>

<style>
.search-box {
  position: absolute;
  right: 20px !important;
  top: 100px !important;
}
</style>