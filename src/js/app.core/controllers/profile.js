import moment from 'moment';
import lodash from 'lodash';

function ProfileController (UserService, GroupService, $state, $rootScope, $stateParams) {

  let vm = this;
  vm.user = {};
  vm.groups = [];
  vm.meetings = [];
  vm.profileGroup = profileGroup;
  vm.meetingsAttending = [];
  vm.attending = attending;

  function init () {
    profileGroup();
  };

  init();

  function profileGroup () {
    UserService.getGroups($stateParams.id).then((resp) => {
      vm.groups = resp.data[0];
      vm.meetings = resp.data[0].meetings;
      vm.meetingsAttending = vm.meetings.map(meeting => meeting.id);
      console.log('vm.groups: ', vm.groups);
      
      vm.groups.created_at = moment(vm.groups.created_at).format("MMM D, YYYY");
      vm.groups.groups.forEach((group) => {
        group.meetings.forEach((meeting) => {
          meeting.time = moment(meeting.time).format("ddd, MMMM Do YYYY, h:mm A");
        });
      });
    });
  };

  function attending(meeting) {
    for (let id of vm.meetingsAttending){
      if (id === meeting.id) return { bold: true };
    }
    return false;
  }
};


ProfileController.$inject = ['UserService', 'GroupService', '$state', '$rootScope', '$stateParams'];
export { ProfileController };
