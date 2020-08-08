<template>
  <div class="shop">
    <el-divider></el-divider>
    <el-page-header @back="goBack" content="详情页面" />
    <el-divider></el-divider>
    <Carousel />
    <el-divider></el-divider>
    <div class="wrap">
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
        >全选</el-checkbox
      >
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group
        v-model="checkedCities"
        @change="handleCheckedCitiesChange"
      >
        <el-checkbox v-for="city in cityList" :label="city" :key="city.id">{{
          city.title
        }}</el-checkbox>
      </el-checkbox-group>
      <div style="margin: 15px 0;"></div>
    </div>
    <el-divider></el-divider>
    <el-row :gutter="20">
      <el-col
        style="marginBottom:15px;"
        :span="6"
        v-for="value in shopList"
        :key="value.id"
      >
        <el-link type="primary" href="/details"><Card :value="value" /></el-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import Card from "@/components/Card";
import "@/mock/shop.jsx";
import axios from'axios';
import store from "@/store/index";
import { createHashHistory } from "history";

const history = createHashHistory();

export default {
  name: "HelloWorld",
  components: {
    Carousel,
    Card
  },
  data() {
    return {
      checkAll: false,
      checkedCities: [],
      isIndeterminate: false,
      shopList:[],
      cityList:[],
    };
  },

  beforeCreate() {
    axios({
      method: "get",
      url: "http://test.com/shop"
    }).then(res => {
      console.log(res);
      const { code, data } = res.data;
      if (code === "0") {
        this.shopList=data.list;
        this.cityList=data.city;
      }
    });
  },

  methods: {
    goBack() {
      console.log("go back");
      history.go(-1);
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
  background-color: rgb(165, 208, 233);
}
.shop {
  background-color: white;
}
</style>
