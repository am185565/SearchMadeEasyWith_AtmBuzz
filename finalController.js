(function () {
    'use strict';
    angular
    .module('app')
    .controller('finalController', HomeController);
    HomeController.$inject = ['$rootScope','$scope','$location'];
    function HomeController($rootScope,$scope,$location) {
        $scope.clicked = function(){   
            console.log('testing');
            $location.path('/test');
        }
    }
    })();