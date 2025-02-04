angular.module('studentManagementApp')
.controller('HomeController', ['$scope', function($scope) {
    $scope.pageTitle = 'Welcome to Student Management System';
}])
.controller('StudentsController', ['$scope', 'StudentService', function($scope, StudentService) {
    $scope.students = StudentService.getAllStudents();
    
    $scope.deleteStudent = function(id) {
        StudentService.deleteStudent(id);
        $scope.students = StudentService.getAllStudents();
    };
}])
.controller('AddStudentController', ['$scope', 'StudentService', '$location', function($scope, StudentService, $location) {
    $scope.student = {};
    
    $scope.saveStudent = function() {
        if ($scope.studentForm.$valid) {
            StudentService.addStudent($scope.student);
            $location.path('/students');
        }
    };
}])
.controller('EditStudentController', ['$scope', 'StudentService', '$routeParams', '$location', function($scope, StudentService, $routeParams, $location) {
    $scope.student = angular.copy(StudentService.getStudentById(parseInt($routeParams.id)));
    
    $scope.updateStudent = function() {
        if ($scope.studentForm.$valid) {
            StudentService.updateStudent($scope.student);
            $location.path('/students');
        }
    };
}]);