'use strict';

/**
* @ngdoc function
* @name angGraderApp.controller:AddstudentCtrl
* @adding a student to the database
* # AddstudentCtrl
* Controller of the angGraderApp
*/
angular.module('angGraderApp')
.controller('AddstudentCtrl', function ($scope, $rootScope, Students) {
  function init(){
    console.log('this is init');
    if(Students.all){
        $rootScope.studentArr = Students.all;
    } else {
      $rootScope.studentArr = [];
    }
  }
  init();

  console.log('inside AddstudentCtrl - $rootScope.studentArr', $rootScope.studentArr);


  $scope.addStudent = function(student){
    var s = {
      createdAt: Date(Date.now()),
      name: student.name,
      cohort: student.cohort,
      assignments: [{
        title: 'init',
        date: '',
        functionality: 0,
        readability: 0,
        style: 0,
        uiux: 0,
        deployment: 0,
        total: 0
      }]
    };

    console.log('student', s);
    Students.add(s);
  };

  $scope.deleteStudent = function(studentId){
    console.log('student removed');
    Students.delete(studentId);
  };
});
