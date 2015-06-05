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
        controller: 'GrupoJovenCtrl',
        title: 'Grupo Joven'
      })
      .when('/grupojoven/soporte', {
        templateUrl: 'views/grupojoven/soporte.html',
        controller: 'SoporteCtrl'
      })
      .when('/grupojoven/media', {
        templateUrl: 'views/grupojoven/media.html',
        controller: 'MediaCtrl',
        title: 'Transmisiones Anteriores'
      })
      .when('/grupojoven/register', {
        templateUrl: 'views/grupojoven/register.html',
        controller: 'RegisterCtrl',
        title: 'Registro'
      })
      .when('/grupojoven/reset-password', {
        templateUrl: 'views/grupojoven/reset-password.html',
        controller: 'ResetPasswordCtrl',
        title: 'Recuperar Contraseña'
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
