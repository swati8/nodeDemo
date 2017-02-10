var Post = require('./postModel');

exports.find = function (callback) {
    var response={};
    Post.find({}).sort({lastUpdated:-1}).exec(function (err,data) {
        if(err){
            response.code = -1;
            response.data = err;
        } else {
            response.code = 1;
            response.data = data;
        }
        callback(response);
    });
    /*Buzz.find({}).sort({lastUpdated:-1}).limit(10).skip(10*(i-1)).exec(function (err, data) {
        callback(err,data);
    });*/
};

exports.post = function (payload,callback) {
    var newPost= new Post(payload);
    var response = {};
    newPost.save(function(err,data){
        if(err){
            response.code = -1;
            response.data = err;
        } else {
            response.code = 1;
            response.data = data;
        }
        callback(response);
    });
    /*Buzz.find({}).sort({lastUpdated:-1}).limit(10).skip(10*(i-1)).exec(function (err, data) {
        callback(err,data);
    });*/
};