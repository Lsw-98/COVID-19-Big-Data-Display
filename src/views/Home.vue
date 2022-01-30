<template>
  <div class="home">
    <Header></Header>
    <!-- 
      将covid19Info对象传给Covid19Info组件
      父组件（Home）向子组件（Covid19Info）传值，使用props
      在子组件标签中使用v-bind动态绑定covid19Info对象
      然后再Covid19Info组件中的props对象中创建covid19Info对象，以便接收父组件传来的数据
     -->
    <Info :covid19Info="covid19Info"></Info>
    <Case :caseInfo="caseInfo"></Case>
    <Echarts></Echarts>
    <MySwiper></MySwiper>
    <Cascade></Cascade>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Info from "@/components/Covid19Info.vue";
import Case from "@/components/CaseData.vue";
import Echarts from "@/components/Echarts.vue";
import MySwiper from "@/components/MySwiper.vue";
import Cascade from "@/components/Cascade.vue";

import api from "@/api";

export default {
  name: "Home",
  components: {
    Header,
    Info,
    Case,
    Echarts,
    MySwiper,
    Cascade,
  },
  data() {
    return {
      // 疫情数据
      covid19Info: {
        note1: "",
        note2: "",
        note3: "",
        remark1: "",
        remark2: "",
        remark3: "",
      },
      // 病例数据
      caseInfo: {
        modifyTime: "",
        currentConfirmedCount: 0, // 现存确诊人数
        confirmedCount: 0, // 累计确诊人数
        suspectedCount: 0, // 	累计境外输入人数
        curedCount: 0, // 累计治愈人数
        deadCount: 0, // 	累计死亡人数
        seriousCount: 0, // 现存无症状人数

        currentConfirmedIncr: 0, // 相比昨天现存确诊人数
        confirmedIncr: 0, // 相比昨天累计确诊人数
        suspectedIncr: 0, // 	新增境外输入人数
        curedIncr: 0, // 相比昨天新增治愈人数
        deadIncr: 0, // 相比昨天新增死亡人数
        seriousIncr: 0, // 相比昨天现存无症状人数
      },
      // 疫情地图数据
      mapData: {
        // ae08907862c9415e6224eaa185c7d3de
        // 62e34ad34025d5d5127135efa58d4ca
      },
    };
  },
  methods: {},
  /**
   * 应该把接口请求放在mounted()中
   * 如果把所有请求放在created里面的话,请求过多会,加载太慢会导致页面出现短暂的白屏情况
   * created 是加载DOM,html之后 就马上执行, 比如初始化,获取屏幕高度调整,赋值等等,
   * mounted 是执行包括js之后,准备开始调用方法
   */
  mounted() {
    // 为什么在home中做请求
    // 可以减少请求次数，在Home中进行一次请求后传给其他组件
    api
      .getNcov({
        key: "ae08907862c9415e6224eaa185c7d3de",
      })
      .then((res) => {
        if (res.status == 200) {
          // 对疫情数据的处理
          this.covid19Info.note1 = res.data.newslist[0].desc.note1;
          this.covid19Info.note2 = res.data.newslist[0].desc.note2;
          this.covid19Info.note3 = res.data.newslist[0].desc.note3;
          this.covid19Info.remark1 = res.data.newslist[0].desc.remark1;
          this.covid19Info.remark2 = res.data.newslist[0].desc.remark2;
          this.covid19Info.remark3 = res.data.newslist[0].desc.remark3;

          // 对时间的处理
          this.caseInfo.modifyTime = res.data.newslist[0].desc.modifyTime;
          this.caseInfo.currentConfirmedCount =
            res.data.newslist[0].desc.currentConfirmedCount;
          this.caseInfo.confirmedCount =
            res.data.newslist[0].desc.confirmedCount;
          this.caseInfo.suspectedCount =
            res.data.newslist[0].desc.suspectedCount;
          this.caseInfo.curedCount = res.data.newslist[0].desc.curedCount;
          this.caseInfo.deadCount = res.data.newslist[0].desc.deadCount;
          this.caseInfo.seriousCount = res.data.newslist[0].desc.seriousCount;
          this.caseInfo.currentConfirmedIncr =
            res.data.newslist[0].desc.currentConfirmedIncr;
          this.caseInfo.confirmedIncr = res.data.newslist[0].desc.confirmedIncr;
          this.caseInfo.suspectedIncr = res.data.newslist[0].desc.suspectedIncr;
          this.caseInfo.curedIncr = res.data.newslist[0].desc.curedIncr;
          this.caseInfo.deadIncr = res.data.newslist[0].desc.deadIncr;
          this.caseInfo.seriousIncr = res.data.newslist[0].desc.seriousIncr;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
</style>