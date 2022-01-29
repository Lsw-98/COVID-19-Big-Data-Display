<script>
export default {
  name: "Tab",
  props: {
    label: {
      // 将li标签的label属性传过来
      type: String,
      default: "tab",
    },
    index: {
      type: [String, Number],
      default: "1",
    },
  },
  computed: {
    isActive() {
      return this.$parent.currentIndex === this.index;
    },
  },
  methods: {
    // 通过Tabs.vue将Tab.vue的index传给Echarts.vue，
    // 将Index与currentIndex，得到当前点击的Index对应的高亮
    // 1.利用this.$parent调用父组件(Tabs.vue)getIndex()方法将index传给父组件
    clickItemHandle() {
      this.$parent.getIndex(this.index);
    },
  },
  mounted() {
    this.$parent.contentLabels.push(this);
  },
  render() {
    /**
     * 样式绑定
     */
    let classNames = {
      tab: true,
      active: this.isActive,
    };
    return (
      // onClick设置点击事件
      <li onClick={this.clickItemHandle} class={classNames}>
        {this.label}
      </li>
    );
  },
};
</script>

<style scoped>
.tab {
  flex: 1;
  list-style: none;
  line-height: 40px;
  margin-right: 30px;
  position: relative;
  text-align: center;
}

.tab.active {
  border-bottom: 2px solid blue;
}
</style>