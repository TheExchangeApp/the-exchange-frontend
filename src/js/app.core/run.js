function run ($rootScope, $state, UserService) {

  $rootScope.$on('$stateChangeStart', (event, toState) => {

    if (invalidRoute(toState)) {
      event.preventDefault();
      $state.go('root.login');
    }

  });

  function invalidRoute (toState) {
    let loggedIn = UserService.isLoggedIn();
    let safeRoutes = ['root.home', 'root.login', 'root.register', 'root.about'];

    return !(loggedIn || safeRoutes.includes(toState.name));
  };

};

run.$inject = ['$rootScope', '$state', 'UserService'];
export { run };
