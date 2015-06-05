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
    'firebase',
    'ngMdIcons'
  ])
  .config(function ($routeProvider, $mdIconProvider) {
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
      .when('/grupojoven/reset-password', {
        templateUrl: 'views/grupojoven/reset-password.html',
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

    $mdIconProvider
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);
  });
