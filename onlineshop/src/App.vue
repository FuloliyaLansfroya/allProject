<template>
  <div id="app">
    <el-container>
      <el-header><Header/></el-header>
      <el-container>
        <el-aside width="auto"><Aside/></el-aside>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/header'
import Aside from '@/components/aside'
export default {
  name: "App",
  components:{
    Header,
    Aside,
  }
};
</script>

<style>
body,
html {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
}
.el-container {
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  padding: 10px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
a {
  text-decoration: none;
}
</style>
