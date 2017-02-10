angular.module("demo",['ui.router', 'ngResource'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

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
            .state('app.myPosts', {
                url: '/My-Posts',
                views: {
                    'contentSection': {
                        controller: 'myPostsController as myPosts',
                        templateUrl: BASE_PATH_ROUTING + '/myPosts/myPosts.html'
                    }
                },
                'params': {
                    data : ""
                }
            });
        $urlRouterProvider.otherwise('/');

    }]);