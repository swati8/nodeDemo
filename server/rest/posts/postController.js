var postService = require('./postService');

exports.getposts = function (req,res) {
console.log("hiiii");
    postService.find(function (response) {
        res.send(response);
    });
};

exports.post = function (req,res) {
    postService.post(req.query,function (response) {
        res.send(response)
    });
};