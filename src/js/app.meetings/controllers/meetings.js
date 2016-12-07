function MeetingsController (MeetingService, $stateParams) {

  let vm = this;
  vm.id = $stateParams.id;
  vm.meeting = {};
  vm.member = {};
  vm.note = [];
  vm.addMtgMember = addMtgMember;
  vm.addNote = addNote;
  vm.allNotes = {};

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

  function addNote (note) {
    console.log("hi from note")
    MeetingService.addANote(note, vm.id).then((resp) => {
      vm.note = resp.data;
      console.log(vm.note);
    })
  };

  function getNotes () {
    MeetingService.noteList(vm.id).then((resp) => {
      vm.allNotes = resp.data[0];
      console.log(vm.allNotes);
    })
  };

};

MeetingsController.$inject = ['MeetingService', '$stateParams'];
export { MeetingsController };
