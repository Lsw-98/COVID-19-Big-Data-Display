<template>
  <!-- 
    顶部组件
  -->
  <div class="header"></div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 33.5%;
  color: #fff;
  /* rem: 相对于根元素的font-size */
  font-size: 0.28rem;
  text-align: center;
  background: url(../assets/img/1.jpg);
  /* 
    background-size中，100%和cover都是用于将图片扩大或者缩放来适应整个容器
    background-size：100% 100%;---按容器比例撑满，图片变形；
    background-size：cover;---把背景图片放大到适合元素容器的尺寸，图片比例不变，
    但是要注意，使用cover超出容器的部分可能会裁掉。
   */
  background-size: cover;
}
</style>