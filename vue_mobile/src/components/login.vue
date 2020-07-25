<template>

  <div class="login">  
        <div class="wrap">
            <div class="tag">
                <input v-model="user" class="input" type="text" name="user" placeholder="用户名">
                <div class="mag"></div>
                <input v-model="password" class="input" type="password" name="password" placeholder="密码">
            </div>
            <div class="mab">
              <p class="err" v-if="isLogin">你输入的用户名或密码错误!</p><br>
            </div>
            <div class="tabe">
                <span>
                    <button type="submit" name="btn" id="btn" value="login" @click="log(user,password)">登录</button>
                    <!-- <button type="submit" name="btn" id="btn_s" value="register">注册</button> -->

                </span>
            </div>
        </div>
  </div>
</template>

<script>
import axios from "axios"
import router from '@/router'
import querystring from "query-string"
export default {
  name: "login",
  data(){
    return{
      user:"",
      password:"",
      isLogin:false
    }
  },
   methods:{
    log:function(user,password){
      this.user=user
      this.password=password
      // console.log(user,password,this.user,this.password,this.isLogin)
      axios.post("http://localhost:3001/login",{
      user:this.user,
      password:this.password,
      cookie:querystring.parse(document.cookie)
     })
      .then(response=>{
         console.log(response,document.cookie)
        if(response.data[0].password==this.password){
         window.location='/'
         this.isLogin=false
        }
      
      })
      .catch(error=> {
        this.isLogin=true;
        console.log(error,this.isLogin);
        
      });
      
    }
  },
  beforeCreate(){
     axios.post("http://localhost:3001/login",{
        cookie:querystring.parse(document.cookie)
     })
      .then(response=>{
        if(response.data=="ok"){
          window.location='/'
        }
      })
      .catch(error=> {
        console.log(error);
      });
  }
  
};

</script>

<style scoped>

.login {
  width: 100%;
  height:80%;
  display: flex;
  justify-content: center;
  align-items: center;
 
}

.wrap {
  background-color: rgba(255, 255, 255, 0.767);
  width: 450px;
  height: 299px;
  padding-top: 20px;

  border-bottom: solid rgb(221, 217, 217) 0px;
 
}

.wrap .tag {
  text-align: center;
  margin-top: 35px;
}

.wrap .tag .input {
  width: 388px;
  height: 18px;
  padding: 10px;
  border: solid rgb(221, 221, 221) 1px;
}

.wrap .tag .mag {
  width: 410px;
  height: 20px;
  margin: 6px 0px;
}

.wrap .mab {
  margin-top: 23px;
  margin-bottom: 12px;
}

.wrap .mab .in {
  margin: 0px;
}

.wrap .mab .data {
  font-size: 12px;
  color: rgb(113, 113, 113);
}

.wrap .mab .pata {
  margin-left: 10px;
  font-size: 12px;
  color: rgb(187, 187, 187);
  margin-right: 54px;
}

.wrap .mab .hf {
  font-size: 12px;
  color: rgb(0, 161, 214);
  text-decoration: none;
}

.wrap .mab #pd {
  margin: 0px;
  margin-left: 20px;
}

.wrap .tabe #btn {
  width: 184px;
  height: 36px;
  background-color: rgb(3, 129, 170);
  border: solid rgb(3, 129, 170) 1px;
  color: rgb(255, 255, 255);
  font-size: 14px;
  margin-right: 34px;
}

.wrap .tabe #btn_s {
  width: 184px;
  height: 36px;
  background-color: white;
  border: solid rgb(204, 204, 204) 1px;
  color: rgb(85, 85, 85);
  font-size: 14px;
}

.wrap .tabe {
  text-align: center;
}
.err{
  color: red;
  font-size:12px;
  margin: 0;
  margin-left: 20px;
}
</style>

