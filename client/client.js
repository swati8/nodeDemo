angular.module("demo",['ui.router', 'ngResource'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        const BASE_PATH_ROUTING = "client/src";
        $stateProvider
            .state('splash', {
                url: '/',
                templateUrl: BASE_PATH_ROUTING + '/splash/splash.html',
                controller: 'splashController as splash'
            })
            .state('app', {
                views: {
                    '': {
                        templateUrl: BASE_PATH_ROUTING + '/app/app.html',
                        controller: 'appController as app'
                    },
                    'headerSection@app': {
                        controller: 'headerController as header',
                        templateUrl: BASE_PATH_ROUTING + '/header/header.html'
                    }
                },
                abstract: true
            })
            .state('app.home', {
                url: '/home',
                views: {
                    'contentSection': {
                        templateUrl: BASE_PATH_ROUTING + '/myPosts/myPosts.html',
                        controller: 'myPostsController as myPosts'
                    }
                },
                'params': {
                    data : ""
                }
            });
        $urlRouterProvider.otherwise('/');

    }]);