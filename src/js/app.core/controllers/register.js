function RegisterController (UserService, $state) {

  let vm = this;

  vm.registerUser = registerUser;

  function registerUser (user) {
    UserService.register(user).then((resp) => {
      $state.go('root.home');
    });
  };
};

RegisterController.$inject = ['UserService', '$state'];
export { RegisterController };
