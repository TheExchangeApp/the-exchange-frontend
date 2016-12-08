function MeetingsController (MeetingService, $stateParams, $scope, $cookies) {

  let vm = this;
  vm.id = $stateParams.id;
  vm.userID = $cookies.get('userID');
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
  vm.isMember = true;

  function init () {
    MeetingService.groupMeetingList(vm.id).then((resp) => {
      vm.meeting = resp.data[0];
      console.log(vm.meeting);
      let mtgBool = false;
      if (Number(vm.userID) === vm.meeting.users[0].user_id) { mtgBool = true; }
      if (!mtgBool) { vm.isMember = false; }
    });

    getNotes();
    getObj();
  };

  init();

  function addMtgMember () {
    MeetingService.meetingAddMember(vm.id).then((resp) => {
      vm.member = resp.data;
      // console.log(vm.member)
    });
  };

  function addNote () {
    MeetingService.addANote(vm.note, vm.id).then((resp) => {
      vm.note = resp.data;
      vm.allNotes.push(vm.note);
      vm.note = '';
      // console.log(vm.note);
    });
  };

  function getNotes () {
    MeetingService.noteList(vm.id).then((resp) => {
      vm.allNotes = resp.data;
      // console.log(vm.allNotes);
    })
  };

  function inputObj () {
    MeetingService.addObj(vm.obj, vm.id).then((resp) => {
      vm.obj = resp.data;
      // vm.allObj.push(vm.obj);
      // vm.obj = '';
      // console.log(vm.obj);
    });
  }

  function getObj () {
    MeetingService.listObj(vm.id).then((resp) => {
      vm.allObj = resp.data;
      // console.log(vm.allObj);
    })
  };

};

MeetingsController.$inject = ['MeetingService', '$stateParams', '$scope', '$cookies'];
export { MeetingsController };
