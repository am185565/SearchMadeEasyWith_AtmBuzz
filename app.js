(
function () {
'use strict';
angular
.module('app', ['ngRoute', 'ngCookies'])
.config(config)
.run(run);
config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {
$routeProvider
.when('/', {
controller: 'LoginController',
templateUrl: 'login.html',
controllerAs: 'vm'
})

.when('/final', {
controller: 'finalController',
templateUrl: 'final.html'
})

.when('/test', {
    templateUrl: 'test.html'
    })

.when('/register', {
controller: 'RegisterController',
templateUrl: 'register.html',
controllerAs: 'vm'
})

.otherwise({ redirectTo: '/login' });
}    
run.$inject = ['$rootScope'];
function run(){
console.clear();
}
})();