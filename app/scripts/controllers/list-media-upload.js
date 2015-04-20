'use strict';
/**
 * @ngdoc function
 * @name conectadosApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the conectadosApp
 */
angular.module('conectadosApp')
  .controller('MediaUploadCtrl', function ($scope, mediaupload) {
      mediaupload.getDocs().then(function(list) {
        $scope.videos = list;
      });
    });
