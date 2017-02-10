var express = require("express");
var cors = require('cors');
var mongoose = require("mongoose");
/*
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
*/

var app = express();
var posts = require('./rest/posts');
//var routes = require('./routes');
//routes(app);
mongoose.connect('mongodb://127.0.0.1:27017/demo');

mongoose.connection.on('error',function () {
    console.log("#### error ###");
});
mongoose.connection.on('connected',function(){
    console.log("#### connected ###")
});

app.use(cors());
//app.use('/',posts);
app.use('/rest/v1/post',posts);

/*
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser()); */

//app.use('/',routes);
/* app.get('/',function (req,res) {
    res.send("heyyyy");
}); */
/* app.get('/rest/v1/post',function (req,res) {
    res.send("heyyyy");
}); */

app.listen(3000, function () {
    console.log("Running on port 3000 ....")
});

module.exports = app;
module.exports = mongoose;