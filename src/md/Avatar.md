## Avatar 头像 (展示-数据展示)

Avatar 头像解释

- 一个span标签，之后是纯css
- span里面就是一个图片，可以是网络图片，也可以是本地图片


### html

```

<span class="unit-avatar unit-avatar--circle">
      <img :src="src" style="object-fit: fit" v-if="src" alt="" />
    </span>

```
### scss

```

.unit-avatar {
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  color: #fff;
  background: #c0c4cc;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.unit-avatar > img {
  display: block;
  height: 100%;
  vertical-align: middle;
}
.unit-avatar--circle {
  border-radius: 50%;
}

```

### JavaScript

```
export default {
  props: {
    src: {
      type: String,
      default:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    },
  }
};
</script>

```

