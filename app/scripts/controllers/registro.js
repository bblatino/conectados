'use strict';

angular.module('conectadosApp')
  .controller('RegistroCtrl', function (User) {

    // Register a new user.
    this.register = function(user, provider) {
      console.log(user, provider);
      // Validate password.
      if (angular.isDefined(user) && (user.password !== user.repeatPassword)) {
        return;
      }

      // Register te service.
      User.register(user, provider).then(function(response) {
        console.log('RegistroCtrl:: Registro ok', response);
      }, function(err) {
        console.log('RegistroCtrl:: Registro fallido', err);
      });
    };


  });
