const mongodb = require("mongodb")

const mongoClient = mongodb.MongoClient
const url = "mongodb://localhost:27017"
const objectid = mongodb.ObjectID


class MongoControl {
    constructor(dbName, collName) {
        this.dbName = dbName
        this.collName = collName
    }
    insert(data, callback) {
        mongoClient.connect(url, ({ uesNewUrlParser: true }), (err, client) => {
            var db = client.db(this.dbName)
            db.collection(this.collName).insert(data, function (err, res) {
                callback(err, res)
                client.close()
            })
        })
    }
    remove(data, callback) {
        mongoClient.connect(url, ({ uesNewUrlParser: true }), (err, client) => {
            var db = client.db(this.dbName)
            db.collection(this.collName).remove(data, function (err, res) {
                callback(err, res)
                client.close()
            })
        })
    }
    update(data1, data2, callback) {
        mongoClient.connect(url, ({ uesNewUrlParser: true }), (err, client) => {
            var db = client.db(this.dbName)
            db.collection(this.collName).update(data1, { $set: data2 }, function (err, res) {
                callback(err, res)
                client.close()
            })
        })
    }
    find(data, callback) {
        mongoClient.connect(url, ({ uesNewUrlParser: true }), (err, client) => {
            var db = client.db(this.dbName)
            db.collection(this.collName).find(data).toArray(function (err, res) {
                callback(err, res)
                client.close()
            })
        })
    }
    findALL(callback) {

        mongoClient.connect(url, ({ uesNewUrlParser: true }), (err, client) => {
            var db = client.db(this.dbName)
            db.collection(this.collName).find().toArray(function (err, res) {
                callback(err, res)
                client.close()
            })
        })

    }
}
exports.MongoControl=MongoControl

// user.insert({ name: "xiang", age: 40 }, function (err, res) {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(res.result)

//     }
// })
// user.update({
//     _id: objectid("5c500090ce2de2be7ae14161")
// }, {
//         age: 35
//     }, function (err, res) {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             console.log(res.result)

//         }
//     })
// user.remove({
//     _id: objectid("5c500099ce2de2be7ae14162")
// }, function (err, res) {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(res.result)

//     }
// })

// user.find({_id:objectid("5c500090ce2de2be7ae14161")},function (err, res) {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(res)

//     }
// })
// user.findALL(function (err, res) {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(res)

//     }
// })