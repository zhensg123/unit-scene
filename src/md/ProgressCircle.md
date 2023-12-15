## ProgressCircle 圆形进度条

ProgressCircle 圆形进度条，这里整理的是svg来实现的。当然也可以通过div实现。


### html

```

 <div class="unit-progress unit-progress--circle" >
    <div
      class="unit-progress-circle"
      :style="{ height: 126 + 'px', width: 126 + 'px' }"
    >
      <svg viewBox="0 0 100 100">
        <path
          class="unit-progress-circle__track"
          :d="trackPath"
          stroke="#ebeef5"
          :stroke-width="relativeStrokeWidth"
          fill="none"
          :style="trailPathStyle"
        ></path>
        <path
          class="unit-progress-circle__path"
          :d="trackPath"
          :stroke="stroke"
          fill="none"
          :stroke-linecap="strokeLinecap"
          :stroke-width="percentage ? relativeStrokeWidth : 0"
          :style="circlePathStyle"
        ></path>
      </svg>
    </div>
    <div
      class="unit-progress__text"
      :style="{ fontSize: 126 * 0.111111 + 2 + 'px', color: '#606266' }"
    >
      10%
    </div>
  </div>

```
### JavaScript
```
export default {
  name: "ProgressCircle 圆型进度条",
  props: {
    percentage: {
      type: Number,
      default: 10,
      required: true,
      validator: (val) => val >= 0 && val <= 100,
    },

    strokeWidth: {
      type: Number,
      default: 6,
    },
    strokeLinecap: {
      type: String,
      default: "round",
    },
    width: {
      type: Number,
      default: 126,
    },
    color: {
      type: [String, Array, Function],
      default: "",
    },
    format: Function,
  },
  data() {
      return {
      };
    },
  computed: {
    barStyle() {
      const style = {};
      style.width = this.percentage + "%";
      style.backgroundColor = this.getCurrentColor(this.percentage);
      return style;
    },
    relativeStrokeWidth() {
      return ((this.strokeWidth / this.width) * 100).toFixed(1);
    },
    radius() {
      return parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);
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
    perimeter() {
      return 2 * Math.PI * this.radius;
    },
    rate() {
      return 1;
    },
    strokeDashoffset() {
      const offset = (-1 * this.perimeter * (1 - this.rate)) / 2;
      return `${offset}px`;
    },
    trailPathStyle() {
      return {
        strokeDasharray: `${this.perimeter * this.rate}px, ${this.perimeter}px`,
        strokeDashoffset: this.strokeDashoffset,
      };
    },
    circlePathStyle() {
      return {
        strokeDasharray: `${
          this.perimeter * this.rate * (this.percentage / 100)
        }px, ${this.perimeter}px`,
        strokeDashoffset: this.strokeDashoffset,
        transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease",
      };
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
      return this.width * 0.111111 + 2;
    },
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
```
### scss

```


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
.unit-progress--circle {
  display: inline-block;
}
.unit-progress--circle .unit-progress__text {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
}
.unit-progress--circle .unit-progress__text i {
  vertical-align: middle;
  display: inline-block;
}
```

