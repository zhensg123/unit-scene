## Breadcrumb 面包屑导航

### html 

```
<div class="el-breadcrumb">
    <span class="el-breadcrumb__item">
      <span :class="['el-breadcrumb__inner']"> 22 </span>
      <span  class="el-breadcrumb__separator">{{
        separator
      }}</span>
    </span>
    <span class="el-breadcrumb__item">
      <span :class="['el-breadcrumb__inner']"> 33 </span>
      <span  class="el-breadcrumb__separator">{{
        separator
      }}</span>
    </span>
    <span class="el-breadcrumb__item">
      <span :class="['el-breadcrumb__inner']"> 44 </span>
      <span class="el-breadcrumb__separator">{{
        separator
      }}</span>
    </span>
  </div>
  <div class="el-breadcrumb">
    <span class="el-breadcrumb__item">
      <span :class="['el-breadcrumb__inner']"> 22 </span>
      <span  class="el-breadcrumb__separator">{{
        separator1
      }}</span>
    </span>
    <span class="el-breadcrumb__item">
      <span :class="['el-breadcrumb__inner']"> 33 </span>
      <span  class="el-breadcrumb__separator">{{
        separator1
      }}</span>
    </span>
    <span class="el-breadcrumb__item">
      <span :class="['el-breadcrumb__inner']"> 44 </span>
      <span class="el-breadcrumb__separator">{{
        separator1
      }}</span>
    </span>
  </div>
```

### JavaScript

```
<script>
export default {
  data() {
    return {
      separator:'/ ',
      separator1:'> '
    }
  }
}
</script>
```

### scss

```
.el-breadcrumb {
  display: inline-block;
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 1.5;
  list-style: none;
  color: #303133;
  white-space: nowrap;
}
```