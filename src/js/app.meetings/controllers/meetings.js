import moment from 'moment';

function MeetingsController (MeetingService, $stateParams, $scope, $cookies, $state) {

  let vm = this;
  vm.id = $stateParams.id;
  vm.userID = $cookies.get('userID');
  vm.meeting = {};
  vm.member = {};
  vm.note = {};
  vm.obj= '';
  vm.note = '';
  vm.question = '';
  vm.addMtgMember = addMtgMember;
  vm.addNote = addNote;
  vm.inputObj = inputObj;
  vm.isMember = true;
  vm.orgShow = false;

  function init () {
    MeetingService.groupMeetingList(vm.id).then((resp) => {
      vm.meeting = resp.data[0];
      console.log(vm.meeting);
      let mtgBool = false;

      vm.meeting.notes.forEach((note) => {
        note.created_at = moment(note.created_at).format("MMM Do YYYY, hh:mm A");
      });

      // console.log("vm.userID is: ", vm.userID, "vm.meeting.users is: ", vm.meeting.users[0].id);
      vm.meeting.users.forEach(user => {
        if (Number(vm.userID) === user.id) { mtgBool = true; }
      });
      if (!mtgBool) { vm.isMember = false; };

      vm.meeting.notes = vm.meeting.notes.filter(function (x) {
        return !x.private || x.user_id === Number(vm.userID);
      });

      if (vm.meeting.group.organizer_id === (Number(vm.userID))) {
        vm.orgShow = true;
      }

    });
  };

  init();

  function addMtgMember () {
    MeetingService.meetingAddMember(vm.id).then((resp) => {
      vm.member = resp.data;
      $state.go('root.profile')
    });
  };

  function addNote () {
    vm.note.user_id = Number(vm.userID)
    MeetingService.addANote(vm.note, vm.id).then((resp) => {

      vm.meeting.notes.push(resp.data);
      vm.note.note = '';
    }
  )};

  function inputObj () {
    MeetingService.addObj(vm.obj, vm.note, vm.question, vm.id).then((resp) => {
      vm.mtg = resp.data;
      vm.organier = true;
      console.log('Hi', vm.mtg.note)
      // vm.obj = vm.mtg.obj;
      // vm.mtg.note = vm.meeting.note;
      // vm.question = vm.mtg.question;
      vm.obj = '';
      vm.note = '';
      vm.question = '';
      // $state.go('root.meeting')
    });
  };

};

MeetingsController.$inject = ['MeetingService', '$stateParams', '$scope', '$cookies', '$state'];
export { MeetingsController };
