<template>
  <CommonHeader :md="md">
      <div class="unit-page-header">
        <div class="unit-page-header__left" @click="$emit('back')">
          <i class="el-icon-back"></i>
          <div class="unit-page-header__title">
            <slot name="title">{{ title }}</slot>
          </div>
        </div>
        <div class="unit-page-header__content">
          <slot name="content">{{ content }}</slot>
        </div>
      </div>
  </CommonHeader>
</template>
<script>
import PageHeader from "../../../md/PageHeader.md";

export default {
  name: "Page Header 页头",
  data() {
    return {
      title: "详情页面",
      content: "详情页面",
      md: PageHeader,
    };
  },
  methods: {
    goBack() {
      console.log("go back");
    },
  },
};
</script>
<style lang="scss" scoped>
.unit-page-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  line-height: 24px;
}
.unit-page-header__left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  cursor: pointer;
  margin-right: 40px;
  position: relative;
}
.unit-page-header__left::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 16px;
  right: -20px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  background-color: #dcdfe6;
}
.unit-page-header__left .el-icon-back {
  font-size: 18px;
  margin-right: 6px;
  -ms-flex-item-align: center;
  align-self: center;
}
.unit-page-header__title {
  font-size: 14px;
  font-weight: 500;
}
.unit-page-header__content {
  font-size: 18px;
  color: #303133;
}
</style>