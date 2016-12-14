function LayoutController ($rootScope, UserService, $cookies, $state) {
  let vm = this;
  vm.loggedIn = UserService.isLoggedIn();
  vm.userID = $cookies.get('userID');
  vm.logout = logout;
  vm.about = about;

  $rootScope.$on('loginChange', (event, data) => {
    vm.loggedIn = UserService.isLoggedIn();
    vm.userID = $cookies.get('userID');
  });

  function logout () {
    UserService.logout();
    vm.loggedIn = false;
    vm.userID = null;
  }

  function about () {
    $state.go('root.about')
  }

};

LayoutController.$inject = ['$rootScope', 'UserService', '$cookies', '$state'];
export { LayoutController };
