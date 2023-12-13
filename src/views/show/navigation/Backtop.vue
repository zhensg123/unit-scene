<template>
  <div>
    <div v-html="md"></div>
    <h3>效果</h3>
    <div class="review">
      请往下滚动页面
      <div
       v-if="visible"
        @click.stop="handleClick"
        :style="{
          right: '40px',
          bottom: '40px',
        }"
        class="unit-backtop"
      >
        <!-- <slot>
        <unit-icon name="caret-top"></unit-icon>
      </slot> -->
        顶
      </div>
    </div>
  </div>
</template>
  <script>
import Backtop from "../../../md/Backtop.md";
import throttle from "../../../utils/throttle";

const cubic = (value) => Math.pow(value, 3);
const easeInOutCubic = (value) =>
  value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2;

export default {
  name: "回到顶部按钮",
  props: {
    visibilityHeight: {
      type: Number,
      default: 200,
    },
  },
  data() {
    return {
      md: Backtop,
      visible: false
    };
  },
  beforeUnmount() {
    this.container.removeEventListener("scroll", this.throttledScrollHandler);
  },
  mounted() {
    this.init();
    this.throttledScrollHandler = throttle(300, this.onScroll);
    this.container.addEventListener("scroll", this.throttledScrollHandler);
  },
  methods: {
    onScroll() {
      const scrollTop = this.el.scrollTop;
      this.visible = scrollTop >= this.visibilityHeight;
    },
    handleClick() {
      this.scrollToTop();
    },
    init() {
      this.container = document;
      this.el = document.documentElement;
      if (this.target) {
        this.el = document.querySelector(this.target);
        if (!this.el) {
          throw new Error(`target is not existed: ${this.target}`);
        }
        this.container = this.el;
      }
    },
    scrollToTop() {
      const el = this.el;

      const beginTime = Date.now();
      const beginValue = el.scrollTop;
      const rAF =
        window.requestAnimationFrame || ((func) => setTimeout(func, 16));
      const frameFunc = () => {
        const progress = (Date.now() - beginTime) / 500;
        if (progress < 1) {
          el.scrollTop = beginValue * (1 - easeInOutCubic(progress));
          rAF(frameFunc);
        } else {
          el.scrollTop = 0;
        }
      };
      rAF(frameFunc);
    },
  },
};
</script>
  <style lang="scss" scoped>
.unit-backtop {
  position: fixed;
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #409eff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 20px;
  -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  z-index: 5;
}
.unit-backtop:hover {
  background-color: #f2f6fc;
}
</style>