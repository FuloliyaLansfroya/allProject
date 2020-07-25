var mysql = require("mysql");
var config = require("./config");

var client1 = mysql.createConnection(config.mySQLObj3)
var client2=mysql.createConnection(config.mySQLObj4)
function sqlCom(sql, arr, callback) {
    /*
      参数1：数据库语句
      参数2：数据库语句参数[Array]
      参数3：回调函数
    */
  
    client1.query(sql, arr, function (error, result) {
        if (error) {
            return;
        }
        callback(result);
    })
   
}
function sqlCom2(sql, arr, callback){
    client2.query(sql, arr, function (error, result) {
        if (error) {
            return;
        }
        callback(result);
    })
}
module.exports ={
    sqlCom:sqlCom,
    sqlCom2:sqlCom2
};
