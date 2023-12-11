<template>
  <div v-html="md"></div>
  <h3>效果</h3>
  <div class="unit-badge">
    <span>222</span>
    <sup class="unit-badge-content is-fixed"> 333 </sup>
  </div>
</template>
<script>
import Badge from "../../../md/Badge.md";

export default {
  name: "Badge 徽章",
  data() {
    return {
      md: Badge,
    };
  },
};
</script>
<style scoped>
.unit-badge {
  position: relative;
  vertical-align: middle;
  display: inline-block;
}
.unit-badge-content.is-fixed {
  position: absolute;
  top: 0;
  right: 10px;
  transform: translateY(-50%) translateX(100%);
}
.unit-badge-content {
  background-color: #f56c6c;
  border-radius: 10px;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  height: 18px;
  line-height: 18px;
  padding: 0 6px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #fff;
}
</style>