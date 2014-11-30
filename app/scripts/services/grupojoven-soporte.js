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
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_24px.svg',
          url: 'https://drive.google.com/file/d/0B9CoR0oiB4hRcVlrNkpwNHFfelk/view?usp=sharing',
          type: 'manual'
        },
        {
          name: 'Instalando e configurando o TeamTalk 4.',
          description: '',
          language: 'pt',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_24px.svg',
          url: 'https://drive.google.com/a/kabbalahsites.org/file/d/0B0YtsbIsb8XHenlOTjFUZWlka0k/view?usp=sharing',
          type: 'manual'
        },
        {
          name: '',
          description: 'Para configurar automaticamente el team talk 4, descargar y hacer hacer doble click.',
          language: 'es',
          img: 'http://google.github.io/material-design-icons/file/svg/ic_file_download_24px.svg',
          url: '/files/tt4_grupo_joven.tt',
          type: 'file'
        },
        {
          name: '',
          description: 'Para configurar automaticamente o team talk 4, baxiare fazer com que você dê um duplo clique.',
          language: 'pt',
          img: 'http://google.github.io/material-design-icons/file/svg/ic_file_download_24px.svg',
          url: '/files/tt4_grupo_joven.tt',
          type: 'file'
        }

      ]);

      return deferred.promise;
    };
  });
