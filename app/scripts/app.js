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
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/grupojoven', {
        templateUrl: 'views/grupojoven/main.html',
        controller: 'GrupoJovenCtrl'
      })
      .when('/grupojoven/soporte', {
        templateUrl: 'views/grupojoven/soporte.html',
        controller: 'SoporteCtrl'
      })
      .when('/biblioteca', {
        templateUrl: 'views/biblioteca/biblioteca.html',
        controller: 'ListBibliotecaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
