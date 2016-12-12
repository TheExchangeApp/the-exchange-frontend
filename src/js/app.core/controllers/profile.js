import moment from 'moment';

function ProfileController (UserService, GroupService, $state, $rootScope, $stateParams) {

  let vm = this;

  vm.user = {};
  vm.groups = [];
  vm.meetings = [];
  vm.profileGroup = profileGroup;

  function init () {
    profileGroup();
  };

  init();

  function profileGroup () {
    UserService.getGroups($stateParams.id).then((resp) => {
      vm.groups = resp.data[0];
      vm.meetings = resp.data[0].groups;
      console.log('vm.groups: ', vm.groups);
      vm.groups.created_at = moment(vm.groups.created_at).format("MMM D, YYYY");
      vm.groups.meetings.forEach((meeting) => {
        meeting.time = moment(meeting.time).format("hh:mm A");

      });
    });
  }

};

ProfileController.$inject = ['UserService', 'GroupService', '$state', '$rootScope', '$stateParams'];
export { ProfileController };
