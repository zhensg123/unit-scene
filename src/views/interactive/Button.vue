<template>
  <CommonHeader :md="md">
    <button
      class="unit-button"
      @click="handleClick"
      :disabled="buttonDisabled || loading"
      :class="[
        'unit-button--info',
        'unit-button--small',
        {
          'is-disabled': buttonDisabled,
          'is-loading': loading,
          'is-plain': plain,
          'is-round': round,
          'is-circle': circle,
        },
      ]"
    >
      <i class="unit-icon-loading" v-if="loading"></i>
      <i :class="icon" v-if="icon && !loading"></i>
      <span>111</span>
    </button>

    <button
      class="unit-button"
      @click="handleClick"
      :disabled="buttonDisabled || loading"
      :class="[
        'unit-button--text',
        'unit-button--small',
        {
          'is-disabled': buttonDisabled,
          'is-loading': loading,
          'is-plain': plain,
          'is-round': round,
          'is-circle': circle,
        },
      ]"
    >
      <i class="unit-icon-loading" v-if="loading"></i>
      <i :class="icon" v-if="icon && !loading"></i>
      <span>111</span>
    </button>

    <button
      class="unit-button"
      @click="handleClick"
      :disabled="true || loading"
      :class="[
        'unit-button--text',
        'unit-button--small',
        {
          'is-disabled': true,
          'is-loading': loading,
          'is-plain': plain,
          'is-round': round,
          'is-circle': circle,
        },
      ]"
    >
      <i class="unit-icon-loading" v-if="loading"></i>
      <i :class="icon" v-if="icon && !loading"></i>
      <span>111</span>
    </button>

    <button
      class="unit-button"
      @click="handleClick"
      :disabled="false || loading"
      :class="[
        'unit-button--text',
        'unit-button--small',
        {
          'is-disabled': true,
          'is-loading': loading,
          'is-plain': true,
          'is-round': round,
          'is-circle': circle,
        },
      ]"
    >
      <i class="unit-icon-loading" v-if="loading"></i>
      <i :class="icon" v-if="icon && !loading"></i>
      <span>111</span>
    </button>
  </CommonHeader>
</template>
  <script>
  import Button from '../../md/Button.md'
export default {
  name: "Button 按钮",
  props: {
    type: {
      type: String,
      default: "text",
    },
    size: String, // 大小变量
    icon: {
      type: String,
      default: "",
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean, // 形状变量
  },
  data(){
    return {
      md: Button
    }
  },
  computed: {
    buttonSize() {
      return this.size;
    },
    buttonDisabled() {
      return false;
    },
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>
  <style scoped>
.unit-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.unit-button + .unit-button {
  margin-left: 10px;
}
.unit-button:focus,
.unit-button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.unit-button:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: 0;
}

.unit-button.is-plain:active {
  background: #fff;
  outline: 0;
}
.unit-button.is-disabled,
.unit-button.is-disabled:focus,
.unit-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.unit-button.is-disabled.unit-button--text {
  background-color: transparent;
}
.unit-button.is-disabled.is-plain,
.unit-button.is-disabled.is-plain:focus,
.unit-button.is-disabled.is-plain:hover {
  background-color: #fff;
  border-color: #ebeef5;
  color: #c0c4cc;
}

.unit-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}
.unit-button--info:focus,
.unit-button--info:hover {
  background: #a6a9ad;
  border-color: #a6a9ad;
  color: #fff;
}
.unit-button--info.is-active,
.unit-button--info:active {
  background: #82848a;
  border-color: #82848a;
  color: #fff;
}
.unit-button--info:active {
  outline: 0;
}
.unit-button--info.is-disabled,
.unit-button--info.is-disabled:active,
.unit-button--info.is-disabled:focus,
.unit-button--info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}
.unit-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
}
.unit-button--info.is-plain:focus,
.unit-button--info.is-plain:hover {
  background: #909399;
  border-color: #909399;
  color: #fff;
}
.unit-button--info.is-plain:active {
  background: #82848a;
  border-color: #82848a;
  color: #fff;
  outline: 0;
}
.unit-button--info.is-plain.is-disabled,
.unit-button--info.is-plain.is-disabled:active,
.unit-button--info.is-plain.is-disabled:focus,
.unit-button--info.is-plain.is-disabled:hover {
  color: #bcbec2;
  background-color: #f4f4f5;
  border-color: #e9e9eb;
}

.unit-button--small,
.unit-button--small.is-round {
  padding: 9px 15px;
}
.unit-button--small.is-circle {
  padding: 9px;
}

.unit-button--text {
  border-color: transparent;
  color: #409eff;
  background: 0 0;
  padding-left: 0;
  padding-right: 0;
}
.unit-button--text:focus,
.unit-button--text:hover {
  color: #66b1ff;
  border-color: transparent;
  background-color: transparent;
}
.unit-button--text:active {
  color: #3a8ee6;
  border-color: transparent;
  background-color: transparent;
}
.unit-button--text.is-disabled,
.unit-button--text.is-disabled:focus,
.unit-button--text.is-disabled:hover {
  border-color: transparent;
}
</style>