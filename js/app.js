// Application module that injects routing, controller, and directive dependencies.
var myApp = angular.module('myApp', ['ngRoute', 'myControllers', 'myDirectives'])
                     .config(function ($routeProvider) {
                         $routeProvider.when("/home", {
                             // templateUrl: 'views/list.html',
                             // controller: 'ListCtrl'
                         }
                    )
             // If no route is selected then use the 'home' route.
             .otherwise({ redirectTo: '/home' });
                     });

// Directive - Modifies HTML behaviour.
var myDirectives = (function () {
    var myDirectives = angular.module('myDirectives', []);

    // directive() is a factory method to create directives.
    myDirectives.directive('myStars', function () {
        return {
            restrict: 'A',
            scope: {
                rating: '=',
                max:    '='
            },
            link: function ($scope) {
                $scope.stars = [];
                for (var i = 0; i < $scope.max; i++) {
                    if (i < $scope.rating)
                        $scope.stars.push({ filled: true});
                    else
                        $scope.stars.push({ filled: false });
                }
            },
            templateUrl: function (element) { return 'views/stars.html' },
        }
    });

    return myDirectives;
}());

// Controller - dispatches inputs and outputs.
var myControllers = (function () {
    var myControllers = angular.module('myControllers', []);

    // Controllers are defined by the controller function.
    myControllers.controller('AppCtrl', ['$scope', function ($scope) {
        $scope.title = "AngularJS Tutorial";
    }]);
    return myControllers;
}());
