'use strict';

angular.module('conectadosApp')
  .controller('MainCtrl', function ($scope, $window) {
    // Methods.
    $scope.logout = function() {
      $window.gapi.auth.signOut();
    };


    // Observers.
    $scope.$on('event:google-plus-signin-success', function(event, args) {
      console.log('event:google-plus-signin-success', args);

      if (args.status.google_logged_in) {
        $scope.logged = true;
        $scope.$digest();
      }
    });

    $scope.$on('event:google-plus-signin-failure', function() {
      console.log('event:google-plus-signin-failure');

      $scope.logged = false;
    });
  });
