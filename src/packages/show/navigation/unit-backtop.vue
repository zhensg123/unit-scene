<template>
    <transition name="el-fade-in">
      <div
        v-if="visible"
        @click.stop="handleClick"
        :style="{
          'right': styleRight,
          'bottom': styleBottom
        }"
        class="el-backtop">
        <slot>
          <unit-icon name="caret-top"></unit-icon>
        </slot>
      </div>
    </transition>
  </template>
  
  <script>
  import throttle from '../../../utils/throttle';
  
  const cubic = value => Math.pow(value, 3);
  const easeInOutCubic = value => value < 0.5
    ? cubic(value * 2) / 2
    : 1 - cubic((1 - value) * 2) / 2;
  
  export default {
    name: 'UnitBacktop',
  
    props: {
      visibilityHeight: {
        type: Number,
        default: 200
      },
      target: [String],
      right: {
        type: Number,
        default: 40
      },
      bottom: {
        type: Number,
        default: 40
      }
    },
  
    data() {
      return {
        el: null,
        container: null,
        visible: false
      };
    },
  
    computed: {
      styleBottom() {
        return `${this.bottom}px`;
      },
      styleRight() {
        return `${this.right}px`;
      }
    },
  
    mounted() {
      this.init();
      this.throttledScrollHandler = throttle(300, this.onScroll);
      this.container.addEventListener('scroll', this.throttledScrollHandler);
    },
  
    methods: {
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
      onScroll() {
        const scrollTop = this.el.scrollTop;
        this.visible = scrollTop >= this.visibilityHeight;
      },
      handleClick(e) {
        this.scrollToTop();
        this.$emit('click', e);
      },
      scrollToTop() {
        const el = this.el;
        const beginTime = Date.now();
        const beginValue = el.scrollTop;
        const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16));
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
      }
    },
  
    beforeDestroy() {
      this.container.removeEventListener('scroll', this.throttledScrollHandler);
    }
  };
  </script>
  <style scoped>
  .el-backtop{position:fixed;background-color:#FFF;width:40px;height:40px;border-radius:50%;color:#409EFF;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:20px;-webkit-box-shadow:0 0 6px rgba(0,0,0,.12);box-shadow:0 0 6px rgba(0,0,0,.12);cursor:pointer;z-index:5}.el-backtop:hover{background-color:#F2F6FC}
  </style>