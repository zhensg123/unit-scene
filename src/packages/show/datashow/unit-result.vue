<template>
    <div class="el-result">
      <div class="el-result__icon">
        <slot name="icon">
          <component :is="iconElement" :class="iconElement" />
        </slot>
      </div>
      <div v-if="title || $slots.title" class="el-result__title">
        <slot name="title">
          <p>{{ title }}</p>
        </slot>
      </div>
      <div v-if="subTitle || $slots.subTitle" class="el-result__subtitle">
        <slot name="subTitle">
          <p>{{ subTitle }}</p>
        </slot>
      </div>
      <div v-if="$slots.extra" class="el-result__extra">
        <slot name="extra"></slot>
      </div>
    </div>
  </template>
  <script>
  // 主要利用了动态组件
  import IconSuccess from '../../common/icon-success.vue';
  import IconError from '../../common/icon-error.vue';
  import IconWarning from '../../common/icon-warning.vue';
  import IconInfo from '../../common/icon-info.vue';
  
  const IconMap = {
    success: 'icon-success',
    warning: 'icon-warning',
    error: 'icon-error',
    info: 'icon-info'
  };
  
  export default {
    name: 'UnitResult',
    components: {
      [IconSuccess.name]: IconSuccess,
      [IconError.name]: IconError,
      [IconWarning.name]: IconWarning,
      [IconInfo.name]: IconInfo
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      subTitle: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: 'info'
      }
    },
    computed: {
      iconElement() {
        const icon = this.icon;
        return icon && IconMap[icon] ? IconMap[icon] : 'icon-info';
      }
    }
  };
  </script>
  