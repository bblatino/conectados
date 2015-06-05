'use strict';

angular.module('conectadosApp')
  .controller('ToolbarCtrl', function ($rootScope, $location ) {
    var vm = this;

    $rootScope.$on('$routeChangeSuccess', function(current) {
      debugger;
      if (angular.isUndefined(current)) {
        return;
      }
      vm.actualRoute = current.name;
    });

  });
