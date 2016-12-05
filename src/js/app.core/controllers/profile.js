function ProfileController (UserService, GroupService, $state, $rootScope, $stateParams) {

  let vm = this;

  vm.user = {};
  vm.groups = [];
  vm.meetings = [];
  vm.profile = profile;
  vm.profileGroup = profileGroup;
  vm.profileMeetings = profileMeetings;

  function init () {
    profile()
    profileGroup()
    profileMeetings()
  };

  init();

  function profile () {
    UserService.getProfile($stateParams.id).then((resp) => {
      vm.user = resp.data;
      console.log('profile', vm.user);
    })
  }

  function profileGroup () {
    UserService.getGroups($stateParams.id).then((resp) => {
      vm.groups = resp.data;
      console.log('group', vm.groups)
    })
  }

  function profileMeetings () {
    console.log("meetings!")
    UserService.getMeetings($stateParams.id).then((resp) => {
      vm.meetings = resp.data;
      console.log('meeting', vm.meetings)
    })
  }

};

ProfileController.$inject = ['UserService', 'GroupService', '$state', '$rootScope', '$stateParams'];
export { ProfileController };
