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
      // controller: 'HomeController as home'
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
    .state('root.groupSearch', {
      url: '/groupSearch',
      templateUrl: 'templates/groupSearch.tpl.html',
      controller: 'GroupsController as groupSearch'
    })
    .state('root.groupDetail', {
      url: '/groupDetail/:id',
      templateUrl: 'templates/groupDetail.tpl.html',
      controller: 'GroupsController as groupDetail'
    })
    .state('root.groupAdd', {
      url: '/groupAdd',
      templateUrl: 'templates/groupAdd.tpl.html',
      controller: 'GroupsController as groupAdd'
    });

  $urlRouterProvider.otherwise('/home');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
