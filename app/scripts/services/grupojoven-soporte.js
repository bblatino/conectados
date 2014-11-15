'use strict';

/**
 * @ngdoc service
 * @name conectadosApp.grupojovenSoporte
 * @description
 * # grupojovenSoporte
 * Service in the conectadosApp.
 */
angular.module('conectadosApp')
  .service('grupojovenSoporte', function ($q) {
    this.getDocs = function() {
      var deferred = $q.defer();

      deferred.resolve([
        {
          name: 'Instalación y configuración del TeamTalk 4.',
          description: '',
          language: 'es',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9CoR0oiB4hRcVlrNkpwNHFfelk/view?usp=sharing'
        },
        {
          name: 'Instalando e configurando o TeamTalk 4.',
          description: '',
          language: 'pt',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9CoR0oiB4hRQ3owZEp3VG5tMGs/view?usp=sharing'
        }
      ]);

      return deferred.promise;
    };
  });
