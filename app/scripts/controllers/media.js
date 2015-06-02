'use strict';

/**
 * @ngdoc function
 * @name conectadosApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the conectadosApp
 */
angular.module('conectadosApp')
  .controller('MediaCtrl', function ($scope, $anchorScroll, $location, Meetings) {
    var ctrlMedia = this;

    ctrlMedia.meetings = Meetings.list;
    ctrlMedia.active = 'segunda';

    /**
     * Go to the section in the content
     *
     * @param section
     *  The name of the section.
     */
    ctrlMedia.goToSection = function(section) {
      ctrlMedia.active = section;
      $location.hash(section);
      $anchorScroll();
    };

  });
