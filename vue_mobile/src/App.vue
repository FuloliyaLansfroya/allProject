<template>
  <div id="app">
    <nav class="top">
      <div class="search">
        <!-- <button style="height:30px; border:none;margin-right:10px">
          <router-link to="/">主页</router-link>
        </button>-->
        <input type="text" class="search" />
        <button style="height:30px; border:none;margin-left:2px">搜索</button>
      </div>
      <div>
        <button v-if="flag" style="height:30px; border:none;">
          <router-link to="/login">登录</router-link>
        </button>
        <button v-else style="height:30px; border:none;">
          <router-link to="/minework">个人中心</router-link>
        </button>
      </div>
    </nav>

    <router-view v-if="isRouterAlive" />
    <div class="bottom">
      <button class="btns home">首页</button>
      <button class="btns paihang">排行榜</button>
      <button class="btns set">戒烟记录</button>
      <button class="btns mine">个人中心</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import querystring from "query-string";
export default {
  name: "App",
  provide() {
    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      flag: true,
      isRouterAlive: true
    };
  },
  beforeCreate() {
    axios
      .post("http://localhost:3001/login", {
        cookie: querystring.parse(document.cookie)
      })
      .then(response => {
        if (response.data == "ok") {
          this.flag = false;
        } else {
          this.flag = true;
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    reload() {
      this.isRouterAlive = false; //先关闭，
      this.$nextTick(function() {
        this.isRouterAlive = true; //再打开
      });
    }
  }
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: black;
}
.top {
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 255, 0.562);
  display: flex;
  justify-content: space-between;
  line-height: 40px;
}
.search {
  height: 30px;
  border: none;
  padding: 0;
  padding-left: 10px;
}

.bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 255, 0.562);
}
.btns {
  width: 25%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: none;
}
</style>
