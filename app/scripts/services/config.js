'use strict';

/**
 * @ngdoc value
 * @name config
 * @description
 * # config file
 * Public configuration values.
 */
angular.module('conectadosApp')
  .value('Config', {
    backend:'https://conectado.firebaseio.com/'
  });
