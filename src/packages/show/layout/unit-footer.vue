<template>
    <footer class="el-footer" :style="{ height }">
      <slot></slot>
    </footer>
  </template>
  
  <script>
    export default {
      name: 'UnitFooter',
  
      componentName: 'UnitFooter',
  
      props: {
        height: {
          type: String,
          default: '60px'
        }
      }
    };
  </script>
  <style scoped>
  .el-footer{padding:0 20px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0}
  </style>
  