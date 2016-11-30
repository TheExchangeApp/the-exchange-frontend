function LayoutController ($rootScope, UserService) {
  let vm = this;

  vm.loggedIn = UserService.isLoggedIn();
  vm.logout = logout;


  $rootScope.$on('loginChange', (event, data) => {
    vm.loggedIn = UserService.isLoggedIn();
  });

  function logout () {
    UserService.logout();
    vm.loggedIn = false;
  }

};

LayoutController.$inject = ['$rootScope', 'UserService'];
export { LayoutController };
