function ProfileController (UserService, GroupService, $state, $rootScope, $stateParams) {

  let vm = this;

  vm.groups = [];
  vm.user = {};
  vm.profile = profile;

  function init () {
    profile()
  };

  init();

  function profile () {
    UserService.getProfile($stateParams.id).then((resp) => {
      vm.user = resp.data;
      console.log(vm.user)
    })
  }

};

ProfileController.$inject = ['UserService', 'GroupService', '$state', '$rootScope', '$stateParams'];
export { ProfileController };
