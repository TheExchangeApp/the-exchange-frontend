function LoginController (UserService, $state, $rootScope) {
  let vm = this;

  vm.activate = activate;

  function activate (user) {
    UserService.login(user).then(
      resp => {
        UserService.setUser(resp.data);
        $rootScope.$broadcast('loginChange', {});
        $state.go('root.home');
      },
      errors => {
        console.log(errors.data.error);
      }
    );
  };

};

LoginController.$inject = ['UserService', '$state', '$rootScope'];
export { LoginController };
