## Timeline 时间线 

Timeline 时间线纯纯的ul标签实现，没有事件。


### html

```

 <ul class="unit-timeline">
      <li class="unit-timeline-item">
        <div class="unit-timeline-item__tail"></div>

        <div
          class="unit-timeline-item__node"
          :class="[
            `unit-timeline-item__node--normal`,
            `unit-timeline-item__node`,
          ]"
        ></div>

        <div class="unit-timeline-item__wrapper">
          <div class="el-timeline-item__timestamp is-top">
            {{ timestamp }}
          </div>
          <div class="unit-timeline-item__content">33</div>
        </div>
      </li>
      <li class="unit-timeline-item">
        <div class="unit-timeline-item__tail"></div>

        <div
          class="unit-timeline-item__node"
          :class="[
            `unit-timeline-item__node--normal`,
            `unit-timeline-item__node--primary`,
          ]"
        ></div>

        <div class="unit-timeline-item__wrapper">
          <div class="unit-timeline-item__content">222</div>

          <div class="unit-timeline-item__timestamp is-bottom">
            {{ timestamp }}
          </div>
        </div>
      </li>
      <li class="unit-timeline-item">
        <div class="unit-timeline-item__tail"></div>

        <div
          class="unit-timeline-item__node"
          :class="[
            `unit-timeline-item__node--normal`,
            `unit-timeline-item__node--primary`,
          ]"
        >
          <i class="unit-timeline-item__icon el-icon-more"></i>
        </div>

        <div class="unit-timeline-item__wrapper">
          <div class="unit-timeline-item__content">222</div>

          <div class="unit-timeline-item__timestamp is-bottom">
            {{ timestamp }}
          </div>
        </div>
      </li>
    </ul>

```
### scss

```


.unit-timeline {
  margin: 0;
  font-size: 14px;
  list-style: none;
}

.unit-timeline .unit-timeline-item:last-child .unit-timeline-item__tail {
  display: none;
}

.unit-timeline-item {
  position: relative;
  padding-bottom: 20px;
}

.unit-timeline-item__wrapper {
  position: relative;
  padding-left: 28px;
  top: -3px;
}

.unit-timeline-item__tail {
  position: absolute;
  left: 4px;
  height: 100%;
  border-left: 2px solid #e4e7ed;
}

.unit-timeline-item__icon {
  color: #fff;
  font-size: 13px;
}

.unit-timeline-item__node {
  position: absolute;
  background-color: #e4e7ed;
  border-radius: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.unit-timeline-item__node--normal {
  left: -1px;
  width: 12px;
  height: 12px;
}

.unit-timeline-item__node--large {
  left: -2px;
  width: 14px;
  height: 14px;
}

.unit-timeline-item__node--primary {
  background-color: #409eff;
}

.unit-timeline-item__content {
  color: #303133;
}

.unit-timeline-item__timestamp {
  color: #909399;
  line-height: 1;
  font-size: 13px;
}

.unit-timeline-item__timestamp.is-top {
  margin-bottom: 8px;
  padding-top: 4px;
}

.unit-timeline-item__timestamp.is-bottom {
  margin-top: 8px;
}
```

### javascript

```
export default {
  name: "Timeline 时间线",
  props: {
    timestamp: {
      type: String,
      default: "2019-01-01",
    }
  },
  data() {
    return {
      md: CenterAdaptive,
    };
  },
};

```