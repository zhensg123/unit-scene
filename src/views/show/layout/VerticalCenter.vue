<template>
  <div v-html="md"></div>
  <h3>效果</h3>
  <div class="review">
    <div class="unit-container">
      <div class="unit-box"></div>
    </div>
  </div>
</template>
<script>
import VerticalCenter from '../../../md/VerticalCenter.md';

export default {
  name: "垂直居中",
  data() {
    return {
      md: VerticalCenter
    };
  },
  methods: {
  },

};
</script>
<style lang="scss" scoped>
.unit-container {
    width: 200px;
    height: 200px;
    
    display: flex;
    border:1px solid #ddd;
    justify-content: center;
    align-items: center;

}
.unit-box {
    background: #000;
    width:100px;
    height: 100px;
}
</style>