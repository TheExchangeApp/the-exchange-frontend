function MeetingService ($http, SERVER, UserService, GroupService, $stateParams) {

  let vm = this;
  vm.meetingAddMember = meetingAddMember;
  vm.groupMeetingList = groupMeetingList;
  vm.addANote = addANote;
  vm.noteList = noteList;
  vm.listObj = listObj;
  vm.addObj = addObj;
  vm.obj= '';
  vm.note = '';
  vm.question = '';

  function meetingAddMember (meeting) {
    let req = {
      url: `${SERVER}/meeting/${meeting}/join`,
      method: 'POST',
      headers: UserService.getHeaders()
    };
    return $http(req);
  }

  function groupMeetingList (meeting) {
    let req = {
      url: `${SERVER}/meeting/${meeting}/`,
      method: 'GET',
      headers: UserService.getHeaders()
    };
    return $http(req);
  }

  function addANote (note, meeting) {
    let req = {
      url: `${SERVER}/meeting/${meeting}/note`,
      method: 'POST',
      data: note,
      headers: UserService.getHeaders()
    };
    return $http(req);
  }

  function noteList (meeting) {
    let req = {
      url: `${SERVER}/meeting/${meeting}/note`,
      method: 'GET',
      headers: UserService.getHeaders()
    };
    return $http(req);
  }

  function addObj (obj, note, question, meeting) {
    let req = {
      url: `${SERVER}/meeting/${meeting}/objective`,
      method: 'PUT',
      data: {objective: obj, note: note, question: question},
      headers: UserService.getHeaders()
    };
    console.log("request is:", req)
    return $http(req);
  }

  function listObj (meeting) {
    let req = {
      url: `${SERVER}/meeting/${meeting}/objective`,
      method: 'GET',
      headers: UserService.getHeaders()
    };
    return $http(req);
  }

};

MeetingService.$inject = ['$http', 'SERVER', 'UserService', 'GroupService', '$stateParams'];
export { MeetingService };
