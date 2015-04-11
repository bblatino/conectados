'use strict';

angular.module('conectadosApp')
  .service('authService', function authService($firebase, Config, localStorageService) {
    var auth = this;
    var ref = new Firebase(Config.backend);

    this.user = ref.getAuth();

    /**
     * Create a new user from any type of user object.
     *
     * @param userObj
     */
    function saveNewUser(userObj) {
      ref.child('users').child(userObj.id).set(userObj);
    }

    /**
     * Return if some user is actually logged.
     *
     * @returns {boolean}
     */
    this.isLogged = function() {
      return auth.user !== null;
    };

    /**
     * Login an user with user and password method.
     *
     * @param userObj
     * @param cb
     * @param cbOnReg
     */
    this.loginWithPW = function(userObj, cb, cbOnReg) {
      ref.authWithPassword(userObj,
        function onLogged(error, authData) {
          if (error) {
            cb(error);
          }
          else {
            auth.user = authData;
            localStorageService.set('user', authData);
            cb(authData);
            cbOnReg && cbOnReg(true);
          }
        });
    };

    /**
     * Create a new user and login after was created.
     *
     * @param userObj
     * @param cb
     */
    this.createUser = function(userObj, cb) {
      ref.createUser(userObj, function(error, userData) {
        if (error) {
          switch (error.code) {
          case 'EMAIL_TAKEN':
            console.log('La nueva cuenta de usuario no puede ser creada porque el correo electrónico ya está en uso.');
            break;
          case 'INVALID_EMAIL':
            console.log('El correo electrónico especificado no es un correo electrónico válido.');
            break;
          default:
            console.log('Error creado el usuario:', error);
          }
        }
        else {
          auth.loginWithPW(userData, function(authData) {
            saveNewUser(authData);
          }, cb);
        }
      });
    };

    /**
     * Logout the current user.
     *
     * @returns {boolean}
     */
    this.logout = function() {
      ref.unauth();
      localStorageService.set('user', undefined);
      return true;
    };

  });
