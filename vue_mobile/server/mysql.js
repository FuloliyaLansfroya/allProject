var mysql = require("mysql");
var config = require("./config");

var client = mysql.createConnection(config.mySQLObj)
function sqlFn(sql, arr, callback) {
    /*
      参数1：数据库语句
      参数2：数据库语句参数[Array]
      参数3：回调函数
    */
  
    client.query(sql, arr, function (error, result) {
        if (error) {
            return;
        }
        callback(result);
    })
   
}

module.exports =sqlFn;
