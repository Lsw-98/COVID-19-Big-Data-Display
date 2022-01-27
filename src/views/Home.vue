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
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Info from "@/components/Covid19Info.vue";
import api from "@/api";

export default {
  name: "Home",
  components: {
    Header,
    Info,
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
    };
  },
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
          this.covid19Info.note1 = res.data.newslist[0].desc.note1;
          this.covid19Info.note2 = res.data.newslist[0].desc.note2;
          this.covid19Info.note3 = res.data.newslist[0].desc.note3;
          this.covid19Info.remark1 = res.data.newslist[0].desc.remark1;
          this.covid19Info.remark2 = res.data.newslist[0].desc.remark2;
          this.covid19Info.remark3 = res.data.newslist[0].desc.remark3;
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