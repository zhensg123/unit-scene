## Card 卡片 (数据展示)

Card核心是html和css，主要是css。重点是Card的外部阴影显示。Header和body是两个div而已。如果是在vue里面头部名称和body可以作为占位符。

### html

```

 <div class="unit-card is-always-shadow">
      <div class="unit-card__header">
        我是头部
        <el-button style="float: right; padding: 3px 0" type="text"
          >操作按钮</el-button
        >
      </div>
      <div class="unit-card__body">
        <div>我是内容区</div>
      </div>
    </div>

```
### scss

```


.unit-card {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.unit-card.is-always-shadow,
.unit-card.is-hover-shadow:focus,
.unit-card.is-hover-shadow:hover {
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.unit-card__header {
  padding: 18px 20px;
  border-bottom: 1px solid #ebeef5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.unit-card__body {
  padding: 20px;
}
```

