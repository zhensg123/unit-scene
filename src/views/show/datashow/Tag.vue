<template>
  <div v-html="md"></div>
  <h3>效果</h3>
  <div class="review">
    <span class="unit-tag">
        name
        <i class="unit-tag__close unit-icon-close el-icon-close"> </i>
    </span>
  </div>

</template>
  <script>
import Tag from "../../../md/Tag.md";

export default {
  name: "Tag 标签",
  data() {
    return {
      md: Tag,
    };
  },
  methods: {},
};
</script>
  <style lang="scss" scoped>
.unit-tag {
  background-color: #ecf5ff;
  border-color: #d9ecff;
  display: inline-block;
  height: 32px;
  padding: 0 10px;
  line-height: 30px;
  font-size: 12px;
  color: #409eff;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  white-space: nowrap;
}

.unit-tag .unit-tag__close {
  color: #409eff;
}
.unit-tag .unit-tag__close:hover {
  color: #fff;
  background-color: #409eff;
}


.unit-tag .unit-icon-close {
  border-radius: 50%;
  text-align: center;
  position: relative;
  cursor: pointer;
  font-size: 12px;
  height: 16px;
  width: 16px;
  line-height: 16px;
  vertical-align: middle;
  top: -1px;
  right: -5px;
}
.unit-tag .unit-icon-close::before {
  display: block;
}

</style>