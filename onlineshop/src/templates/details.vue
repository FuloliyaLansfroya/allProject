<template>
  <div class="details">
    <el-divider></el-divider>
    <el-page-header @back="goBack" content="详情页面" />
    <el-divider></el-divider>
    <el-row :gutter="20">
      <el-col :span="14">
        <div class="block">
          <img
            class="image"
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            alt=""
          />
        </div>
      </el-col>
      <el-col :span="10">
        <el-collapse
          v-model="activeNames"
          @change="handleChange"
          :accordion="true"
        >
          <el-collapse-item title="介绍 introduction" name="1">
          </el-collapse-item>
          <el-collapse-item title="相关信息 message" name="2">
          </el-collapse-item>
          <el-collapse-item title="产品情况 production" name="3">
          </el-collapse-item>
          <el-collapse-item title="链接 link" name="4"> </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { createHashHistory } from "history";
const history = createHashHistory();
export default {
  name: "",
  data() {
    return {
      activeNames: ["1"]
    };
  },
  methods: {
    goBack() {
      console.log("go back");
      history.go(-1);
    },
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped>
.details {
  background-color: white;
}
.block {
  height: 500px;
  overflow: hidden;
}
.image {
  width: 100%;
  display: inline-block;
}
</style>
