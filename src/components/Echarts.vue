<template>
  <div class="e-charts">
    <p class="title"><i></i>疫情地图</p>
    <Tabs :currentIndex="currentIndex" @onIndex="indexChange">
      <Tab index="1" label="国内疫情"> <div id="map"></div> </Tab>
      <Tab index="2" label="国外疫情">
        <div id="worldMap"></div>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Echarts",
  data() {
    return {
      // 当前tab的索引值
      currentIndex: "1",
    };
  },
  methods: {
    // 3.给currentIndex赋值
    indexChange(index) {
      this.currentIndex = index;
    },
  },
  mounted() {
    function nocvCity() {
      return axios.get("http://111.231.75.86:8000/api/provinces/CHN/");
    }
    function nocvAbroad() {
      return axios.get(
        "http://api.tianapi.com/ncovabroad/index?key=ae08907862c9415e6224eaa185c7d3de"
      );
    }
    function nocvProvince() {
      return axios.get("http://111.231.75.86:8000/api/provinces/CHN/");
    }
    // 合并网络请求
    axios
      .all([nocvCity(), nocvAbroad()])
      .then(
        axios.spread((nocvCity, nocvAbroad) => {
          // 两个请求现在都执行完成
          let allCitys = [];
          for (let i = 0; i < nocvCity.data.length; i++) {
            let temp = {
              name: nocvCity.data[i].provinceName,
              value: nocvCity.data[i].currentConfirmedCount,
            };
            allCitys.push(temp);
          }
          let worlds = [];
          for (let j = 0; j < nocvAbroad.data.newslist.length; j++) {
            let temp = {
              name: nocvAbroad.data.newslist[j].provinceName,
              value: nocvAbroad.data.newslist[j].currentConfirmedCount,
            };
            worlds.push(temp);
          }
          this.$charts.chinaMap("map", allCitys);
          this.$charts.worldMap("worldMap", worlds);
        })
      )
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
#map {
  width: 375px;
  height: 400px;
}
#worldMap {
  width: 375px;
  height: 400px;
}
.title {
  border-top: 0.005rem solid #ebebeb;
  border-bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  height: 0.44rem;
  padding: 0 0.16rem;
  font-weight: 500;
  font-size: 0.17rem;
  line-height: 0.44rem;
  background: #fff;
}
.title::before {
  content: "";
  width: 5px;
  height: 20px;
  background: #4169e2;
  margin-right: 10px;
}
</style>