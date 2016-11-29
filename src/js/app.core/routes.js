function routerConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html',
      controller: 'LayoutController as layout'
    })
    .state('root.home', {
      url: '/home',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController as home'
    })
    .state('root.register', {
      url: '/register',
      templateUrl: 'templates/register.tpl.html',
      controller: 'RegisterController as register'
    })
    .state('root.login', {
      url: '/login',
      templateUrl: 'templates/login.tpl.html',
      controller: 'LoginController as login'
    })
    .state('root.group-search', {
      url: '/group-search',
      templateUrl: 'templates/group-search.tpl.html',
      controller: 'GroupSearchController as groupSearch'
    })
    .state('root.group-single', {
      url: '/group-single',
      templateUrl: 'templates/group-single.tpl.html',
      controller: 'GroupSingleController as groupSingle'
    })
    .state('root.group-add', {
      url: '/group-add',
      templateUrl: 'templates/group-add.tpl.html',
      controller: 'GroupAddController as groupAdd'
    });

  $urlRouterProvider.otherwise('/home');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
