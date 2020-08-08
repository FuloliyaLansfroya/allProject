<template>
  <div id="header">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1"><el-link href="/">首页</el-link> </el-menu-item>
      <el-menu-item
        ><el-input
          placeholder="请输入内容"
          v-model="input3"
          class="input-with-select"
        >
          <el-button slot="append" icon="el-icon-search"></el-button> </el-input
      ></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      activeIndex2: "1",
      input3:'',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped></style>
