<template>
    <div class="el-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
      <div class="el-card__header" v-if="$slots.header || header">
        <slot name="header">{{ header }}</slot>
      </div>
      <div class="el-card__body" :style="bodyStyle">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name: 'UnitCard',
      props: {
        header: {},
        bodyStyle: {},
        shadow: {
          type: String
        }
      }
    };
  </script>
  <style scoped>
  .el-card{border-radius:4px;border:1px solid #EBEEF5;background-color:#FFF;overflow:hidden;color:#303133;-webkit-transition:.3s;transition:.3s}.el-card.is-always-shadow,.el-card.is-hover-shadow:focus,.el-card.is-hover-shadow:hover{-webkit-box-shadow:0 2px 12px 0 rgba(0,0,0,.1);box-shadow:0 2px 12px 0 rgba(0,0,0,.1)}.el-card__header{padding:18px 20px;border-bottom:1px solid #EBEEF5;-webkit-box-sizing:border-box;box-sizing:border-box}.el-card__body{padding:20px}
  </style>