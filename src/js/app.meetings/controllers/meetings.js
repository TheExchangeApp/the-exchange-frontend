function MeetingsController (MeetingService, $stateParams, $scope) {

  let vm = this;
  vm.id = $stateParams.id;
  vm.meeting = {};
  vm.member = {};
  vm.note = '';
  vm.addMtgMember = addMtgMember;
  vm.addNote = addNote;
  vm.allNotes = [];

  function init () {
    MeetingService.groupMeetingList(vm.id).then((resp) => {
      vm.meeting = resp.data.meeting;
    });

    getNotes();
  };

  init();

  function addMtgMember () {
    MeetingService.meetingAddMember(vm.id).then((resp) => {
      vm.member = resp.data;
      console.log(vm.member)
    });
  };

  function addNote () {
    MeetingService.addANote(vm.note, vm.id).then((resp) => {
      vm.note = resp.data;
      vm.allNotes.push(vm.note);
      vm.note = '';
      console.log(vm.note);
    });
  };

  function getNotes () {
    MeetingService.noteList(vm.id).then((resp) => {
      vm.allNotes = resp.data;
      console.log(vm.allNotes);
    })
  };

};

MeetingsController.$inject = ['MeetingService', '$stateParams', '$scope'];
export { MeetingsController };
