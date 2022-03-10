import SeTable from './src/index'

SeTable.install = function (Vue) {
  Vue.component(SeTable.name, SeTable)
}

export {
  SeTable
}