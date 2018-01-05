angular.module('church', ['ngRoute', 'ngResource'])

    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });
        //$locationProvider.hashPrefix('!');
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
             

            })
            .when('/main',{
                templateUrl:'views/main.html',

            })
            .when('/about',{
                templateUrl:'views/about.html',

            })
            .when('/contact',{
                templateUrl:'views/contact.html',

            })
            // .when('/userlist', {
            //     templateUrl: 'views/userlist.html',
            //     controller: 'UserListController'
            // })


            .otherwise({
                redirectTo: '/home'
            });

            $locationProvider.html5Mode(true);

    }])