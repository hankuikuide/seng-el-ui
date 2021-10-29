import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const messages = {
    'zh_CN': require('./assets/i18n/zh_CN')
}

export default new VueI18n({
    locale: 'zh_CN',
    messages: messages
})