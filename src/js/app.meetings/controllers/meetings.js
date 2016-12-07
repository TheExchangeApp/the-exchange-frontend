function MeetingsController (MeetingService, $stateParams, $scope) {

  let vm = this;
  vm.id = $stateParams.id;
  vm.meeting = {};
  vm.member = {};
  vm.note = '';
  vm.allNotes = [];
  vm.obj = [];
  vm.allObj = [];
  vm.addMtgMember = addMtgMember;
  vm.addNote = addNote;
  vm.inputObj = inputObj;
  vm.getObj = getObj;

  function init () {
    MeetingService.groupMeetingList(vm.id).then((resp) => {
      vm.meeting = resp.data.meeting;
    });

    getNotes();
    getObj();
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

  function inputObj () {
    MeetingService.addObj(vm.obj, vm.id).then((resp) => {
      vm.obj = resp.data;
      // vm.allObj.push(vm.obj);
      // vm.obj = '';
      console.log(vm.obj);
    });
  }

  function getObj () {
    MeetingService.listObj(vm.id).then((resp) => {
      vm.allObj = resp.data;
      console.log(vm.allObj);
    })
  };

};

MeetingsController.$inject = ['MeetingService', '$stateParams', '$scope'];
export { MeetingsController };
