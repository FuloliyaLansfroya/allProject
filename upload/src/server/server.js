var express = require("express");
var app = express();
var bodyParser = require("body-parser");
// app.all("/", function (req, res, next) {
// 	// 跨域处理
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
// 	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
// 	res.header("Access-Control-Allow-Credentials", "true");
// 	res.header("X-Powered-By", ' 3.2.1');
// 	res.header("Content-Type", "application/json;charset=utf-8");
// 	next();
// })

app.post('/',bodyParser.json(),(req,res)=>{
	console.log(req);
	res.send({
		code:"0",
	})
})

app.get('/',(req,res)=>{
    res.send('yes');
})


app.listen(3221,()=>{
    console.log(3221);
})