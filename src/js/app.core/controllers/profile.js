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
    })
  }

  function profileGroup () {
    UserService.getGroups($stateParams.id).then((resp) => {
      vm.user = resp.data;
      console.log('group', vm.user)
    })
  }

  function profileMeeting () {
    UserService.getMeetings($stateParams.id).then((resp) => {
      vm.user = resp.data;
      console.log('meeting', vm.user)
    })
  }

};

ProfileController.$inject = ['UserService', 'GroupService', '$state', '$rootScope', '$stateParams'];
export { ProfileController };
