<template>
    <div v-html="md"></div>
    <h3>效果</h3>
    <div class="review">
      <div class="unit-container">
        <div class="unit-left"></div>
        <div class="unit-fixed"></div>
        <div class="unit-right"></div>
      </div>
    </div>
  </template>
  <script>
  import CenterAdaptive from '../../../md/CenterAdaptive.md';
  
  export default {
    name: "Card 卡片",
    data() {
      return {
        md: CenterAdaptive
      };
    },
    methods: {
    },
  
  };
  </script>
  <style lang="scss" scoped>
  .unit-container {
      width: 100%;
      height: 200px;
      
      display: flex;
      border:1px solid #ddd;
  
  }
  .unit-left {
      background: #000;
      width:100px;
  }
  .unit-fixed {
      background: red;
      flex:1;
  }
  .unit-right {
      background: #000;
      width:100px;
  }
  </style>