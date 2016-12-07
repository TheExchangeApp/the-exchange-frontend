function MeetingService ($http, SERVER, UserService, GroupService, $stateParams) {

  let vm = this;
  vm.meetingAddMember = meetingAddMember;
  vm.groupMeetingList = groupMeetingList;
  vm.addANote = addANote;
  vm.noteList = noteList;

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
      params: { note: note },
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

  function addObj () {
    let req = {
      url: `${SERVER}/meeting/${meeting}/objective`,
      method: 'POST',
      params: data,
      headers: UserService.getHeaders()
    };
    return $http(req);
  }

  function listObj () {
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
