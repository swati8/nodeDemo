angular.module("demo").controller("myPostsController",["$scope","apiResponse",function ($scope,apiResponse) {
    console.log("heyyyy");
    var myPosts = this;
    (function () {
       apiResponse.apiGet("post",function (response) {
           console.log("response",response);
       })
    })();
    myPosts.allPosts = [{
        post : "message1"
    },{
        post : "message2"
    },{
        post : "message3"
    }]
}]);

