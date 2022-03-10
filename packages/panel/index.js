import SePanel from './src/index'

SePanel.install = function (Vue) {
  Vue.component(SePanel.name, SePanel)
}

export {
  SePanel
}