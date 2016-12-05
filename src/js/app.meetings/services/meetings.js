function MeetingService ($http, SERVER, UserService, GroupService, $stateParams) {

  let vm = this;

  vm.meetingAddMember = meetingAddMember;

  function meetingAddMember (meeting) {
    let req = {
      url: `${SERVER}/meeting/${meeting}/join`,
      method: 'POST',
      headers: UserService.getHeaders(),
      // params: meeting
    };
    return $http(req);
  }

  // function groupMeetingList (group) {
  //   let req = {
  //     url: `${SERVER}/group/${group}/meeting`,
  //     method: 'GET',
  //     headers: UserService.getHeaders()
  //   };
  //   return $http(req);
  // }

};

MeetingService.$inject = ['$http', 'SERVER', 'UserService', 'GroupService', '$stateParams'];
export { MeetingService };
