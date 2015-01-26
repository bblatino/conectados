'use strict';

angular.module('conectadosApp')
  .controller('GrupoJovenCtrl', function (OAuth) {
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
  });
