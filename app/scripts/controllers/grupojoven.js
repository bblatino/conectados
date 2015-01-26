'use strict';

angular.module('conectadosApp')
  .controller('GrupoJovenCtrl', function (OAuth, User) {

    /**
     * Login the user using OAuth service.
     *
     */
    this.login = function() {
      OAuth.login();
    };


    this.signup = function(user) {
      User.signup(user);
    };


  });
