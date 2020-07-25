var express = require("express");
var app = express();
var sqlFn = require("./mysql");

app.get("/", function (req, res) {

	let sql1 = "select * from passage";
	sqlFn(sql1, null, function (data) {
		res.send(data)
	})

})
app.listen(4003,function(){
	console.log(4003)
})