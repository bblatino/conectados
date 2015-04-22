'use strict';

angular.module('conectadosApp')
  .controller('AuthCtrl', function ($scope, authService) {

    /**
     * Login UI
     *
     * @param form
     */
    this.login = function(form) {
      // Create a user object as firebase auth need.
      var userObj = {
        email: form.email.$viewValue,
        password: form.password.$viewValue
      };

      // Clear wrote data before do the login.
      form.email.$viewValue = '';
      form.password.$viewValue = '';

      // Authenticate with email and password.
      authService.loginWithPW(userObj, function(response) {
        if (response instanceof Error) {
          form.$error = response;
          $scope.$apply();
        }
        else {
          $scope.vm.user = response;
        }


      });
    };

    this.logout = function() {
      authService.logout();
      $scope.vm.user = undefined;
    };
  });
