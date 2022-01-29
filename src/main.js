import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/common.css'
import Echarts from './plugins/echarts'
// 引入中国地图和世界地图
import "../node_modules/echarts/map/js/china"
import "../node_modules/echarts/map/js/world"

// 引入tab组件以便全局使用
import Tab from './components/tabs'
import Tabs from './components/tabs'

Vue.use(Echarts)
Vue.use(Tab)
Vue.use(Tabs)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
