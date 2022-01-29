# Echarts引入地图

## 下载低于5.x版本的echarts

## 在Vue中使用Echarts有两种方案
1. 使用第三方封装好的vue-echarts
   - https://github.com/ecomfe/vue-echarts
2. 引入Echarts独立封装组件
   - 封装组件

## Echarts实力参考：
https://github.com/nickiwen/echarts/tree/master/example

# 第三方自定义组件全局引用方法
1. 在index.js中导入想要在全局使用的组件
2. 使用Vue.component()方法导出
   ```
   import Tab from './Tab.vue'

   export default (Vue) => {
   Vue.component(Tab.name, Tab)
   }
   ```
3. 在main.js中导入index.js文件，然后使用Vue.use()加载组件

