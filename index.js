var express = require('express'),
app = express(),
path = require('path'),
con = require('./js/connections.js'),
query = require('./js/queries.js'),
help = require('./js/help.js'),
bodyParser = require('body-parser'),
mailer = require('./js/mailer.js'),
jwt = require('jsonwebtoken'),
secretOrKey = 'padinet',
config = require("./js/configs.js"),
auth = require('./js/auth.js'),
auth1 = require('./js/auth.1.js'),
common = require("./js/commons.js");
app.engine("html",require("ejs").renderFile);
    app.set('views',path.join(__dirname,'views'));
    app.use(express.static(__dirname+'views'));

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/getclient',(req,res) => {
    console.log("Query",query.getclient());
    con.getdata(query.getclient(),result => {
        console.log("Result",result);
        res.send(result);
    })
})
app.listen(process.env.PORT || 2018);
