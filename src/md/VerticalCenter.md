## 垂直居中布局 (展示-布局)

垂直居中有好几种实现，这里只列举一种常见的，使用flex布局：justify-content: center和align-items: center。


### html

```
<div class="unit-container">
      <div class="unit-box"></div>

 </div>

```
### scss

```
.unit-container {
    width: 200px;
    height: 200px;
    
    display: flex;
    border:1px solid #ddd;
    justify-content: center;
    align-items: center;

}
.unit-box {
    background: #000;
    width:100px;
    height: 100px;
}
```

