<template>
  <div class="left-fixed-menu">
    <el-menu
      @open="handleOpen"
      @close="handleClose"
      router
      :default-openeds="[1,2,3]"
    >
      <el-sub-menu :index="1">
        <template #title>
          <span>展示(show)</span>
        </template>
        <el-sub-menu index="1-1">
          <template #title>布局</template>
          <el-menu-item index="/show/layout/center">垂直居中</el-menu-item>
          <el-menu-item index="1-2-2">
            <div class="menu-name">
              <AutoTooltip isShowTooltip content="两侧宽度固定中间自适应宽度布局"></AutoTooltip>
            </div>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="1-1">
          <template #title>导航</template>
          <el-menu-item index="1-1-1">面包屑导航</el-menu-item>
          <el-menu-item index="1-2-2">Page Header 页头</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="1-1">
          <template #title>数据展示</template>
          <el-menu-item index="1-1-1">垂直居中</el-menu-item>
          <el-menu-item index="1-2-2">垂直居中</el-menu-item>
          <el-menu-item index="1-2-3">垂直居中</el-menu-item>
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
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
export default {
  components: {
    Document,
    IconMenu,
    Location,
    Setting,
  },
  data() {
    return {};
  },
  methods: {
    handleOpen() {},
    handleClose() {},
  },
};
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.left-fixed-menu {
  position: fixed;
  top:0;
  bottom: 0;
  left:0;
  width:200px;
}
.right-content {
  margin-left: 210px;
}
 :deep(.el-menu-item .menu-name) {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
