'use strict';

angular.module('conectadosApp')
  .service('User', function UserService($window) {
    var User = this;
    var OAuth = $window.OAuth;

    angular.extend(this, $window.User);

    /**
     * Set user properties to the service.
     *
     * @param user
     */
    User.set = function(user) {
      angular.extend({}, User.info, user);
    };

    /**
     *
     * @param user
     *  Basic user information, full name, email, password, company, age.
     * @param provider
     *  The provider like Google, Yahoo, Github, etc.
     *
     * @returns {*}
     *  Return the promise of the user information register.
     *
     */
    User.register = function(user, provider) {

      if (angular.isUndefined(provider)) {
        return User.signup(user)
          .done(function(user) {
            debugger;
            console.log('only user: ', user.data.firstname);
          });
      }

      return OAuth.popup(provider)
        .then(function(res) {
          return User.signup(res);
        });


    };

  });
