<template>
  <div class="main">
    <el-row :gutter="20">
      <el-col :span="18">
        <div>
          <Carousel />
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <el-link type="primary" href="/shop">风衣</el-link>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <el-link type="primary">卫衣</el-link>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <el-link type="primary">貂皮</el-link>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <el-link type="primary">网红推荐</el-link>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <el-link type="primary">店长推荐</el-link>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <el-link type="primary">好评如潮</el-link>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <el-link type="primary">交易市场</el-link>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <el-link type="primary">特价商品</el-link>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <el-link type="primary">安心旅游</el-link>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <Footer />
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import Card from "@/components/Card";
import Footer from "@/templates/Footer";
export default {
  name: "",
  components: {
    Carousel,
    Card,
    Footer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width: 100%;
  background-color: white;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce8;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 38px;
  text-align: center;
  line-height: 38px;
  font-size: 29px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
