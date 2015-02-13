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
          name: 'Torre de Babel-Último piso.',
          description: 'Israel y el futuro de la humanidad.',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: 'Cabalá para principiantes',
          description: 'Una introducción a la sabiduría oculta',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: 'La voz de la Cabalá',
          description: 'Para quien busca expandir su visión interna',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: 'El poder de la Cabalá',
          description: 'Un manual de instrucciones para la vida',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: 'Tu propósito en la vida',
          description: 'La sabiduría de la Cabalá explica cómo organizar la vida sobre la tierra correctamente',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: 'Alcanzando los mundos superiores',
          description: 'Guía para el descubrimiento espíritual',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: 'Cabalá para aprendices',
          description: 'Principios básicos para una vida plena',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: 'Cabalá para no iniciados',
          description: '',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: 'Rescate de la crisis mundial',
          description: 'Una guía práctica para emerger fortalecidos',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: 'Integrándonos según las leyes de la naturaleza',
          description: '',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: 'La guía para el mundo nuevo',
          description: 'Por qué la garantía mutua es la clave para nuestra recuperación de la crisis global',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: 'Aprender jugando',
          description: 'Guía de juegos constructivos y comunicativos',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: '',
          description: '',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: '',
          description: '',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: '',
          description: '',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: '',
          description: '',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },{
          name: '',
          description: '',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: '',
          description: '',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: '',
          description: '',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: '',
          description: '',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: '',
          description: '',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: '',
          description: '',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: '',
          description: '',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: '',
          description: '',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        },
        {
          name: '',
          description: '',
          tags: 'cabalá',
          img: 'http://google.github.io/material-design-icons/action/svg/ic_description_48px.svg',
          url: 'https://drive.google.com/file/d/0B9Yta2OKAh8xS2I0Ny16SEtUams/view?usp=sharing'
        }
      ]);

      return deferred.promise;
    };
  });
