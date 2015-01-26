// Simplify the communication with the google api and connect with
// you angular app.

'use strict';

angular.module('conectadosApp')
  .service('OAuth', function OAuthService($window) {
    var OAuth = this;

    // Extend the library.
    angular.extend(this, $window.OAuth);

    /**
     *
     * @param provider
     */
    this.login = function() {
      //Using popup
      OAuth.popup('google')
        .done(function(result) {
          //use result.access_token in your API request
          //or use result.get|post|put|del|patch|me methods (see below)
          result.me()
            .done(function (response) {
              //this will display "John Doe" in the console
              console.log(response.name);
            })
            .fail(function (err) {
              //handle error with err
              console.log('error: ', err);
            });

          console.log('autehnticado: ', result.access_token);
        })
        .fail(function (err) {
          //handle error with err
          console.log('error: ', err);
        });
    };
  });
