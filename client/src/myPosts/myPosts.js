angular.module("demo").controller("myPostsController",["$scope","apiResponse",function ($scope,apiResponse) {
    console.log("heyyyy");
    var myPosts = this;

    myPosts.getPosts = function () {
       apiResponse.apiGet("post",null,function (response) {
           console.log("response",response);
           myPosts.allPosts = response;
           $scope.$digest();
       })
    };

    myPosts.content = "";

    myPosts.submitPost = function () {
      apiResponse.apiPost("post",{content: myPosts.content},function (response) {
          console.log("response", response);
          myPosts.allPosts.unshift(response);
      })
    };
}]);

