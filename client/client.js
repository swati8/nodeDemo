angular.module("demo",['ui.router', 'ngResource'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        const BASE_PATH_ROUTING = "client/src";
        $stateProvider
            .state('splash', {
                url: '/',
                templateUrl: BASE_PATH_ROUTING + '/splash/splash.html'
               // controller: 'splashController as splash'
            })
            .state('app', {
                views: {
                    '': {
                        templateUrl: BASE_PATH_ROUTING + '/app/app.html'
                       // controller: 'appController as app'
                    },
                    'headerSection@app': {
                       // controller: 'navigationController as navigation',
                        templateUrl: BASE_PATH_ROUTING + '/header/header.html'
                    }
                },
                abstract: true
            })
            .state('app.home', {
                url: '/home',
                views: {
                    'contentSection': {
                        templateUrl: BASE_PATH_ROUTING + '/home/home.html'
                      //  controller: 'homeController as home'
                    }
                },
                'params': {
                    data : ""
                }
            });
        $urlRouterProvider.otherwise('/');

    }]);