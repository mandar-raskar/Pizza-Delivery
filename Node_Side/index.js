var express = require('express');
var cors = require("cors");
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser')

var url = "mongodb://localhost:27017/Pizza";
var port = 3001;
var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

MongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    console.log("connected");
    app.get('/pizza', function (req, res) {
        var dbo = db.db("Pizza");
        dbo.collection("Pizza-Details").find({}).toArray(
            function (err, result) {
                if (err) throw err;

                res.json({ err: false, result: result });
            });
    });

    app.get('/order', function (req, res) {
        var dbo = db.db("Pizza");
        dbo.collection("Order-Details").find({}).toArray(
            function (err, result) {
                if (err) throw err;

                res.json({ err: false, result: result });
            });
    });

    app.post('/order', function (req, res) {
        var Pizza = req.body.Pizza;
        var Name = req.body.Name;
        var Address = req.body.Address;
        var OrderTime = req.body.OrderTime;
        var DeliveryTime = req.body.DeliveryTime;
        var PayableAmount = req.body.PayableAmount;
        var dbo = db.db("Pizza");
        var data = {
            Pizza: Pizza,
            Name: Name,
            Address: Address,
            OrderTime: OrderTime,
            DeliveryTime: DeliveryTime,
            PayableAmount: PayableAmount
        }
        dbo.collection("Order-Details").insertOne(data, function (err, result) {
            if (err) throw err;
            res.json({ err: false, result: result });
        })
    })
});

app.listen(port);
module.exports = app;
