## Link 文字链接 (展示-导航)

Link的核心依然是html和css。主要通过

1. 占位slot
2. 传值prop
3. 外部属性$attrs

封装。

### html

```

   <a
    :class="[
      'unit-link',
      type ? `unit-link--${type}` : '',
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline',
    ]"
    :href="disabled ? null : href"
    v-bind="$attrs"
    @click="handleClick"
  >
    <i :class="icon" v-if="icon"></i>

    <span  class="unit-link--inner">
      <slot>我是默认文字</slot>
    </span>

    <template v-if="$slots.icon"
      ><slot v-if="$slots.icon" name="icon"></slot
    ></template>
  </a>

```

### JavaScript

```

export default {
  name: "Link 文字链接",
  // 组件构造函数：传参包括props和slot和slotScope三部分
  props: {
    type: {
      type: String,
      default: "default",
    },
    underline: {
      type: Boolean,
      default: true,
    },
    disabled: Boolean,
    href: String,
    icon: String,
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        if (!this.href) {
          this.$emit("click", event);
        }
      }
    },
  },
};
```
### scss

```


.unit-link {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  text-decoration: none;
  outline: 0;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
}
.unit-link.is-underline:hover:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 0;
  bottom: 0;
  border-bottom: 1px solid #409eff;
}
.unit-link.unit-link--default:after,
.unit-link.unit-link--primary.is-underline:hover:after,
.unit-link.unit-link--primary:after {
  border-color: #409eff;
}
.unit-link.is-disabled {
  cursor: not-allowed;
}
.unit-link [class*="unit-icon-"] + span {
  margin-left: 5px;
}
.unit-link.unit-link--default {
  color: #606266;
}
.unit-link.unit-link--default:hover {
  color: #409eff;
}
.unit-link.unit-link--default.is-disabled {
  color: #c0c4cc;
}
.unit-link.unit-link--primary {
  color: #409eff;
}
.unit-link.unit-link--primary:hover {
  color: #66b1ff;
}
.unit-link.unit-link--primary.is-disabled {
  color: #a0cfff;
}
.unit-link.unit-link--danger.is-underline:hover:after,
.unit-link.unit-link--danger:after {
  border-color: #f56c6c;
}
.unit-link.unit-link--danger {
  color: #f56c6c;
}
.unit-link.unit-link--danger:hover {
  color: #f78989;
}
.unit-link.unit-link--danger.is-disabled {
  color: #fab6b6;
}
.unit-link.unit-link--success.is-underline:hover:after,
.unit-link.unit-link--success:after {
  border-color: #67c23a;
}
.unit-link.unit-link--success {
  color: #67c23a;
}
.unit-link.unit-link--success:hover {
  color: #85ce61;
}
.unit-link.unit-link--success.is-disabled {
  color: #b3e19d;
}
.unit-link.unit-link--warning.is-underline:hover:after,
.unit-link.unit-link--warning:after {
  border-color: #e6a23c;
}
.unit-link.unit-link--warning {
  color: #e6a23c;
}
.unit-link.unit-link--warning:hover {
  color: #ebb563;
}
.unit-link.unit-link--warning.is-disabled {
  color: #f3d19e;
}
.unit-link.unit-link--info.is-underline:hover:after,
.unit-link.unit-link--info:after {
  border-color: #909399;
}
.unit-link.unit-link--info {
  color: #909399;
}
.unit-link.unit-link--info:hover {
  color: #a6a9ad;
}
.unit-link.unit-link--info.is-disabled {
  color: #c8c9cc;
}
```

