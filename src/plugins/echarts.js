import echarts from 'echarts'

const install = function (Vue) {
  // Object对象的方法，ES5提供：defineProperties
  // 该方法通过在一个对象中定义一个或多个属性或修改属性，并返回一个对象
  Object.defineProperties(Vue.prototype, {
    $charts: {
      get() {
        return {
          chinaMap: function (id) {
            let dom = document.getElementById(id)
            let myChart = echarts.init(dom)
            const option = {
              // 提示信息
              toolTip: {

              },
              series: [{
                name: '省',   // 地图匹配的级别
                type: 'map',   // 配置图标类型, 有line等
                map: 'china',    // 中国地图
                roam: false,   // 是否允许自动缩放
                zoom: 1.2,    // 地图缩放比例
                //aspectScale: 0.75,   // 
                label: {    // 配置文字颜色，字体等样式
                  normal: {
                    show: true,   // 是否显示文字
                    textStyle: {
                      fontsize: 8,
                    }
                  }
                },
                itemStyle: {  // 配置地图样式
                  normal: {
                    areaColor: 'rgba(0,255,236,0)',
                    borderColor: 'rgba(0, 0, 0, 0.2)',
                  },
                  emphasis: {
                    areaColor: 'rgba(118,237,236,0.8)',
                    shadowOffsetX: 0,   // X坐标阴影
                    shadowOffsetY: 0,   // Y坐标阴影
                    shadowBlur: 20,   // 模糊程度
                    borderWidth: 0,   // 边框宽度
                    shadowColor: 'rgba(0, 0, 0, 0.5)'   // 阴影颜色
                  }
                }
              }]
            }
            myChart.setOption(option)
          }
        }
      }
    }
  })
}

export default install