## Tag 标签

Tag标签是一种归类。用于标记和选择。其可以有一个关闭事件。核心是html和css。尤其是css。

其下css样式el-icon-close是element-ui所属的。这里拿过来用，用来表示一个icon图标。

有了这个基本结构就可以封装样式，包括大小以及颜色了。

tag的name可以作为slot占位。


### html

```

<span class="unit-tag">
        name
        <i class="unit-tag__close unit-icon-close el-icon-close"> </i>
    </span>

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

