<template>
  <div class="auto-tootltip text-overflow">
    <el-tooltip
      class="item"
      v-if="_isShowTooltip"
      effect="dark"
      :content="content"
      :placement="placement"
    >
      <!-- <div slot="content">{{value}}</div> -->
      <span>{{ content }}</span>
    </el-tooltip>
    <template v-else>{{ content }}</template>
  </div>
</template>
<script>
export default {
  name: "AutoTooltip",
  props: {
    content: {
      type: [Number, String],
      default: "我是内容",
    },
    placement: {
      type: [Number, String],
      default: "top",
    },
    isBold: Boolean,
    fontSize: String,
    isShowTooltip: undefined,
  },
  data() {
    return {
      _isShowTooltip: this.isShowTooltip,
    };
  },
  methods: {
    autoShowTooltip() {
      if (this.isShowTooltip === undefined) {
        this.$nextTick(() => {
          this._isShowTooltip = this.$el.scrollWidth > this.$el.offsetWidth;
        });
      }else {
        this._isShowTooltip = true
      }
    },
  },
  mounted() {
    this.autoShowTooltip();
  },
};
</script>
  <style lang='scss' scoped>
.auto-tootltip {
  width: 100%;
}
.text-overflow {
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  span {
    max-width: 100%;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
