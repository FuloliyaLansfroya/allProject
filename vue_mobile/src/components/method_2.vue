<template>
  <div class="hello">
    <!-- <table border="1">
      <tr>已确认的MRP</tr>
      <tr>
        <td>周份</td>
        <td v-for="item of lengthed">{{item}}</td>
      </tr>
      <tr>
        <td>X</td>
        <td v-model="MRPConfirmedX" v-for="item of MRPConfirmedX">{{item}}</td>
      </tr>
      <tr>
        <td>Y</td>
        <td v-model="MRPConfirmedY" v-for="item of MRPConfirmedY">{{item}}</td>
      </tr>
    </table>
    <table border="1">
      <tr>计划的MRP</tr>
      <tr>
        <td>周份</td>
        <td v-for="item of lengthed">{{item}}</td>
      </tr>
      <tr>
        <td>X</td>
        <td v-model="MRPPredictedX" v-for="item of MRPPredictedX">{{item}}</td>
      </tr>
      <tr>
        <td>Y</td>
        <td v-model="MRPPredictedY" v-for="item of MRPPredictedY">{{item}}</td>
      </tr>
    </table>
    <table border="1">
      <tr>
        <td>工作中心</td>
        <td>物品</td>
        <td>能力类别</td>
        <td>能力数据</td>
        <td>能力单位</td>
      </tr>
      <tr>
        <td v-model="RoutingX" v-for="(item,index) in RoutingX[0]" v-if="index==2">{{item}}</td>
        <td>X</td>
        <td>工时</td>
        <td v-model="RoutingX" v-for="(item,index) in RoutingX[0]" v-if="index==3">{{item}}</td>
        <td>小时</td>
      </tr>
      <tr>
        <td v-model="RoutingX" v-for="(item,index) in RoutingX[1]" v-if="index==2">{{item}}</td>
        <td>X</td>
        <td>工时</td>
        <td v-model="RoutingX" v-for="(item,index) in RoutingX[1]" v-if="index==3">{{item}}</td>
        <td>小时</td>
      </tr>
      <tr>
        <td v-model="RoutingY" v-for="(item,index) in RoutingY[0]" v-if="index==2">{{item}}</td>
        <td>Y</td>
        <td>工时</td>
        <td v-model="RoutingY" v-for="(item,index) in RoutingY[0]" v-if="index==3">{{item}}</td>
        <td>小时</td>
      </tr>
    </table>
    <table border="1">
      <tr>
        <td v-model="RoutingX" v-for="(item,index) in RoutingX[0]" v-if="index==2">工作中心:{{item}}</td>
      </tr>
      <tr>
        <td>能力数据:{{WCRatedCapacity01[0]}}</td>
      </tr>
      <tr>
        <td>能力单位:小时/周</td>
      </tr>
    </table>
    <br />
    <table border="1">
      <tr>
        <td v-model="RoutingY" v-for="(item,index) in RoutingY[0]" v-if="index==2">工作中心:{{item}}</td>
      </tr>
      <tr>
        <td>能力数据:{{WCRatedCapacityY02[0]}}</td>
      </tr>
      <tr>
        <td>能力单位:小时/周</td>
      </tr>
    </table> -->
    <table border="1">
      <tr>WC01的计算结果</tr>
      <tr>
        <td>周份</td>
        <td v-for="item of lengthed">{{item}}</td>
      </tr>
      <tr>
        <td>已确认MRP负荷</td>
        <td v-model="MRPedX" v-for='item of MRPedX'>{{item}}</td>
      </tr>
      <tr>
        <td>计划MRP负荷</td>
        <td v-model="MRPnowX" v-for='item of MRPnowX'>{{item}}</td>
      </tr>
      <tr>
        <td>总负荷</td>
        <td v-model="MrpX" v-for='item of MrpX'>{{item}}</td>
      </tr>
      <tr>
        <td>平均能力</td>
        <td v-model="averAbilityX" v-for='item of averAbilityX'>{{item}}</td>
      </tr>
      <tr>
        <td>余/欠能力</td>
        <td v-model="addOrSubAbilityX" v-for='item of addOrSubAbilityX'>{{item}}</td>
      </tr>
      <tr>
        <td>累计余/欠能力</td>
        <td v-model="addOrSubAbility_maxX" v-for='item of addOrSubAbility_maxX'>{{item}}</td>
      </tr>
    </table>
     <table border="1">
       <tr>WC02的计算结果</tr>
      <tr>
        <td>周份</td>
        <td v-for="item of lengthed">{{item}}</td>
      </tr>
      <tr>
        <td>已确认MRP负荷</td>
        <td v-model="MRPedY" v-for='item of MRPedY'>{{item}}</td>
      </tr>
      <tr>
        <td>计划MRP负荷</td>
        <td v-model="MRPnowY" v-for='item of MRPnowY'>{{item}}</td>
      </tr>
      <tr>
        <td>总负荷</td>
        <td v-model="MrpY" v-for='item of MrpY'>{{item}}</td>
      </tr>
      <tr>
        <td>平均能力</td>
        <td v-model="averAbilityY" v-for='item of averAbilityY'>{{item}}</td>
      </tr>
      <tr>
        <td>余/欠能力</td>
        <td v-model="addOrSubAbilityY" v-for='item of addOrSubAbilityY'>{{item}}</td>
      </tr>
      <tr>
        <td>累计余/欠能力</td>
        <td v-model="addOrSubAbility_maxY" v-for='item of addOrSubAbility_maxY'>{{item}}</td>
      </tr>
    </table>
    <button @click="getAll()">计算</button>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "m_2",
  data() {
    return {
      lengthed: 0,
      MRPConfirmedX: [],
      MRPConfirmedY: [],
      MRPPredictedX: [],
      MRPPredictedY: [],
      RoutingX: [],
      RoutingY: [],
      WCRatedCapacity01: [],
      WCRatedCapacityY02: [],
      MrpX: [],
      MrpY: [],
      MRPedX: [],
      MRPedY: [],
      MRPnowX: [],
      MRPnowY: [],
      averAbilityX: [],
      averAbilityY: [],
      addOrSubAbilityX: [],
      addOrSubAbilityY: [],
      addOrSubAbility_maxX: [],
      addOrSubAbility_maxY: []
    };
  },
  created() {
    axios
      .get("http://localhost:4007/")
      .then(response => {
        var ss = response.data.split(" ");
        var a = [];
        var b = [];

        for (var i = 1; i < ss.length; i++) {
          a.push(parseInt(ss[i]));
          b.push(parseInt(ss[i]));
        }
        if (ss.length % 2 == 1) {
          a[ss.length - 1] = 0;
          b[ss.length - 1] = 0;
        }
        
        this.MRPConfirmedX = a.splice(0, 6);
        this.MRPConfirmedY = b.splice(6, 6);
       
        this.lengthed = a.splice(0, 6).length;
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("http://localhost:4007/1")
      .then(response => {
        var ss = response.data.split(" ");
        var a = [];
        var b = [];
        for (var i = 1; i < ss.length; i++) {
          a.push(parseInt(ss[i]));
          b.push(parseInt(ss[i]));
        }
        if (ss.length % 2 == 1) {
          a[ss.length - 1] = 0;
          b[ss.length - 1] = 0;
        }
        this.MRPPredictedX = a.splice(0, 6);
        this.MRPPredictedY = b.splice(6, 6);
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("http://localhost:4007/2")
      .then(response => {
        var a = [];
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i] === "\n") {
            a.push(" ");
          } else {
            a.push(response.data[i]);
          }
        }

        var ss = a.toString().split(",");
        var newStr = ss.join("");
        ss = newStr.split("Y");
        var s1 = [];
        var s2 = [];
        var s3 = [];
        var a = ss[0].split("X");
        var c = a[1].split(" ");
        c = c.splice(1, 4);
        var d = a[2].split(" ");
        d = d.splice(1, 4);
        var b = ss[1].split(" ");
        b = b.splice(1, 4);
        for (var i = 0; i < c.length; i++) {
          if (c[i] === "WC01" && d[i] === "WC02") {
            s1.push(c[i]);
            s2.push(d[i]);
            s3.push(b[i]);
          } else {
            s1.push(parseInt(c[i]));
            s2.push(parseInt(d[i]));
            s3.push(parseInt(b[i]));
          }
        }
        this.RoutingX.push(s1);
        this.RoutingX.push(s2);
        this.RoutingY.push(s3);
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("http://localhost:4007/3")
      .then(response => {
        var a = [];
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i] === "\n") {
            a.push(" ");
          } else {
            a.push(response.data[i]);
          }
        }

        var ss = a.toString().split(",");
        var newStr = ss.join("");
        ss = newStr.split(" ");
        this.WCRatedCapacity01.push(parseInt(ss[1]));
        this.WCRatedCapacityY02.push(parseInt(ss[3]));
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods:{
    getWCO1(){
      var MRPConfirmedX_t=JSON.parse(JSON.stringify(this.MRPConfirmedX))
      var MRPConfirmedY_t=JSON.parse(JSON.stringify(this.MRPConfirmedY))
      var MRPPredictedX_t=JSON.parse(JSON.stringify(this.MRPPredictedX))
       var MRPPredictedY_t=JSON.parse(JSON.stringify(this.MRPPredictedY))
      var RoutingX_t=JSON.parse(JSON.stringify(this.RoutingX))
      var RoutingY_t=JSON.parse(JSON.stringify(this.RoutingY))
      var WCRatedCapacity01_t=JSON.parse(JSON.stringify(this.WCRatedCapacity01))
      var lengthed=JSON.parse(JSON.stringify(this.lengthed))
      var lengthed=JSON.parse(JSON.stringify(this.lengthed))
      var rxt=RoutingX_t[0][3]
      var ryt=RoutingY_t[0][3]
      var wrct=WCRatedCapacity01_t[0]
      for( var i=0;i<lengthed;i++){
        this.MRPedX.push(MRPConfirmedX_t[i]*rxt+MRPConfirmedY_t[i]*ryt)
        this.MRPnowX.push(MRPPredictedX_t[i]*rxt+MRPPredictedY_t[i]*ryt)
        this.MrpX.push(MRPConfirmedX_t[i]*rxt+MRPConfirmedY_t[i]*ryt+MRPPredictedX_t[i]*rxt+MRPPredictedY_t[i]*ryt)
        this.averAbilityX.push(wrct)
        this.addOrSubAbilityX.push(-(MRPConfirmedX_t[i]*rxt+MRPConfirmedY_t[i]*ryt+MRPPredictedX_t[i]*rxt+MRPPredictedY_t[i]*ryt)+wrct)
        if(i==0){
         this.addOrSubAbility_maxX.push(-(MRPConfirmedX_t[i]*rxt+MRPConfirmedY_t[i]*ryt+MRPPredictedX_t[i]*rxt+MRPPredictedY_t[i]*ryt)+wrct)
        }else{
          var addOrSubAbility_maxX_t=JSON.parse(JSON.stringify(this.addOrSubAbility_maxX))
           this.addOrSubAbility_maxX.push(-(MRPConfirmedX_t[i]*rxt+MRPConfirmedY_t[i]*ryt+MRPPredictedX_t[i]*rxt+
           MRPPredictedY_t[i]*ryt)+wrct+addOrSubAbility_maxX_t[i-1])
        }
      }
      
    },
    getWCO2(){
       var MRPConfirmedX_t=JSON.parse(JSON.stringify(this.MRPConfirmedX))
    
      var MRPPredictedX_t=JSON.parse(JSON.stringify(this.MRPPredictedX))
      var RoutingX_t=JSON.parse(JSON.stringify(this.RoutingX))
      var WCRatedCapacity02_t=JSON.parse(JSON.stringify(this.WCRatedCapacityY02))
      var lengthed=JSON.parse(JSON.stringify(this.lengthed))
      var rxt=RoutingX_t[1][3]
      var wrct=WCRatedCapacity02_t[0]
      for( var i=0;i<lengthed;i++){
        this.MRPedY.push(MRPConfirmedX_t[i]*rxt)
        this.MRPnowY.push(MRPPredictedX_t[i]*rxt)
        this.MrpY.push(MRPConfirmedX_t[i]*rxt+MRPPredictedX_t[i]*rxt)
        this.averAbilityY.push(wrct)
        this.addOrSubAbilityY.push(-MRPConfirmedX_t[i]*rxt-MRPPredictedX_t[i]*rxt+wrct)
        if(i==0){
         this.addOrSubAbility_maxY.push(-MRPConfirmedX_t[i]*rxt-MRPPredictedX_t[i]*rxt+wrct)
        }else{
          var addOrSubAbility_maxY_t=JSON.parse(JSON.stringify(this.addOrSubAbility_maxY))
           this.addOrSubAbility_maxY.push(-MRPConfirmedX_t[i]*rxt-MRPPredictedX_t[i]*rxt+wrct+addOrSubAbility_maxY_t[i-1])
        }
      }
    },getAll(){
      this.getWCO1()
      this.getWCO2()
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table{
  float: left;
}
</style>
