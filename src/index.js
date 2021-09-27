import { Layout } from '../packages/layout/index.js'


const components = [
    Layout
]

const install = function(Vue) {

    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    Layout
}