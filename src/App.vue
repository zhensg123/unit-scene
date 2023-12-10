<template>
  <div class="left-fixed-menu">
    <el-menu
      @open="handleOpen"
      @close="handleClose"
      router
      :default-openeds="[1, 2, 3]"
      :default-active="$route.path"
    >
      <el-sub-menu :index="1">
        <template #title>
          <span>展示(show)</span>
        </template>
        <el-sub-menu index="1-1">
          <template #title>布局</template>
          <el-menu-item
            v-for="item in showLayoutViewsRoutes"
            :key="item.name"
            :index="item.path"
          >
            <span :title="item.name">{{ item.name }}</span>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="1-1">
          <template #title>导航</template>
          <el-menu-item
            v-for="item in showNavigationViewsRoutes"
            :key="item.name"
            :index="item.path"
          >
            <span :title="item.name">{{ item.name }}</span>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="1-1">
          <template #title>数据展示</template>
          <el-menu-item
            v-for="item in showDatashowViewsRoutes"
            :key="item.name"
            :index="item.path"
          >
            <span :title="item.name">{{ item.name }}</span>
          </el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-sub-menu :index="2">
        <template #title>
          <span>交互(interface)</span>
        </template>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-sub-menu :index="3">
        <template #title>
          <span>反馈(feedback)</span>
        </template>
        <el-menu-item index="3-4-1">Alert</el-menu-item>
        <el-menu-item index="3-4-1">Dialog</el-menu-item>
        <el-menu-item index="3-4-1">Drawer</el-menu-item>
        <el-menu-item index="3-4-1">Loading</el-menu-item>
        <el-menu-item index="3-4-1">Notification</el-menu-item>
        <el-menu-item index="3-4-1">Popconfirm</el-menu-item>
        <el-menu-item index="3-4-1">Popover</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
  <div class="right-content">
    <router-view />
  </div>
</template>

<script>
import {
  showLayoutViewsRoutes,
  showDatashowViewsRoutes,
  showNavigationViewsRoutes,
} from "./router";
console.log(showLayoutViewsRoutes, "showLayoutViewsRoutes");

// import {
//   Document,
//   Menu as IconMenu,
//   Location,
//   Setting,
// } from "@element-plus/icons-vue";
export default {
  // components: {
  //   Document,
  //   IconMenu,
  //   Location,
  //   Setting,
  // },
  data() {
    return {
      showLayoutViewsRoutes,
      showDatashowViewsRoutes,
      showNavigationViewsRoutes,
    };
  },
  watch: {
    '$route.path'(){
      console.log(333)
      this.$nextTick(()=>{
        this.copyCode()
      })
    }
  }, 
  methods: {
    handleOpen() {},
    handleClose() {},
    copyCode() {
      document.querySelectorAll(".copy-btn").forEach((button) => {
        button.addEventListener("click", (event) => {
          const code = button.previousElementSibling.textContent;
          const textarea = document.createElement("textarea");
          textarea.textContent = code;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
        });
      });
    },
  },
  mounted(){
    this.$nextTick(()=>{
      this.copyCode()
    })
  }
};
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.left-fixed-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  overflow: auto;
}

.right-content {
  margin-left: 310px;
  margin-bottom: 200px;
}

:deep(.el-menu-item .menu-name) {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
