## Badge 徽章

sup是HTML中的一个标签，用于表示上标文本。实现Badge 徽章用到了sup，但具体位置实现实际是css。利用的是相对定位结合transform实现。

### html

```

<div class="badge">
    <span>222</span>
    <sup class="badge-content is-fixed"> 333 </sup>
  </div>

```
### scss

```

.badge {
  position: relative;
  vertical-align: middle;
  display: inline-block;
}
.badge-content.is-fixed {
  position: absolute;
  top: 0;
  right: 10px;
  transform: translateY(-50%) translateX(100%);
}
.badge-content {
  background-color: #f56c6c;
  border-radius: 10px;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  height: 18px;
  line-height: 18px;
  padding: 0 6px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #fff;
}
```

