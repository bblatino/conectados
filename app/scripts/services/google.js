// Simplify the communication with the google api and connect with
// you angular app.

'use strict';

angular.module('conectadosApp')
  .service('cmGoogleApiConector', function Google($window) {
    var connector = this;
    var session;
    var gapi = $window.gapi;

    function plus() {
      gapi.client.load('plus','v1', function(){
        var request = gapi.client.plus.people.get({
          'userId': 'me'
        });
        request.execute(function(resp) {
          console.log('Retrieved profile for:' + resp.displayName);
          return resp;
        });
      });
    }

    /**
     * Getter/Setter of the session object recived after gapi login.
     *
     * @param obj
     */
    connector.session = function(obj) {
      if (angular.isDefined(obj)) {
        session = obj;
      }

      return session;
    };

    //
    connector.people = function() {

    };

    connector.me = function() {
      return plus();
    };
  });
