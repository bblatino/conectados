'use strict';

angular.module('conectadosApp')
  .controller('GrupoJovenCtrl', function (OAuth, User, Session) {

    /**
     * Login the user using OAuth service.
     *
     */
    this.login = function() {
      OAuth.login().then(function(response){
        console.log('login::', response, User, Session);
      });
    };


  });
