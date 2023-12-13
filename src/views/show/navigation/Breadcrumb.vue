<template>
  <div v-html="md"></div>
  <h3>效果</h3>
  <div class="review">
    <div class="unit-breadcrumb">
      <span class="unit-breadcrumb__item">
        <span class="unit-breadcrumb__inner"> 22 </span>
        <span class="unit-breadcrumb__separator">{{ separator }}</span>
      </span>
      <span class="unit-breadcrumb__item">
        <span class="unit-breadcrumb__inner"> 33 </span>
        <span class="unit-breadcrumb__separator">{{ separator }}</span>
      </span>
      <span class="unit-breadcrumb__item">
        <span class="unit-breadcrumb__inner"> 44 </span>
        <span class="unit-breadcrumb__separator">{{ separator }}</span>
      </span>
    </div>
    <div class="unit-breadcrumb">
      <span class="unit-breadcrumb__item">
        <span class="unit-breadcrumb__inner"> 22 </span>
        <span class="unit-breadcrumb__separator">{{ separator1 }}</span>
      </span>
      <span class="unit-breadcrumb__item">
        <span class="unit-breadcrumb__inner"> 33 </span>
        <span class="unit-breadcrumb__separator">{{ separator1 }}</span>
      </span>
      <span class="unit-breadcrumb__item">
        <span class="unit-breadcrumb__inner"> 44 </span>
        <span class="unit-breadcrumb__separator">{{ separator1 }}</span>
      </span>
    </div>
  </div>
</template>
  <script>
import Breadcrumb from "../../../md/Breadcrumb.md";

export default {
  name: "面包屑导航",
  props: {
    to: {},
    replace: Boolean,
  },
  data() {
    return {
      md: Breadcrumb,
      separator: "/",
      separator1: "->",
      separatorClass: "",
    };
  },
  methods: {},
};
</script>
  <style lang="scss" scoped>
.unit-breadcrumb {
  font-size: 14px;
  line-height: 1;
}
.unit-breadcrumb::after,
.unit-breadcrumb::before {
  display: table;
  content: "";
}
.unit-breadcrumb::after {
  clear: both;
}
.unit-breadcrumb__separator {
  margin: 0 9px;
  font-weight: 700;
  color: #c0c4cc;
}
.unit-breadcrumb__separator[class*="icon"] {
  margin: 0 6px;
  font-weight: 400;
}
.unit-breadcrumb__item {
  float: left;
}
.unit-breadcrumb__inner {
  color: #606266;
}
.unit-breadcrumb__inner a,
.unit-breadcrumb__inner.is-link {
  font-weight: 700;
  text-decoration: none;
  -webkit-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  color: #303133;
}
.unit-breadcrumb__inner a:hover,
.unit-breadcrumb__inner.is-link:hover {
  color: #409eff;
  cursor: pointer;
}
.unit-breadcrumb__item:last-child .unit-breadcrumb__inner,
.unit-breadcrumb__item:last-child .unit-breadcrumb__inner a,
.unit-breadcrumb__item:last-child .unit-breadcrumb__inner a:hover,
.unit-breadcrumb__item:last-child .unit-breadcrumb__inner:hover {
  font-weight: 400;
  color: #606266;
  cursor: text;
}
.unit-breadcrumb__item:last-child .unit-breadcrumb__separator {
  display: none;
}
</style>