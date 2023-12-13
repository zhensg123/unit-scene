<template>
   <div v-html="md"></div>
    <h3>效果</h3>
    <div class="unit-progress" :class="['unit-progress--line']">
      <div class="unit-progress-bar">
        <div
          class="unit-progress-bar__outer"
          :style="{
            height: strokeWidth + 'px',
            backgroundColor: '#ebeef5',
          }"
        >
          <div class="unit-progress-bar__inner" :style="barStyle"></div>
        </div>
      </div>
      <div
        class="unit-progress__text"
        :style="{ fontSize: progressTextSize + 'px', color: '#606266' }"
      >
        10%
      </div>
    </div>
  
  </template>
  <script>
  import ProgressLine from "../../../md/ProgressLine.md";

  export default {
    name: "ProgressLine 长型进度条",
    props: {
      percentage: {
        type: Number,
        default: 10,
        required: true,
        validator: (val) => val >= 0 && val <= 100,
      },
      status: {
        type: String,
        validator: (val) => ["success", "exception", "warning"].indexOf(val) > -1,
      },
      strokeWidth: {
        type: Number,
        default: 6,
      },
      width: {
        type: Number,
        default: 126,
      },
      color: {
        type: [String, Array, Function],
        default: "",
      },
      textColor: {
        type: [String, Array, Function],
        default: "#606266",
      },
      format: Function,
    },
    data() {
      return {
        md: ProgressLine,
      };
    },
    computed: {
      barStyle() {
        const style = {};
        style.width = this.percentage + "%";
        style.backgroundColor = this.getCurrentColor(this.percentage);
        return style;
      },
      radius() {
        return 0;
      },
      trackPath() {
        const radius = this.radius;
        const isDashboard = false
        return `
            M 50 50
            m 0 ${isDashboard ? "" : "-"}${radius}
            a ${radius} ${radius} 0 1 1 0 ${isDashboard ? "-" : ""}${radius * 2}
            a ${radius} ${radius} 0 1 1 0 ${isDashboard ? "" : "-"}${radius * 2}
            `;
      },
      rate() {
        return 1;
      },
      stroke() {
        let ret;
        if (this.color) {
          ret = this.getCurrentColor(this.percentage);
        } else {
          switch (this.status) {
            case "success":
              ret = "#13ce66";
              break;
            case "exception":
              ret = "#ff4949";
              break;
            case "warning":
              ret = "#e6a23c";
              break;
            default:
              ret = "#20a0ff";
          }
        }
        return ret;
      },
  
      progressTextSize() {
        return 12 + this.strokeWidth * 0.4
      }
    },
    methods: {
      getCurrentColor(percentage) {
        if (typeof this.color === "function") {
          return this.color(percentage);
        } else if (typeof this.color === "string") {
          return this.color;
        } else {
          return this.getLevelColor(percentage);
        }
      },
      getLevelColor(percentage) {
        const colorArray = this.getColorArray().sort(
          (a, b) => a.percentage - b.percentage
        );
  
        for (let i = 0; i < colorArray.length; i++) {
          if (colorArray[i].percentage > percentage) {
            return colorArray[i].color;
          }
        }
        return colorArray[colorArray.length - 1].color;
      },
      getColorArray() {
        const color = this.color;
        const span = 100 / color.length;
        return color.map((seriesColor, index) => {
          if (typeof seriesColor === "string") {
            return {
              color: seriesColor,
              percentage: (index + 1) * span,
            };
          }
          return seriesColor;
        });
      },
    },
  };
  </script>
  <style scoped>
  .unit-progress {
    position: relative;
    line-height: 1;
  }
  .unit-progress__text {
    font-size: 14px;
    color: #606266;
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    line-height: 1;
  }
  .unit-progress__text i {
    vertical-align: middle;
    display: block;
  }


  .unit-progress-bar,
  .unit-progress-bar__inner::after {
    display: inline-block;
    vertical-align: middle;
  }
 


  .unit-progress-bar {
    padding-right: 50px;
    width: 100%;
    margin-right: -55px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .unit-progress-bar__outer {
    height: 6px;
    border-radius: 100px;
    background-color: #ebeef5;
    overflow: hidden;
    position: relative;
    vertical-align: middle;
  }
  .unit-progress-bar__inner {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #409eff;
    text-align: right;
    border-radius: 100px;
    line-height: 1;
    white-space: nowrap;
    -webkit-transition: width 0.6s ease;
    transition: width 0.6s ease;
  }
  .unit-progress-bar__inner::after {
    content: "";
    height: 100%;
  }

  </style>