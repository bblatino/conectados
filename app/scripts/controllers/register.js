'use strict';

angular.module('conectadosApp')
  .controller('RegisterCtrl', function (authService) {
    this.register = function(form) {
      // Validate if password ok.
      if (form.password.$viewValue !== form.passwordrepeated.$viewValue) {
        console.log('Password have to be that same');
        return;
      }

      // Ceate user object.
      var userObj = {
        email: form.email.$viewValue,
        password: form.password.$viewValue
      };

      authService.createUser(userObj, function userCreated(user) {
        // Clear wrote data before do the login.
        form.email.$viewValue = '';
        form.password.$viewValue = '';
        form.passwordrepeated.$viewValue = '';

        console.log(user);
      });

    };
  });
