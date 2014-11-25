'use strict';

/**
 * @ngdoc function
 * @name conectadosApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the conectadosApp
 */
angular.module('conectadosApp')
  .controller('ListBibliotecaCtrl', function ($scope, biblioteca) {
    biblioteca.getDocs().then(function(list) {
      $scope.libros = list;
    });
  });
