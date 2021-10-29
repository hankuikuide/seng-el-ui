import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import ElementUI from 'element-ui'
import SengUI from './index.js'
import 'element-ui/lib/theme-chalk/index.css'
import './permission'

//import './styles/theme-chalk/index.css'
Vue.use(ElementUI, {
    size: 'small'
})

Vue.use(SengUI)

Vue.config.productionTip = false

new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app')