<template>
  <div v-html="md"></div>
  <h3>效果</h3>
  <div class="review">
    <div class="unit-card is-always-shadow">
      <div class="unit-card__header">
        我是头部
        <el-button style="float: right; padding: 3px 0" type="text"
          >操作按钮</el-button
        >
      </div>
      <div class="unit-card__body">
        <div>我是内容区</div>
      </div>
    </div>
  </div>
</template>
  <script>
import Card from "../../../md/Card.md";

export default {
  name: "Card 卡片",
  data() {
    return {
      md: Card,
    };
  },
  methods: {},
};
</script>
  <style lang="scss" scoped>
.unit-card {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.unit-card.is-always-shadow,
.unit-card.is-hover-shadow:focus,
.unit-card.is-hover-shadow:hover {
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.unit-card__header {
  padding: 18px 20px;
  border-bottom: 1px solid #ebeef5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.unit-card__body {
  padding: 20px;
}
</style>