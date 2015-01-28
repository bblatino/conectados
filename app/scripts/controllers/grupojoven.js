'use strict';

angular.module('conectadosApp')
  .controller('GrupoJovenCtrl', function (OAuth, User, Session) {

    /**
     * Login the user using OAuth service.
     *
     */
    this.loginGmail = function() {
      OAuth.loginGoogle().then(function(response) {
        console.log('login::', response, User, Session);
      });
    };

    this.sigin  = function(user) {
      User.sigin(user).then(function(response) {
        console.log('login::', response, User, Session);
      });
    };


  });
