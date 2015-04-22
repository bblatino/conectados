'use strict';
/**
 * @ngdoc function
 * @name conectadosApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the conectadosApp
 */
angular.module('conectadosApp')
  .controller('UploadCtrl', function ($scope, upload) {
      upload.getDocs().then(function(list) {
        $scope.videos = list;
      });
    });
