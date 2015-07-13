'use strict';

/**
 * @ngdoc function
 * @name angGraderApp.controller:AddstudentCtrl
 * @description
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
  });
