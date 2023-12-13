<template>
    <div class="common-header">
        <div v-html="md"></div>
        <h3>效果</h3>
        <slot></slot>
    </div>
  </template>
  <script>
  export default {
    name: "CommonHeader",
    props: {
      md: {
        type: [Number, String],
        default: "",
      },
    }
  };
  </script>
 