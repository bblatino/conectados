'use strict';

/**
 * @ngdoc function
 * @name conectadosApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the conectadosApp
 */
angular.module('conectadosApp')
  .controller('MediaCtrl', function ($scope, $anchorScroll, $location) {
    /**
     * Go to the section in the content
     *
     * @param section
     *  The name of the section.
     */
    $scope.goToSection = function(section) {
      $location.hash(section);
      $anchorScroll();
    };
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 4d834d7b0c34ec6e372b12e4fab63473467e5383
=======

>>>>>>> 33cc2f7c5bdd92f816ae252d3adac63d1ae9a261
>>>>>>> master
  });
