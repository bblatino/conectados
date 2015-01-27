'use strict';

angular.module('conectadosApp')
  .service('Session', function SessionService($rootScope, $location, localStorageService) {
    // Storage the active session information.
    var Session = this;

    // Create new scope.
    var $scope = $rootScope.$new();

    /**
     * Create a new session object.
     *
     * @param session
     *  The session object result of OAuth.
     *
     */
    this.new = function(session) {
      // Storage active session.
      localStorageService.set('session', session);
      return angular.extend(Session, session);
    };

    $scope.$on('$routeChangeStart', function(event, next) {
      // Check if exist active session.
      if (angular.isDefined(next.$$route.access) && !localStorageService.get('session')) {
        $location.path(next.$$route.access.app);
      }
    });
  });
