'use strict';

/**
 * @ngdoc service
 * @name conectadosApp.biblioteca
 * @description
 * # biblioteca
 * Service in the conectadosApp.
 */
angular.module('conectadosApp')
  .service('biblioteca', function ($q) {
    this.getDocs = function() {
      var deferred = $q.defer();

      deferred.resolve([
        {
          name: 'El punto en el corazón.',
          description: 'Origen del placer para mi alma.',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: 'El punto en el corazón.',
          description: 'Origen del placer para mi alma.',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: 'El punto en el corazón.',
          description: 'Origen del placer para mi alma.',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: 'El punto en el corazón.',
          description: 'Origen del placer para mi alma.',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: 'El punto en el corazón.',
          description: 'Origen del placer para mi alma.',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        }
      ]);

      return deferred.promise;
    };
  });
