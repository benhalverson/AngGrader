'use strict';
angular
  .module('angGraderApp')
  .factory('Assignment', function($resource) {
    return $resource('https://grader-app.firebaseio.com/assignment/:id.json');
  });
