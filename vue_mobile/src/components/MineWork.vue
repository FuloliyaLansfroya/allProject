<template>
  <div class="minework">
      <router-link to="/comment">评论</router-link>
    <div class="page">
      <input v-model="title" type="text" class="title" />
      <hr />
      <input v-model="author" type="text" class="author" />
      <hr />
      <textarea v-model="content" name id cols="30" rows="10" class="content"></textarea>
      <hr />
      <button @click="()=>{addpage(length,title,author,content)}">提交</button>
      <p v-if="flag" style="color:red">输入不能为空</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import querystring from "query-string";
export default {
  name: "HelloWorld",
  data() {
    return {
      database: "",
      length: 0,
      title: "",
      author: "",
      content: "",
      flag:false
    };
  }, beforeCreate(){
     axios.post("http://localhost:3001/login",{
        cookie:querystring.parse(document.cookie)
     })
      .then(response=>{
        if(response.data=="ok"){
         
        }else{
            router.push({ path: "/login" });
        } 
      })
      .catch(error=> {
        console.log(error);
      });
  },
  created() {
    axios
      .get("http://localhost:3001/")
      .then(response => {
        this.length = response.data.length;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    addpage(id, title, author, content) {
      if (title != "" || author != "" || content != "") {
          this.flag=false
        id = id + 1;
        this.length = id;
        axios
          .post("http://localhost:3001/", {
            id: id,
            title: title,
            author: author,
            content: content
          })
          .then(response => {
            console.log(response.data);
            router.push({ path: "/" });
          })
          .catch(error => {
            console.log(error);
          });
      }
      else{
          this.flag=true
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.minework {
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.page {
  width: 80%;
  height: 80%;
}
</style>
