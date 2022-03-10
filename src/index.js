import { Layout } from '../packages/layout/index.js'
import { SeTitle } from '../packages/title/index.js'
import { SePanel } from '../packages/panel/index.js'
import { SeTable } from '../packages/table/index.js'

const components = [
    Layout,
    SeTitle,
    SePanel,
    SeTable
]

const install = function (Vue) {

    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    Layout,
    SeTitle,
    SePanel,
    SeTable
}