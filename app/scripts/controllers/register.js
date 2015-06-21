'use strict';

angular.module('conectadosApp')
  .controller('RegisterCtrl', function ($scope, authService, $mdToast, $location) {
    var vm = this;

    this.register = createNewUser;

    function createNewUser(form) {

      // Validate if password ok.
      if (form.password.$viewValue !== form.passwordrepeated.$viewValue) {
        // Error message.
        $mdToast.show($mdToast.simple()
          .content('Las contraseñas tiene que ser iguales')
          .position('top right'));

        form.$setPristine();
        clearForm();
        return;
      }

      // Ceate user object.
      var userObj = {
        email: vm.user.email,
        password: vm.user.password
      };

      authService.createUser(userObj, userCreated);

      function userCreated(response) {
        // Handle error creating a new user.
        if (response.name === 'Error') {
          $mdToast.show($mdToast.simple()
            .content(response.message_spa)
            .hideDelay(5000)
            .position('top right'));

          form.$setPristine();
          clearForm();
          return;
        }

        if (response === true) {
          $mdToast.show($mdToast.simple()
            .content('Usuario Registrado')
            .position('top right'));
        }

        clearForm();
        // Back to the principal system
        $location.path('#/grupojoven');
      }
    }

    function clearForm() {
      // Clear wrote data before do the login.
      vm.user = {};
    }
  });
