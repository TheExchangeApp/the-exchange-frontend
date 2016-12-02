function GroupDetailController (GroupService, $state, $stateParams) {

  let vm = this;
  vm.group = {};
  vm.address = {};
  vm.memberList = memberList;
  vm.addMember = addMember;

  function init () {
    GroupService.groupDetail($stateParams.id).then((resp) => {
      vm.group = resp.data.group[0];
      vm.address = resp.data.address[0];
    });
    memberList()
  };

  init();

  function addMember () {
    GroupService.groupAddMember($stateParams.id).then((resp) => {
      vm.addMember = resp.data;
    });
  };

  function memberList () {
    GroupService.groupMemberList($stateParams.id).then((resp) => {
      vm.memberList = resp.data;
    });
  }

};

GroupDetailController.$inject = ['GroupService', '$state', '$stateParams'];
export { GroupDetailController };
