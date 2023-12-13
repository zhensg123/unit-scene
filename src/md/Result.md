## Result 结果展示

Tag标签是一种归类。用于标记和选择。其可以有一个关闭事件。核心是html和css。尤其是css。

其下css样式el-icon-close是element-ui所属的。这里拿过来用，用来表示一个icon图标。

有了这个基本结构就可以封装样式，包括大小以及颜色了。

tag的name可以作为slot占位。


### html

```

 <div class="unit-result">
    <div class="unit-result__icon">
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M24,19 L21,19 C20.1715729,19 19.5,19.6715729 19.5,20.5 C19.5,21.3284271 20.1715729,22 21,22 L21,22 L22.5,22 L22.5,31 L21,31 C20.1715729,31 19.5,31.6715729 19.5,32.5 C19.5,33.3284271 20.1715729,34 21,34 L21,34 L27,34 C27.8284271,34 28.5,33.3284271 28.5,32.5 C28.5,31.6715729 27.8284271,31 27,31 L27,31 L25.5,31 L25.5,20.5 C25.5,19.6715729 24.8284271,19 24,19 L24,19 Z M24,13 C22.8954305,13 22,13.8954305 22,15 C22,16.1045695 22.8954305,17 24,17 C25.1045695,17 26,16.1045695 26,15 C26,13.8954305 25.1045695,13 24,13 Z"
        />
      </svg>
    </div>
    <div class="unit-result__title">
      <slot name="title">
        <p>{{ title }}</p>
      </slot>
    </div>
    <div class="unit-result__subtitle">
      <slot name="subTitle">
        <p>{{ subTitle }}</p>
      </slot>
    </div>
  </div>

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