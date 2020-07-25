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
    res.sendFile(path.resolve("../../data_files-主生产计划/period.dat"))
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
    res.sendFile(path.resolve("../../data_files-主生产计划/matinfo.dat"))
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
    res.sendFile(path.resolve("../../data_files-主生产计划/prediction.dat"))
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
    res.sendFile(path.resolve("../../data_files-主生产计划/order.dat"))
})
app.all("/4", function (req, res, next) {
	// 跨域处理
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
app.get('/4',function(req,res){
    res.sendFile(path.resolve("../../data_files-主生产计划/ScheduledReceipts.dat"))
})
app.all("/5", function (req, res, next) {
	// 跨域处理
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
app.get('/5',function(req,res){
    res.sendFile(path.resolve("../../data_files-主生产计划/PrevInventory.dat"))
})

app.listen(4005,function(){
    console.log(4005)
})