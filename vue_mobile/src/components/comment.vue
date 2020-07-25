<template>
  <div class="hello">
    <div class="comment" v-for="comment in comments">
      <div class="title">{{comment.title}}</div>
      <div class="content">{{comment.content}}</div>
      <button @click="()=>{pass(comment.c_id,1)}">通过</button>
      <button @click="()=>{nopass(comment.c_id,0)}">拒绝</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import querystring from "query-string";
export default {
  inject: ["reload"],
  name: "HelloWorld",
  data() {
    return {
      comments: ""
    };
  },
  created() {
    axios
      .get("http://localhost:3001/comment")
      .then(response => {
        this.comments = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    pass(c_id, flag) {
      axios
        .post("http://localhost:3001/pacomment", {
          c_id: c_id,
          flag: flag
        })
        .then(response => {
          this.reload();
        })
        .catch(error => {
          console.log(error);
        });
    },
    nopass(c_id, flag) {
      axios
        .post("http://localhost:3001/pacomment", {
          c_id: c_id,
          flag: flag
        })
        .then(response => {
          this.reload();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
