angular.module('studentManagementApp', ['ngRoute', 'ngAnimate'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    })
    .when('/students', {
        templateUrl: 'views/students.html',
        controller: 'StudentsController'
    })
    .when('/add-student', {
        templateUrl: 'views/add-student.html',
        controller: 'AddStudentController'
    })
    .when('/edit-student/:id', {
        templateUrl: 'views/edit-student.html',
        controller: 'EditStudentController'
    })
    .otherwise({
        templateUrl: 'views/404.html'
    });
}]);