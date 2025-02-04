angular.module('studentManagementApp')
.service('StudentService', ['$http', function($http) {
    // Simulated JSON storage (in a real app, this would be an API endpoint)
    let students = [
        { id: 1, name: 'John Doe', email: 'john@example.com', course: 'Computer Science' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', course: 'Artificial Intelligence' }
    ];

    return {
        getAllStudents: function() {
            return students;
        },
        getStudentById: function(id) {
            return students.find(student => student.id === parseInt(id));
        },
        addStudent: function(student) {
            student.id = students.length + 1;
            students.push(student);
            return student;
        },
        updateStudent: function(student) {
            const index = students.findIndex(s => s.id === student.id);
            if (index !== -1) {
                students[index] = student;
            }
            return student;
        },
        deleteStudent: function(id) {
            const index = students.findIndex(s => s.id === parseInt(id));
            if (index !== -1) {
                students.splice(index, 1);
            }
        }
    };
}]);