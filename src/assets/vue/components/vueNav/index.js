import vueNav from './vueNav';
// const nav = () => System.import('./nav');

export default function install(Vue) {
  Vue.component("vueNav", Vue.extend(vueNav));
}