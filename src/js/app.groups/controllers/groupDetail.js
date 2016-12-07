function GroupDetailController (GroupService, $stateParams, $state, $cookies) {

  let vm = this;
  vm.id = $stateParams.id;
  vm.userID = $cookies.get('userID');
  vm.group = {};
  vm.address = {};
  vm.memberList = memberList;
  vm.addMember = addMember;
  vm.addMeeting = addMeeting;
  vm.isAMember = true;

  function init () {
    GroupService.groupDetail(vm.id).then((resp) => {
      vm.group = resp.data.group[0];
      // console.log(vm.group);
    });
    memberList();
  };

  init();

  function addMeeting (mtg) {
    mtg.group_id = vm.id;
    GroupService.groupAddMeeting(mtg).then((resp) => {
      vm.addMeeting = resp.data;
      // console.log(vm.addMeeting)
      $state.go('root.home');
    });
  };

  function memberList () {
    GroupService.groupMemberList(vm.id).then((resp) => {
      vm.memberList = resp.data;
      let memBool = false;
      vm.memberList.forEach(member => {
        if (Number(vm.userID) === member.user_id) memBool = true;
      });
      if (!memBool) vm.isAMember = false;
    });
  };

  function addMember () {
    GroupService.groupAddMember(vm.id).then((resp) => {
      if (vm.userID !== vm.memberList.user_id) vm.addMember = resp.data;
    });
  };

};

GroupDetailController.$inject = ['GroupService', '$stateParams', '$state', '$cookies'];
export { GroupDetailController };
