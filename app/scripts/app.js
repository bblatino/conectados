'use strict';

angular
  .module('conectadosApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngMessages',
    'ngAria',
    'ngAnimate',
    'ngMaterial',
    'directive.g+signin',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider, localStorageServiceProvider) {
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
        controller: 'SoporteCtrl',
        access: {
          app: 'grupojoven'
        }
      })
      .when('/grupojoven/registro', {
        templateUrl: 'views/grupojoven/registro.html',
        controller: 'RegistroCtrl'
      })
      .when('/grupojoven/media', {
        templateUrl: 'views/grupojoven/media.html',
        controller: 'MediaCtrl'
      })
      .when('/biblioteca', {
        templateUrl: 'views/biblioteca/biblioteca.html',
        controller: 'ListBibliotecaCtrl',
        access: {
          app: 'biblioteca'
        }
      })
      .otherwise({
        redirectTo: '/'
      });

    // Config localstorage.
    localStorageServiceProvider
      .setPrefix('conectados');

  })
  .run(function(OAuth) {
    OAuth.initialize('8aFi4S7G71dpb4JjQJw7TzD7560');
  });
