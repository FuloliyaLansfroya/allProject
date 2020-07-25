var express = require("express");
var path=require('path')
var app = express();
app.all("/", function (req, res, next) {
	// 跨域处理
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
app.get('/',function(req,res){
    res.sendFile(path.resolve("../../data_files-能力需求计划/MRPConfirmed.txt"))
})
app.all("/1", function (req, res, next) {
	// 跨域处理
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
app.get('/1',function(req,res){
    res.sendFile(path.resolve("../../data_files-能力需求计划/MRPPredicted.txt"))
})
app.all("/2", function (req, res, next) {
	// 跨域处理
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
app.get('/2',function(req,res){
    res.sendFile(path.resolve("../../data_files-能力需求计划/Routing.txt"))
})
app.all("/3", function (req, res, next) {
	// 跨域处理
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
app.get('/3',function(req,res){
    res.sendFile(path.resolve("../../data_files-能力需求计划/WCRatedCapacity.txt"))
})

app.listen(4007,function(){
    console.log(4007)
})