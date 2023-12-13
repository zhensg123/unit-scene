<template>
     <div v-html="md"></div>
    <h3>效果</h3>
  <div>
    <span class="unit-avatar unit-avatar--circle">
      <img :src="src" style="object-fit: fit" v-if="src" alt="" />
    </span>
  </div>
</template>
<script>
import Avatar from "../../../md/Avatar.md";

export default {
  props: {
    src: {
      type: String,
      default:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    },
  },
  name: "Avatar 头像",
  data() {
    return {
      md: Avatar,
    };
  },
};
</script>
<style lang="scss" scoped>
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
</style>