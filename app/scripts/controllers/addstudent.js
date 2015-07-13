'use strict';

/**
 * @ngdoc function
 * @name angGraderApp.controller:AddstudentCtrl
 * @adding a student to the database
 * # AddstudentCtrl
 * Controller of the angGraderApp
 */
angular.module('angGraderApp')
  .controller('AddstudentCtrl', function ($scope, $rootScope) {
    $rootScope.studentArr = [];

    $scope.addStudent = function(student){
      $rootScope.studentArr.push(student);
    }

    // this.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];

    this.student = [
      {'name': 'Ben',
      'cohort' 'June 2014'},
      {'name': 'Christian',
      'cohort' 'April 2015'}

        ];
  });
