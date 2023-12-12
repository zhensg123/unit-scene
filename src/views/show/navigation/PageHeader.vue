<template>
    <unit-page-header @back="goBack" content="详情页面">
      <div class="el-page-header">
      <div class="el-page-header__left" @click="$emit('back')">
        <i class="el-icon-back"></i>
        <div class="el-page-header__title">
          <slot name="title">{{ title }}</slot>
        </div>
      </div>
      <div class="el-page-header__content">
        <slot name="content">{{ content }}</slot>
      </div>
    </div>
</unit-page-header>

</template>
<script>
  export default {
    name: 'Page Header 页头',
    data() {
      return {
        title: '详情页面',
        content: '详情页面'
      }
    },
    methods: {
      goBack() {
        console.log('go back');
      }
    }
  }
</script>