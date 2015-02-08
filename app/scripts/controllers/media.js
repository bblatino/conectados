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

  });
