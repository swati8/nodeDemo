angular.module("demo").factory('apiData',["$resource", function ($resource) {
    return function() {
        return $resource('/rest/v1/:value', {
                value: '@value'
            },
            {
                getData: {
                    method: 'GET',
                    params :{},
                    headers : {}
                },
                postData: {
                    method: 'POST',
                    body :{}
                },
                updateData: {
                    method: 'PUT'
                },
                deleteData: {
                    method: 'DELETE'
                }
            });
    }
}]);
angular.module("demo").service('apiResponse',["apiData", function (apiData) {
    function checkNetwork() {
        return navigator.onLine;
    }
    function checkApiResponseError(response) {
        if(response.code != 1){
            alert("Something went wrong. We are looking into the issue. Please try again later.");
            return false;
        }
        return true;
    }
   this.apiGet = function (value,successCallback,failureCallback) {
       if(checkNetwork()) {
           apiData().getData({value:"posts"}).$promise.then(function (response) {
               if(checkApiResponseError(response)) {
                   console.log("response : ",response);
                   if(successCallback){
                       successCallback(response);
                   }
               }
           },function (error) {
               if(failureCallback) {
                   failureCallback(error);
               } else {
                   alert("Oops! It seems something went wrong. We regret for the inconvienence caused. Please try again later.");
                   console.log("Error : ", error);
               }
           });
       } else {
           alert("Please check your internet connection.")
       }
   };
}]);
