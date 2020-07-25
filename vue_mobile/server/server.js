var express = require("express");
var app = express();
var path =require("path")
var sqlFn = require("./mysql");
var sqlLogin = require("./mysql-login");
var sqlCom = require("./mysql_comment").sqlCom
var sqlCom2 = require("./mysql_comment").sqlCom2
var config = require("./config")
var bodyParser = require("body-parser");
const cookieparser = require("cookie-parser")
const cookies = require("./cookie").cookieControl
var cookiess = new cookies()
const urlencoded = bodyParser.urlencoded({ extended: false })
app.use(cookieparser())
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

app.get("/", function (req, res) {

	let sql1 = "select * from passage";
	sqlFn(sql1, null, function (data) {
		
		res.send(data)
	})

})
app.post("/", bodyParser.json(), function (req, res) {
	console.log(req.body)
	let sql0 = `insert into  passage(id,title,content,author,click,pinglun)
					values
				(${req.body.id},"${req.body.title}","${req.body.content}","${req.body.author}",0,0);`
	sqlFn(sql0, null, function (data) {
		res.send(data)
	})
})

app.all("/login", function (req, res, next) {
	// 跨域处理
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
app.post("/login", bodyParser.json(), function (req, res) {

	// console.log(req.body,req.cookies.token,cookiess.checkToken(req.body.cookie.token))
	if (cookiess.checkToken(req.body.cookie.token)) {
		// console.log("ok")
		res.send("ok")
	}
	else {
		let sql2 = `select * from login where password ="${req.body.password}";`;
		// console.log(sql2)
		sqlLogin(sql2, req.body.password, function (data) {

			data.forEach(element => {
				if (element.password == req.body.password)
					res.cookie("token", cookiess.getToken())
			});
			// if(data.password==req.body.password)
			//  res.cookie("token", cookiess.getToken())

			// console.log(data)
			res.send(data)
		})
	}
	// var sql2=`select * from login where password ="${req.body.password}";` ;
	// console.log(sql2)
	// sqlLogin(sql2, req.body.password, function (data) {
	// 	 res.cookie("token", cookiess.getToken())

	// 	console.log(data)
	// 	res.send(data)
	// })
})
app.all("/page", function (req, res, next) {
	// 跨域处理
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
app.post("/page", bodyParser.json(), function (req, res) {
	//  console.log(req.body)
	let sql1 = "select * from passage where id =" + req.body.id;
	sqlFn(sql1, null, function (data) {
		// console.log(data)
		res.send(data)
	})
})
app.all("/comment", function (req, res, next) {
	// 跨域处理
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
app.post("/comment", bodyParser.json(), function (req, res) {
	 console.log(req.body)
	let sql3 = `insert into  coe(c_id,id,title,content,flag)
					values
				(${req.body.c_id},${req.body.id},"${req.body.title}","${req.body.comment}",0);`
	sqlCom(sql3, null, function (data1) {
		sqlCom2(sql3, null, function (data2) {
			res.send("ok")
		})
	})

})
app.get("/comment", function (req, res) {
	let sql4 = "select * from coe";
	sqlCom(sql4, null, function (data) {
		res.send(data)
	})
})
app.all("/pacomment", function (req, res, next) {
	// 跨域处理
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

app.post("/pacomment", bodyParser.json(), function (req, res) {
	// console.log(req.body.c_id)
	let sql5 = `delete  from coe where c_id=${req.body.c_id}`
	sqlCom(sql5, null, function (data1) {
		console.log("ok")
	})
	if (req.body.flag == 0) {
		sqlCom2(sql5, null, function (data2) {
			res.send("ok")
		})
	}
	else {
		let sql6 = `update coe set flag=${req.body.flag} where c_id=${req.body.c_id}`
		sqlCom2(sql6, null, function (data) {
			res.send(data)
		})
	}

})
app.all("/commented", function (req, res, next) {
	// 跨域处理
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
app.post("/commented", bodyParser.json(), function (req, res) {
	let sql7 = `select * from coe where id=${req.body.id} and flag=1`;
	sqlCom2(sql7, null, function (data) {
		res.send(data)
	})
})

app.all("/search", function (req, res, next) {
	// 跨域处理
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
app.post("/search",bodyParser.json(),function(req,res){
	console.log(req.body.search)
	let sql1=`select * from passage where title="${req.body.search}"`
	sqlFn(sql1, null, function (data) {
		 console.log(data)
		res.send(data)
	})
})

app.all("/change", function (req, res, next) {
	// 跨域处理
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
app.post("/change",bodyParser.json(),function(req,res){
	console.log(req.body)
	let sql12=`update passage set click=${req.body.click} where id=${req.body.id}`
	sqlFn(sql12, null, function (data) {
		res.send(data)
	})
})
app.all("/change2", function (req, res, next) {
	// 跨域处理
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
app.post("/change2",bodyParser.json(),function(req,res){
	console.log(req.body)
	let sql12=`update passage set pinglun=${req.body.pinglun} where id=${req.body.id}`
	sqlFn(sql12, null, function (data) {
		console.log(data)
		res.send(data)
	})
})
app.all("/delete", function (req, res, next) {
	// 跨域处理
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
app.post("/delete",bodyParser.json(),function(req,res){
	console.log(req.body)
	let sql12=`delete from passage where id=${req.body.id}`
	let sql13=`delete from coe where id=${req.body.id}`
	sqlFn(sql12, null, function (data) {
		sqlCom2(sql13,null,function(data2){
			console.log(data)
		res.send(data)
		})
	})
	
})


app.all("/sub", function (req, res, next) {
	// 跨域处理
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
var time=''
var day=''
var date=''
app.post("/sub",bodyParser.json(),function(req,res){
	console.log(req.body)
	time=req.body.time;
	day=req.body.day;
	date=req.body.date
	res.send('ok')	
})
app.get('/sub',function(req,res){
	res.send([time,day,date])
})
app.all("/data", function (req, res, next) {
	// 跨域处理
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
app.get('/data',function(req,res){
	res.sendFile(path.resolve("./test_data.txt"))
})
app.all("/data2", function (req, res, next) {
	// 跨域处理
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
app.get('/data2',function(req,res){
	res.sendFile(path.resolve("./test_data_2.txt"))
})
app.listen(3001, function () {
	console.log(3001);
})
