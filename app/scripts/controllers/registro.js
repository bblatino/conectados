'use strict';

angular.module('conectadosApp')
  .controller('RegistroCtrl', function (User) {

    // Register a new user.
    this.signup = function(user) {
      // Validate password.
      if (user.password !== user.repeatPassword) {
        return;
      }

      User.signup(user);
    };


  });
