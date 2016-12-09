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
    .state('root.profile', {
      url: '/profile/:id',
      templateUrl: 'templates/profile.tpl.html',
      controller: 'ProfileController as profile'
    })
    .state('root.groupSearch', {
      url: '/groupSearch',
      templateUrl: 'templates/groupSearch.tpl.html',
      controller: 'GroupsController as groupSearch'
    })
    .state('root.groupDetail', {
      url: '/groupDetail/:id',
      templateUrl: 'templates/groupDetail.tpl.html',
      controller: 'GroupDetailController as groupDetail'
    })
    .state('root.groupAdd', {
      url: '/groupAdd',
      templateUrl: 'templates/groupAdd.tpl.html',
      controller: 'GroupsController as groupAdd'
    })
    .state('root.groupAddMtgs', {
      url: '/groupDetail/:id/groupAddMtgs',
      templateUrl: 'templates/groupAddMtgs.tpl.html',
      controller: 'GroupDetailController as meetings'
    })
    .state('root.meeting', {
      url: '/meeting/:id',
      templateUrl: 'templates/meeting.tpl.html',
      controller: 'MeetingsController as meetingDetail'
    })
    .state('root.nearMe', {
      url: '/nearMe',
      templateUrl: 'templates/nearMe.tpl.html',
      controller: 'GroupController as groupSearch'
    });


  $urlRouterProvider.otherwise('/home');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
