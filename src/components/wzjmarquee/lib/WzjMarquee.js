import WzjMarquee from './WzjMarquee.vue'
// let test = {}
// 方法的第一个参数是传入的Vue，第二个是自定义的插件参数
WzjMarquee.install = function (Vue, options) {
  // WzjMarquee.name 组件的name属性
  Vue.component(WzjMarquee.name, WzjMarquee)
}

export default WzjMarquee