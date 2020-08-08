<template>
  <div id="aside">
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      :collapse="$store.state.isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>服装</span>
        </template>
          <el-submenu index="1-1">
          <template slot="title">春季</template>
          <el-menu-item index="1-1-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="1-2">
          <template slot="title">夏季</template>
          <el-menu-item index="1-2-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="1-3">
          <template slot="title">秋季</template>
          <el-menu-item index="1-3-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="1-4">
          <template slot="title">冬季</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">食品</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">生活</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">其他</span>
      </el-menu-item>
       <el-menu-item style="textAlign:center" @click="$store.commit('change')">
        <i v-if="!$store.state.isCollapse" class="el-icon-arrow-left"></i>
        <i v-else class="el-icon-arrow-right"></i>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import store from '@/store/index';
import { mapState,mapMutations } from 'vuex';
export default {
  name: "",
  store,
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-vertical-demo.el-menu{
    width: 201px;
}
.el-menu-vertical-demo.el-menu--collapse.el-menu{
    width: 64px;
}
</style>
