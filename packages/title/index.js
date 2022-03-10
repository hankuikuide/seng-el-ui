import SeTitle from './src/index'

SeTitle.install = function (Vue) {
  Vue.component(SeTitle.name, SeTitle);
};

export {
  SeTitle
}