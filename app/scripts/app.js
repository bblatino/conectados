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
    'ngMessages',
    'directive.g+signin',
    'LocalStorageModule',
    'firebase'
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
      .when('/grupojoven/media', {
        templateUrl: 'views/grupojoven/media.html',
        controller: 'MediaCtrl'
      })
      .when('/grupojoven/register', {
        templateUrl: 'views/grupojoven/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/grupojoven/trasmition', {
        templateUrl: 'views/grupojoven/trasmition.html',
        controller: 'RegisterCtrl'
      })
      .when('/biblioteca', {
        templateUrl: 'views/biblioteca/biblioteca.html',
        controller: 'ListBibliotecaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
