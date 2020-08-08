<template>
  <div class="footer">
    <el-divider></el-divider>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="店长推荐" name="first">
        <el-row :gutter="20">
          <el-col
            style="marginBottom:5px;min-height: 400px;"
            :span="6"
            v-for="value in $store.state.footer"
            :key="value.id"
          >
            <Card :value="value" />
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="好评如潮" name="second">
        <el-row :gutter="20">
          <el-col
          style="marginBottom:5px;min-height: 400px;"
            :span="6"
            v-for="value in $store.state.footer"
            :key="value.id"
          >
            <Card :value="value" />
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="网红推荐" name="third">
        <el-row :gutter="20">
          <el-col
          style="marginBottom:5px;min-height: 400px;"
            :span="6"
            v-for="value in $store.state.footer"
            :key="value.id"
          >
            <Card :value="value" />
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="特价商品" name="fourth">
        <el-row :gutter="20">
          <el-col
          style="marginBottom:5px;min-height: 400px;"
            :span="6"
            v-for="value in $store.state.footer"
            :key="value.id"
          >
            <Card :value="value" />
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
    <el-divider></el-divider>
  </div>
</template>

<script>
import Card from "@/components/Card";
import axios from "axios";
import "@/mock/footer.js";
import store from "@/store/index";
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  store,
  components: {
    Card
  },

  beforeCreate() {
    axios({
      method: "get",
      url: "http://test.com/footer"
    }).then(res => {
      console.log(res);
      const { code, data } = res.data;
      if (code === "0") {
        this.$store.commit("changeFooter", data.list);
        console.log(this.$store.state.footer);
      }
    });
  },
  methods: {
    handleClick() {
      axios({
        method: "get",
        url: "http://test.com/footer"
      }).then(res => {
        // console.log(res);
        const { code, data } = res.data;
        if (code === "0") {
          this.$store.commit("changeFooter", data.list);
          // console.log(this.$store.state.footer);
        }
      });
    }
  }
};
</script>
<style>
</style>
