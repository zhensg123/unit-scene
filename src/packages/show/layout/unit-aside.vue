<template>
    <aside class="el-aside" :style="{ width }">
      <slot></slot>
    </aside>
  </template>
  
  <script>
    export default {
      name: 'UnitAside',
  
      componentName: 'UnitAside',
  
      props: {
        width: {
          type: String,
          default: '300px'
        }
      }
    };
  </script>
  <style scoped>
  .el-aside{overflow:auto;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0}
  </style>