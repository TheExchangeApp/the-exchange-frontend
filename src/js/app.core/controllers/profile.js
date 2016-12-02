function ProfileController (UserService, GroupService, $state, $rootScope, $stateParams) {

  let vm = this;

  vm.groups = [];
  vm.user = {};
  vm.profile = profile;
  vm.profileGroup = profileGroup;
  // vm.profileMeeting = profileMeeting;

  function init () {
    profile()
    profileGroup()
  };

  init();

  function profile () {
    console.log("profile!")
    UserService.getProfile($stateParams.id).then((resp) => {
      vm.user = resp.data
      console.log('profile', vm.user);
    })
  }

  function profileGroup () {
    console.log("groups!")
    UserService.getGroups($stateParams.id).then((resp) => {
      vm.user = resp.data;
      console.log('group', vm.user)
    })
  }

  // function profileMeeting () {
  //   console.log("meetings!")
  //   UserService.getMeetings($stateParams.id).then((resp) => {
  //     vm.user = resp.data;
  //     console.log('meeting', vm.user)
  //   })
  // }

};

ProfileController.$inject = ['UserService', 'GroupService', '$state', '$rootScope', '$stateParams'];
export { ProfileController };
