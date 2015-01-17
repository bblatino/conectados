'use strict';

angular
  .module('conectadosApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAria',
    'ngAnimate',
    'ngMaterial',
    'directive.g+signin'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'MainCtrl'
      })
      .when('/grupojoven/soporte', {
        templateUrl: 'views/grupojoven/main.html',
        controller: 'MainCtrl'
      })
      .when('/grupojoven/media', {
        templateUrl: 'views/grupojoven/media.html',
        controller: 'MediaCtrl'
      })
      .when('/biblioteca', {
        templateUrl: 'views/biblioteca/biblioteca.html',
        controller: 'ListBibliotecaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
