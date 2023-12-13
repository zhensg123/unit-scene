## ProgressLine 条形进度条

ProgressLine 条形进度条，这里通过div实现的。

### html

```

<span class="unit-tag">
        name
        <i class="unit-tag__close unit-icon-close el-icon-close"> </i>
    </span>

```

### JavaScript
```
export default {
  name: "Result 结果展示",

  props: {
    title: {
      type: String,
      default: "标题",
    },
    subTitle: {
      type: String,
      default: "子标题",
    },
    icon: {
      type: String,
      default: "info",
    },
  },
};
```
### scss

```

.unit-tag {
  background-color: #ecf5ff;
  border-color: #d9ecff;
  display: inline-block;
  height: 32px;
  padding: 0 10px;
  line-height: 30px;
  font-size: 12px;
  color: #409eff;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  white-space: nowrap;
}

.unit-tag .unit-tag__close {
  color: #409eff;
}
.unit-tag .unit-tag__close:hover {
  color: #fff;
  background-color: #409eff;
}


.unit-tag .unit-icon-close {
  border-radius: 50%;
  text-align: center;
  position: relative;
  cursor: pointer;
  font-size: 12px;
  height: 16px;
  width: 16px;
  line-height: 16px;
  vertical-align: middle;
  top: -1px;
  right: -5px;
}
.unit-tag .unit-icon-close::before {
  display: block;
}
```
