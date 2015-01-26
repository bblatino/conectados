'use strict';

angular.module('conectadosApp')
  .controller('SoporteCtrl', function ($scope, $window, cmGoogleApiConector) {
    // Methods.
    $scope.logout = function() {
      $window.gapi.auth.signOut();
    };

    // Observers.
    $scope.$on('event:google-plus-signin-success', function(event, args) {
      console.log('event:google-plus-signin-success', args);

      if (args.status['google_logged_in']) {
        $scope.logged = true;
        $scope.$digest();

        var gapi = cmGoogleApiConector;
        console.log('Google', gapi);
        console.log('Google', gapi.me());

      }
    });

    $scope.$on('event:google-plus-signin-failure', function() {
      console.log('event:google-plus-signin-failure');

      $scope.logged = false;
    });
  });
