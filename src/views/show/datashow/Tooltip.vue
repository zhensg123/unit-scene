<template>
  <div
    class="tooltip-wrapper"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >
    <slot>2323</slot>
    <transition name="fade">

    <div v-if="show" class="tooltip" :class="position">
      {{ content }}
      <!-- <div v-if="position === 'top'" class="arrow-down"></div>
      <div v-if="position === 'bottom'" class="arrow-up"></div>
      <div v-if="position === 'left'" class="arrow-right"></div>
      <div v-if="position === 'right'" class="arrow-left"></div> -->
    </div>
    </transition>
  </div>
</template>
  
  <script>
export default {
  name: "Tooltip 提示文字",
  data() {
    return {
      show: false,
    };
  },
  props: {
    position: {
      type: String,
      default: "top",
    },
    content: {
      type: String,
      default: "11111111111",
    },
  },
};
</script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
.tooltip-wrapper {
  position: relative;
  display: inline-block;
  margin: 100px;
}

.tooltip {
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  white-space: nowrap;
}

.tooltip.top {
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, -10px);
}
.tooltip.top::before {
  content: "";
  display: inline-block;
  position: absolute;

  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #333;
  bottom: -5px;
  left: calc(50% - 5px);
}

.tooltip.bottom {
  top: 100%;
  left: 50%;
  transform: translate(-50%, 10px);
  position: absolute;
}
.tooltip.bottom::before {
  content: "";
  display: inline-block;
  position: absolute;

  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #333;
  top: -5px;
  left: calc(50% - 5px);
}

.tooltip.left {
  right: 100%;
  top: 50%;
  transform: translate(-10px, -50%);
  position: absolute;
}
.tooltip.left::before {
  content: "";
  position: absolute;
  display: inline-block;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #333;
  right: -5px;
  top: calc(50% - 5px);
}

.tooltip.right {
  left: 100%;
  top: -5px;
  transform: translate(10px);
  position: absolute;
}
.tooltip.right::before {
  content: "";
  position: absolute;
  display: inline-block;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid #333;
  left: -5px;
  top: calc(50% - 5px);
}
</style>
