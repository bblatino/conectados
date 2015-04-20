/**
 * Created by bbabelardo on 19/04/2015.
 */
'use strict';

/**
 * @ngdoc service
 * @name conectadosApp.media-upload
 * @description
 * # biblioteca
 * Service in the conectadosApp.
 */
angular.module('conectadosApp')
  .service('mediaupload', function ($q) {
    this.getDocs = function() {
      var deferred = $q.defer();

      deferred.resolve([
        {
          name: '',
          description: '',
          language: 'es',
          url: '',
          filename: null,
          type: 'video'
        },

      ]);

      return deferred.promise;
    };
  });
