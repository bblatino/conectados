'use strict';

angular.module('conectadosApp')
  .controller('AuthCtrl', function (localStorageService) {


    this.login = function(form) {
      if (form.username === form.password) {
        localStorageService.set('user', true);
      }
      console.log('logged', form);
    };

    this.logout = function(form) {
      console.log('logged out', form);
      localStorageService.set('user', false);
    };
  });
