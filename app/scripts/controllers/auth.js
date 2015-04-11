'use strict';

angular.module('conectadosApp')
  .controller('AuthCtrl', function ($scope, authService, Config, localStorageService) {


    this.login = function(form) {
      var userObj = {
        email: form.email.$viewValue,
        password: form.password.$viewValue
      };

      form.email = '';
      form.password = '';

      authService.loginWithPW(userObj, function(authData) {
//        localStorageService.set('user', true);
        $scope.vm.user = authData;
        console.log('logged', $scope.vm.user);
      });

    };

    this.logout = function() {
      console.log('logged out', this, $scope.vm);
//      localStorageService.set('user', undefined);
      $scope.vm.user = undefined;
    };
  });
