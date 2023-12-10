## 中间自适应两边固定

使用flex实现


### html

```

<div class="unit-container">
        <div class="unit-left"></div>
        <div class="unit-fixed"></div>
        <div class="unit-right"></div>
</div>

```
### scss

```

.unit-container {
      width: 100%;
      height: 200px;
      
      display: flex;
      border:1px solid #ddd;
  
  }
  .unit-left {
      background: #000;
      width:100px;
  }
  .unit-fixed {
      background: red;
      flex:1;
  }
  .unit-right {
      background: #000;
      width:100px;
  }
```

