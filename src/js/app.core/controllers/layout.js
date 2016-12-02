function LayoutController ($rootScope, UserService, $cookies) {
  let vm = this;
  vm.loggedIn = UserService.isLoggedIn();
  vm.userID = $cookies.get('userID');
  vm.logout = logout;

  $rootScope.$on('loginChange', (event, data) => {
    vm.loggedIn = UserService.isLoggedIn();
    vm.userID = $cookies.get('userID');

  });

  function logout () {
    UserService.logout();
    vm.loggedIn = false;
    vm.userID = null;
  }

};

LayoutController.$inject = ['$rootScope', 'UserService', '$cookies'];
export { LayoutController };
