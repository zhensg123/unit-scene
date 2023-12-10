<template>
  <section class="el-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>
  
  <script>
export default {
  name: "UnitContainer",

  componentName: "UnitContainer",

  props: {
    direction: String,
  },

  computed: {
    isVertical() {
      if (this.direction === "vertical") {
        return true;
      } else if (this.direction === "horizontal") {
        return false;
      }
      return this.$slots && this.$slots.default
        ? this.$slots.default.some((vnode) => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag;
            return tag === "unit-header" || tag === "unit-footer";
          })
        : false;
    },
  },
};
</script>
  <style>
.el-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -ms-flex-preferred-size: auto;
  flex-basis: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-width: 0;
}
.el-container.is-vertical {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
</style>