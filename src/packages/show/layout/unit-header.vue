<template>
    <header class="el-header" :style="{ height }">
      <slot></slot>
    </header>
  </template>
  
  <script>
    export default {
      name: 'UnitHeader',
  
      componentName: 'UnitHeader',
  
      props: {
        height: {
          type: String,
          default: '60px'
        }
      }
    };
  </script>
  <style scoped>
  .el-header{padding:0 20px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0}
  </style>
  