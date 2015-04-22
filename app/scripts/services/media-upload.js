/**
 * Created by bbabelardo on 19/04/2015.
 */
'use strict';

/**
 * @ngdoc service
 * @name conectadosApp.media-upload
 * @description
 * # tranasmisiones
 * Service in the conectadosApp.
 */
angular.module('conectadosApp')
  .service('upload', function ($q) {
    this.getDocs = function() {
      var deferred = $q.defer();

      deferred.resolve([
        {
          name: '',
          date: '',
          language: '',
          description: '',
          url: '',
          type: 'video'
        },

      ]);

      return deferred.promise;
    };
  });
