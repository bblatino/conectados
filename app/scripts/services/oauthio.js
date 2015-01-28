'use strict';

angular.module('conectadosApp')
  .service('OAuth', function OAuthService($window, Session, User, $log) {
    var OAuth = this;

    // Extend the library.
    angular.extend(this, $window.OAuth);

    /**
     * Using OAuth login and get the user information.
     */
    this.loginGoogle = function() {
      //Using popup
      return OAuth.popup('google')
        .done(function(result) {
          Session.new(result);
          //use result.access_token in your API request
          //or use result.get|post|put|del|patch|me methods (see below)
          result.me()
            .done(function (response) {
              //this will display "John Doe" in the console
              User.set(response);
            })
            .fail(function (err) {
              //handle error of get user information
              $log.error(err);
            });
        })
        .fail(function (err) {
          //handle error of the authentication process.
          $log.error(err);
        });
    };
  });
