'use strict';

/**
 * @ngdoc function
 * @name conectadosApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the conectadosApp
 */
angular.module('conectadosApp')
  .controller('ListCtrl', function ($scope, grupojovenSoporte) {
    grupojovenSoporte.getDocs().then(function(list) {
      $scope.list = list;
    });
  });
