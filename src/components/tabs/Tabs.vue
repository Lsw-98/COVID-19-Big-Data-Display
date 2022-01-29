<script>
import Content from "./Content.vue";

export default {
  name: "Tabs",
  props: {
    currentIndex: {
      type: [String, Number],
      default: "1",
    },
  },
  data() {
    return {
      contentLabels: [],
    };
  },
  render() {
    // 设置一个插槽，用于装三个Tab标签
    return (
      <div>
        <ul class="tabs-header">{this.$slots.default}</ul>
        <Content contentLabels={this.contentLabels}></Content>
      </div>
    );
  },
  methods: {
    // 2. 通过this.$emit()方法将index通过Tabs标签绑定的点击事件传给Echarts.vue
    getIndex(index) {
      this.$emit("onIndex", index);
    },
  },
};
</script>

<style scoped>
.tabs-header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #ededed;
}
</style>