function GroupDetailController (GroupService, $stateParams) {

  let vm = this;
  vm.id = $stateParams.id;
  vm.group = {};
  vm.address = {};
  vm.memberList = memberList;
  vm.addMember = addMember;
  vm.addMeeting = addMeeting;

  function init () {
    GroupService.groupDetail(vm.id).then((resp) => {
      vm.group = resp.data.group[0];
      console.log(vm.group);

    });
    memberList()
  };

  init();

  function addMeeting (meeting) {
    meeting.group_id = vm.id;
    GroupService.groupAddMeeting(meeting).then((resp) => {
      vm.addMeeting = resp.data;
      console.log(vm.addMeeting)
    });
  };

  function addMember () {
    GroupService.groupAddMember(vm.id).then((resp) => {
      vm.addMember = resp.data;
    });
  };

  function memberList () {
    GroupService.groupMemberList(vm.id).then((resp) => {
      vm.memberList = resp.data;
    });
  };

};

GroupDetailController.$inject = ['GroupService', '$stateParams'];
export { GroupDetailController };
