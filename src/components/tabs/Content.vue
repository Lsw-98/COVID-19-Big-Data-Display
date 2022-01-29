<script>
export default {
  name: "Content",
  render() {
    return (
      <div>
        {this.contentLabels.map((ele, index) => {
          // return ele.isActive ? ele.$slots.default : "";
          return (
            <div style={{ display: ele.isActive ? "block" : "none" }}>
              {ele.$slots.default}
            </div>
          );
        })}
      </div>
    );
  },
  props: {
    contentLabels: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style scoped>
</style>