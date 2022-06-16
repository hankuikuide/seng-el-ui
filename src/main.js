import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import ElementUI from 'element-ui'
import SengUI from './index.js'
import 'element-ui/lib/theme-chalk/index.css'
import './permission'
import VueAMap from 'vue-amap';

Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
    key: '215d186500e79f0fdf2fdab37032ce51',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    v: '1.4.4'
});

// 解决地图刷新显示不出来
const amapKeys = Object.keys(localStorage).filter(key => key.match(/^_AMap_/))
amapKeys.forEach(key => {
    // console.log(key)
    localStorage.removeItem(key)
})

//import './styles/theme-chalk/index.css'
Vue.use(ElementUI, {
    size: 'small'
})

Vue.use(SengUI)

Vue.config.productionTip = false

Vue.mixin({
    computed: {
        $basicData() {
            return this.$store.getters.basicData
        },
        $sysConfig() {
            return this.$store.getters.sysConfig
        },
    },
    methods: {
        handleRouter(path, params) {
            this.$router.push({
                name: path,
                params: params
            })
        },
    }
})

new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app')