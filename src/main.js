import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/common.css'
import Echarts from './plugins/echarts'
// 引入中国地图
import "../node_modules/echarts/map/js/china"

Vue.use(Echarts)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
