'use strict';

angular.module('conectadosApp')
  .directive('media', function() {
    return {
      restrict: 'EA',
      templateUrl: 'scripts/directives/media.directive.html'
    };

  });