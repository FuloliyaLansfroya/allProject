<template>
  <div class="hello">
    <table border="1">
      <tr>
        <td>时段</td>
        <td>初期</td>
        <td v-for="item  of period[0]">{{item}}</td>
      </tr>
      <tr>
        <td>预测量</td>
        <td v-for="item of prediction">{{item}}</td>
      </tr>
      <tr>
        <td>订单量</td>
        <td v-for="item of order">{{item}}</td>
      </tr>
      <tr>
        <td>毛需求量</td>
        <td v-model="m_need" v-for="item of m_need">{{item}}</td>
      </tr>
      <tr>
        <td>计划接收量</td>
        <td v-for="item of ScheduledReceipts">{{item}}</td>
      </tr>
      <tr>
        <td>预计可用库存</td>
        <td v-model="will_use_stock" v-for="item of will_use_stock">{{item}}</td>
      </tr>
      <tr>
        <td>计划产出量</td>
        <td v-model="responses" v-for="item of responses">{{item}}</td>
      </tr>
      <tr>
        <td>计划投入量</td>
        <td v-model="receive" v-for="item of receive">{{item}}</td>
      </tr>

      <tr>
        <td>净需求量</td>
        <td v-model="realneed" v-for="item of realneed">{{item}}</td>
      </tr>
      <tr>
        <td>可销售量</td>
        <td v-model="sale" v-for="item of sale">{{item}}</td>
      </tr>
    </table>
    <button @click="getReceive_response_realneed()">ddd</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "mehtod",
  data() {
    return {
      period: [],
      matinfo: [],
      prediction: [],
      order: [],
      ScheduledReceipts: [],
      PrevInventory: [],
      receive: [],
      responses: [],
      m_need: [],
      will_use_stock: [],
      realneed: [],
      sale: []
    };
  },
  created() {
    axios
      .get("http://localhost:4005/")
      .then(response => {
        var ss = response.data.split(" ");
        for (let i = 1; i < ss.length; i++) {
          this.period.push(parseInt(ss[i]));
        }
        this.period[0] = this.period[0] - 1;
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("http://localhost:4005/1")
      .then(response => {
        var ss = response.data.split(" ");
        for (let i = 1; i < ss.length; i++) {
          this.matinfo.push(parseInt(ss[i]));
        }
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("http://localhost:4005/2")
      .then(response => {
        var ss = response.data.split(" ");
        for (let i = 1; i < ss.length; i++) {
          this.prediction.push(parseInt(ss[i]));
          this.m_need.push(0);
          this.will_use_stock.push(0);
          this.realneed.push(0);
          this.sale.push(0);
          this.receive.push(0);
          this.responses.push(0);
        }
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("http://localhost:4005/3")
      .then(response => {
        var ss = response.data.split(" ");
        for (let i = 1; i < ss.length; i++) {
          this.order.push(parseInt(ss[i]));
        }
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("http://localhost:4005/4")
      .then(response => {
        var ss = response.data.split(" ");
        for (let i = 1; i < ss.length; i++) {
          this.ScheduledReceipts.push(parseInt(ss[i]));
        }
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("http://localhost:4005/5")
      .then(response => {
        var ss = response.data.split(" ");
        for (let i = 1; i < ss.length; i++) {
          this.will_use_stock[i - 1] = parseInt(ss[i]);
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    getOB: function() {
      console.log(JSON.parse(JSON.stringify(this.period)));
      var a = JSON.parse(JSON.stringify(this.period));
      console.log(a[0]);
    },
    getM_need: function() {
      var number = JSON.parse(JSON.stringify(this.period));
      var prediction_t = JSON.parse(JSON.stringify(this.prediction));
      var order_t = JSON.parse(JSON.stringify(this.order));
      var first = number[1];
      var second = number[2];
      var m_need_t = [];
      for (var i = 0; i < order_t.length; i++) {
        if (i <=first ) {
          m_need_t.push(order_t[i]);
        } else if (i > first && i <= second ) {
          m_need_t.push(Math.max(prediction_t[i], order_t[i]));
        } else if (i > second ) {
          m_need_t.push(prediction_t[i]);
        }
      }
      this.m_need = m_need_t;
    },
    getReceive_response_realneed() {
      this.getM_need();
      var ScheduledReceipts_t = JSON.parse(
        JSON.stringify(this.ScheduledReceipts)
      );
      var m_need_t = JSON.parse(JSON.stringify(this.m_need));
      var matinfo_t = JSON.parse(JSON.stringify(this.matinfo));
      var safeNumber = matinfo_t[1];
      for (var i = 1; i < ScheduledReceipts_t.length; i++) {
        var will_use_stock_t = JSON.parse(JSON.stringify(this.will_use_stock));
        this.realneed[i] =
          m_need_t[i] -
          will_use_stock_t[i - 1] -
          ScheduledReceipts_t[i] +
          safeNumber;
        var realneed_t = JSON.parse(JSON.stringify(this.realneed));
        if (realneed_t[i] < 10) {
          this.responses[i] = 10;
        } else {
          this.responses[i] = realneed_t[i] - (realneed_t[i] % 10) + 10;
        }
        var responses_t = JSON.parse(JSON.stringify(this.responses));
        this.will_use_stock[i] =
          will_use_stock_t[i - 1] +
          ScheduledReceipts_t[i] -
          m_need_t[i] +
          responses_t[i];
        if (i == 1) {
          this.sale[i] =
            responses_t[i] +
            ScheduledReceipts_t[i] -
            m_need_t[i] +
            will_use_stock_t[0];
        } else {
          this.sale[i] = responses_t[i] + ScheduledReceipts_t[i] - m_need_t[i];
        }
      }
      var responses_t = JSON.parse(JSON.stringify(this.responses));
      for (var i = 0; i < ScheduledReceipts_t.length - 1; i++) {
        this.receive[i] = responses_t[i + 1];
      }
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
