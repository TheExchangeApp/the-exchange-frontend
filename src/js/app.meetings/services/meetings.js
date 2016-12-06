function MeetingService ($http, SERVER, UserService, GroupService, $stateParams) {

  let vm = this;

  vm.meetingAddMember = meetingAddMember;

  function meetingAddMember (meeting) {
    let req = {
      url: `${SERVER}/meeting/${meeting}/join`,
      method: 'POST',
      headers: UserService.getHeaders(),
    };
    return $http(req);
  }

};

MeetingService.$inject = ['$http', 'SERVER', 'UserService', 'GroupService', '$stateParams'];
export { MeetingService };
