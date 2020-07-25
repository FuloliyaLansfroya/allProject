const express = require("express")
const routor = express.Router()
const path = require("path")
const bodyParser = require("body-parser")
const moment = require("moment")
const ejs = require("ejs")
const fs = require("fs")
const cookieparser = require("cookie-parser")
const mongodb = require("mongodb")
const mongocon = require("./static/js/packegDB").MongoControl
var information = new mongocon("information", "word")
var objectID = mongodb.ObjectId
var blogs = new mongocon("test", "pages")
const urlencoded = bodyParser.urlencoded({ extended: false })
const cookies = require("./cookie").cookieControl
var cookiess = new cookies()
var comment = new mongocon("test", "comment")
routor.use(express.static("./static"))
routor.get("/", function (req, res) {
    if (cookiess.checkToken(req.cookies.token)) {
        res.sendFile(path.resolve("./static/writePage.html"))
    }
    else {
        res.redirect("/admin/login")
    }
})
routor.post("/submitPage", urlencoded, function (req, res) {
    if (cookiess.checkToken(req.cookies.token)) {
        var title = req.body.title
        var intor = req.body.intor
        var author = req.body.author
        var content = req.body.content
        var now = moment().format("YYYY-MM-DD")
        blogs.insert({
            title: title,
            intor: intor,
            author: author,
            content: content,
            data: now
        }, function (err, data) {
            res.sendFile(path.resolve("./static/transition.html"))
        })
    }

})

routor.get('/login', function (req, res) {
    res.sendFile(path.resolve("./static/login.html"))
})
routor.post("/log", urlencoded, function (req, res) {
    var user = req.body.user
    var password = req.body.password
    if (req.body.btn == "register") {
        res.sendFile(path.resolve("./static/resiste.html"))
    }
    if (req.body.btn == "login") {
        var flag = false
        information.findALL(function (err, result) {
            result.forEach(function (item) {
                if (item.user == user && item.password == password) {
                    res.cookie("token", cookiess.getToken())
                    flag = true
                    res.redirect("/admin")
                }
            })
            if (flag == false) {
                res.sendFile(path.resolve("./static/transition2.html"))
            }
        })
    }


})
routor.post("/register", urlencoded, function (req, res) {
    var users = req.body.user
    var passwords = req.body.password
    var obj = {
        user: users,
        password: passwords
    }
    information.findALL(function (err, result) {
        if (result.length == 0) {
            information.insert(obj, function (err, result) {
                res.sendFile(path.resolve("./static/transition.html"))
            })
        }
        else {
            var flag = false;
            result.forEach(function (item) {
                if (item.user == users) {
                    flag = true
                }
            })
            if (flag) {
                res.sendFile(path.resolve("./static/transition3.html"))
            }
            else {
                information.insert(obj, function (err, results) {
                    console.log(results)
                    res.sendFile(path.resolve("./static/transition.html"))
                })
            }
        }
    })

})
routor.get("/change", function (req, res) {
    res.sendFile(path.resolve("./static/change.html"))
})
routor.post("/change", urlencoded, function (req, res) {

    var user = req.body.user
    var password = req.body.password
    information.update({ user: user }, { password: password }, function (err, result) {
        cookiess.removeToken(req.cookies.token)
        res.sendFile(path.resolve("./static/transition.html"))
    })

})
routor.get("/logout", function (req, res) {
    cookiess.removeToken(req.cookies.token)
    res.redirect("/admin")
})
routor.get("/getComment", function (req, res) {
    comment.find({
        state: 0
    }, function (err, result) {
        if(result.length==0){
            res.send([])
        }
        else{
             res.send(result)
        }
       
    })
})
routor.get("/passComment", function (req, res) {
    var id = req.query.id
    comment.update({
        _id: objectID(id)
    }, {
            state: 1
        }, function (err, data) {
            res.send("None")
        })
})
routor.get("/nopassComment", function (req, res) {
    var id = req.query.id
    comment.update({
        _id: objectID(id)
    }, {
            state: 2
        }, function (err, data) {
            res.send("None")
        })
})

routor.post("/select", urlencoded, function (req, res) {
    var id = req.query.id
    if (req.body.btn == "change") {
        if (cookiess.checkToken(req.cookies.token)) {
            ejs.renderFile("./ejs/changecontent.ejs", { data: id }, function (err, result) {
                res.send(result)
            })
        }
        else {
            res.sendFile(path.resolve("./static/transition6.html"))
        }
    }
    else {

        blogs.remove({
            _id: objectID(id)
        }, function (err, data) {

        })
        comment.remove({
            fromId: id
        }, function (err, data) {
            res.redirect("/")
        })


    }
})
routor.post("/change1", urlencoded, function (req, res) {
    var content = req.body.content
    var id = req.query.id
    blogs.update({
        _id: objectID(id)
    }, {
            content: content
        }, function (err, data) {
            res.sendFile(path.resolve("./static/tansistion4.html"))
        })
})
routor.post("/change2", urlencoded, function (req, res) {
    var title = req.body.title
    var id = req.query.id
    console.log(id)
    blogs.update({
        _id: objectID(id)
    }, {
            title: title
        }, function (err, data) {
            res.sendFile(path.resolve("./static/tansistion4.html"))
        })
})
routor.post("/change3", urlencoded, function (req, res) {
    var intor = req.body.intor
    var id = req.query.id
    blogs.update({
        _id: objectID(id)
    }, {
            intor: intor
        }, function (err, data) {
            res.sendFile(path.resolve("./static/tansistion4.html"))
        })
})

module.exports = routor