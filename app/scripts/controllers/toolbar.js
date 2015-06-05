'use strict';

angular.module('conectadosApp')
  .controller('ToolbarCtrl', function ($rootScope, $window, $route) {
    var vm = this;

    vm.state = $route.current.state;
    vm.back = backOnHistory;

    function backOnHistory() {
      $window.history.back();
    }
  });
