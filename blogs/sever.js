const express = require("express")
var app = express()
const fs = require("fs")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const mongodb = require("mongodb")
const mongocon = require("./static/js/packegDB").MongoControl
var blogs = new mongocon("test", "pages")
var comment = new mongocon("test", "comment")
var information = new mongocon("information", "word")
var objectID = mongodb.ObjectId
const urlencoded = bodyParser.urlencoded({ extended: false })
const moment = require("moment")
const path = require("path")
const cookieparser=require("cookie-parser")

app.use(cookieparser())
app.use(express.static("./static"))
app.use("/admin",require("./admin"))
app.get('/', function (req, res) {
    blogs.findALL(function (err, mongodata) {
        console.log(mongodata)
        ejs.renderFile("./ejs/home.ejs", { data: mongodata }, function (err, result) {
            res.send(result)
        })
    })
})
app.get("/page", function (req, res) {
    var id = req.query.id
    blogs.find({
        _id: objectID(id)
    }, function (err, mongodata) {
        var result = mongodata[0]
        comment.find({
            fromId: id,
            state:1
        }, function (err, mongodata2) {
            ejs.renderFile("./ejs/page.ejs", { data: result, comment: mongodata2 }, function (err, datas) {
                res.send(datas)
            })
        })

    })
})
app.post("/commendSubmit", urlencoded, function (req, res) {
    var id = req.query.id
    var title=req.query.title
    var content = req.body.content
    comment.insert({
        state:0,
        fromId: id,
        content: content,
        author: "any",
        data: moment().format("YYYY-MM-DD"),
        fromTitle: title
    }, function (err, data) {
        res.redirect(
            "/page?id=" + id
        )
    })
})
app.get("/favicon.ico",function(req,res){
    res.sendFile(path.resolve("./static/img/bitbug_favicon.ico"))
})


app.listen(4005)