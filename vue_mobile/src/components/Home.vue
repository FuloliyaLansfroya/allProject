<template>
  <div class="hello">
      <div class="wrap" v-for="database in databases">
        <div class="title"><router-link  :to="{path:'/page',query: {id: database.id}}">{{database.title}}</router-link></div>
        <div class="bt">
          <span class="pinglun">评论：{{database.pinglun}}</span><span class="click">点赞：{{database.click}}</span>
          <button @click="()=>{zan(database.id,database.click)}">赞</button><hr>
        <!-- <button >已赞</button> -->
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import querystring from "query-string"
export default {
  name: 'HelloWorld',
  data () {
    return {
     databases:'',
     flag:true,
     click:[],
     pinglun:[]
    }
  },
  created(){
      axios.get('http://localhost:3001/')
      .then(response=>{
          console.log(response.data)
          this.databases=response.data

      }).catch(error=>{
          console.log(error)
      })
  },
  methods:{
    zan(id,click){
      this.flag=false
      click=click+1
      axios.post('http://localhost:3001/change',{
        id:id,
        click:click
      }).then(response=>{
        console.log(response.data)
      }).catch(error=>{
        console.log(error)
      })
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
