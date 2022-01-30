<template>
  <div class="cascade">
    <h3 class="title">各省市疫情政策</h3>
    <CascadeItem
      :options="options"
      label="出发城市"
      @onValue="getFromCity"
    ></CascadeItem>
    <CascadeItem
      :options="options"
      label="到达城市"
      @onValue="getToCity"
    ></CascadeItem>
    <van-button type="info" block>查看政策</van-button>
    <div></div>
  </div>
</template>

<script>
import api from "@/api";
import CascadeJson from "@/utils/cascade.json";
import CascadeItem from "@/components/CascadeItem.vue";

export default {
  name: "Cascade",
  components: {
    CascadeItem,
  },
  data() {
    return {
      options: [],
      cities: [],
    };
  },
  mounted() {
    this.options = CascadeJson.provinces;
  },
  methods: {
    getFromCity(data) {
      this.cities.push(data);
    },
    getToCity(data) {
      this.cities.push(data);
    },
  },
};
</script>

<style scoped>
.cascade {
  width: 100%;
  height: 150px;
  background: #fff;
}

.cascade .title {
  font-size: 0.16rem;
  margin: 0 0 0.08rem 0.16rem;
}
</style>