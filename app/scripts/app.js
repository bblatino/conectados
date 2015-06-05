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
        controller: 'HomeCtrl',
        state: {}
      })
      .when('/grupojoven', {
        templateUrl: 'views/grupojoven/main.html',
        controller: 'GrupoJovenCtrl',
        state: {
          name: 'main',
          title: 'Inicio',
          href: '#/grupojoven'
        }
      })
      .when('/grupojoven/soporte', {
        templateUrl: 'views/grupojoven/soporte.html',
        controller: 'SoporteCtrl',
        state: {}
      })
      .when('/grupojoven/media', {
        templateUrl: 'views/grupojoven/media.html',
        controller: 'MediaCtrl',
        title: 'Transmisiones Anteriores',
        state: {
          name: 'media',
          title: 'Transmisiones Anterioes',
          href: '#/grupojoven/media'
        }
      })
      .when('/grupojoven/register', {
        templateUrl: 'views/grupojoven/register.html',
        controller: 'RegisterCtrl',
        title: 'Registro',
        state: {
          name: 'register',
          title: 'Registro',
          href: '#/grupojoven/register'
        }
      })
      .when('/grupojoven/reset-password', {
        templateUrl: 'views/grupojoven/reset-password.html',
        controller: 'ResetPasswordCtrl',
        title: 'Recuperar Contraseña',
        state: {
          name: 'reset-password',
          title: 'Recuperar contraseña',
          href: '#/grupojoven/reset-password'
        }
      })
      .when('/grupojoven/live', {
        templateUrl: 'views/grupojoven/trasmition.html',
        controller: 'RegisterCtrl',
        state: {
          name: 'live',
          title: 'Transmisión en vivo',
          href: '#/grupojoven/live'
        }
      })
      // Biblioteca Routes.
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
