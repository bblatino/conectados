'use strict';

/**
 * @ngdoc service
 * @name conectadosApp.biblioteca
 * @description
 * # biblioteca
 * Service in the conectadosApp.
 */
angular.module('conectadosApp')
  .service('Meetings', function () {

    this.list = [
      {section: 'segunda',title: 'Segunda Reunión'},
      {section: 'tercera',title: 'Tercera Reunión'},
      {section: 'cuarta', title: 'Cuarta Reunión'},
      {section: 'quinta', title: 'Quinta Reunión'},
      {section: 'sexta', title: 'Sexta Reunión'},
      {section: 'septima', title: 'Septima Reunión'},
      {section: 'ocho', title: 'Octava Reunión'},
      {section: 'nueve', title: 'Novena Reunión'},
      {section: 'diez', title: 'Decima Reunión'}
    ];

  });
