'use strict';

angular.module('conectadosApp')
  .service('User', function UserService($window) {
    var User = this;

    angular.extend(this, $window.User);

    /**
     * Set user properties to the service.
     *
     * @param user
     */
    User.set = function(user) {
      angular.extend({}, User.info, user);
    };


  });
