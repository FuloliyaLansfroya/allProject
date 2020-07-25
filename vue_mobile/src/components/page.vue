<template>
  <div class="hello">
    <h2>{{database.title}}</h2>
    <p>{{database.author}}</p>
    <div class="content">{{database.content}}</div>
    <hr />
    <div class="pnglun">
      <div>评论{{database.pinglun}}</div>
      <textarea v-model="comments" name id cols="80" rows="20"></textarea>
      <button @click="()=>{addcomment(database.pinglun,database.id,database.title,comments)}">提交</button>
      <p v-if="flag" style='color:red;'>评论不能为空</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import querystring from "query-string";
export default {
  inject: ["reload"],
  name: "HelloWorld",
  data() {
    return {
      database: "",
      id: this.$route.query.id,
      comments: "",
      flag:false
    };
  },
  created() {
    axios
      .post("http://localhost:3001/page", {
        id: this.id
      })
      .then(response => {
        console.log(response.data);
        this.database = response.data[0];
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    addcomment(pinglun, id, title, comments) {
      if (comments != "") {
        this.flag=false
        pinglun = pinglun + 1;
        axios
          .post("http://localhost:3001/comment", {
            c_id: pinglun,
            id: id,
            title,
            title,
            comment: comments
          })
          .then(response => {
            console.log(response);
            this.reload();
          })
          .catch(error => {
            console.log(error);
          });
      }else{
        this.flag=true
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
