function ProfileController (UserService, GroupService, $state, $rootScope, $stateParams) {

  let vm = this;

  vm.groups = [];
  vm.profileGroup = profileGroup;

  function init () {
    profileGroup()
  };

  init();

  function profileGroup () {
    UserService.getGroups($stateParams.id).then((resp) => {
      vm.groups = resp.data[0];
      console.log('group', vm.groups)
    })
  }

};

ProfileController.$inject = ['UserService', 'GroupService', '$state', '$rootScope', '$stateParams'];
export { ProfileController };
