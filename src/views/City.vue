<template>
  <div class="city">
    <div id="province"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "City",
  props: {
    city: {
      type: String,
      default: "",
    },
  },
  mounted() {
    axios
      .get("http://111.231.75.86:8000/api/provinces/CHN/")
      .then((res) => {
        this.$charts.provinceMap("province", this.city);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
#province {
  width: 375px;
  height: 500px;
}
</style>