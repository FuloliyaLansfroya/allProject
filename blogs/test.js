const mongocon = require("./static/js/packegDB").MongoControl
var blogs = new mongocon("test", "pages")
var comment = new mongocon("test", "comment")
const moment = require("moment")
var information = new mongocon("information", "word")
// blogs.insert({
//     title:"123456789",
//     content:"789456132",
//     data:moment().format("YYYY-MM-DD"),
//     intor:"APLO"
// },function(err,data){

// })
// blogs.findALL(function(err,data){
//     console.log(data)
// })

// comment.insert({
//    fromId:"5c6bb7e450340a21189b5d2f",
//     content:"zfhnxxxn",
//     author:"any",
//     data:moment().format("YYYY-MM-DD")
// },function(err,data){

// })
// comment.findALL(function(err,data){
//     console.log(data)
// })
// comment.remove({},function(err,data){
//     console.log(data)
// })

information.insert({
    user: "admin",
    password: "123456789"
}, function (err, data) {

})
information.findALL(function (err, data) {
    console.log(data)
})
// information.remove({},function(err,data){
//     console.log(data)
// })