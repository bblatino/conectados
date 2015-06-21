'use strict';

angular.module('conectadosApp')
  .controller('GrupoJovenCtrl', function ($scope, localStorageService) {
    $scope.vm = {};
    $scope.vm.user = localStorageService.get('user');

  });
