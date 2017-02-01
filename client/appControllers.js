angular.module("demo").controller("appController",["$scope",function ($scope) {
    console.log("heyyyy");
}]);


angular.module("demo").controller("headerController",["$scope",function ($scope) {
    console.log("heyyyy");
}]);


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


angular.module("demo").controller("splashController",["$scope",function ($scope) {
        console.log("heyyyy");
}]);

