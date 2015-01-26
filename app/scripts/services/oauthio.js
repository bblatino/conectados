// Simplify the communication with the google api and connect with
// you angular app.

'use strict';

angular.module('conectadosApp')
  .service('OAuth', function OAuthService($window) {
    angular.extend(this, $window.OAuth);


  });
