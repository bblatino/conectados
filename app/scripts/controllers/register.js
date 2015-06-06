'use strict';

angular.module('conectadosApp')
  .controller('RegisterCtrl', function (authService, $mdToast, $location) {
    this.register = function(form) {
      // Validate if password ok.
      if (form.password.$viewValue !== form.passwordrepeated.$viewValue) {
        // Error message.
        $mdToast.show($mdToast.simple()
          .content('Las contraseñas tiene que ser iguales')
          .position('top right'));
        return;
      }

      // Ceate user object.
      var userObj = {
        email: form.email.$viewValue,
        password: form.password.$viewValue
      };

      authService.createUser(userObj, function userCreated(user) {

        debugger;
        $mdToast.show($mdToast.simple()
          .content('Usuario Registrado')
          .position('top right'));


        // Clear wrote data before do the login.
        form.email.$viewValue = '';
        form.password.$viewValue = '';
        form.passwordrepeated.$viewValue = '';

        // Back to the principal system
        //$location.path('#/grupojoven');
      });

    };
  });
