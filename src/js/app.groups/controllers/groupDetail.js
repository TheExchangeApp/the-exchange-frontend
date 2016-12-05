function GroupDetailController (GroupService, $state, $stateParams) {

  let vm = this;
  vm.id = $stateParams.id;
  vm.group = {};
  vm.address = {};
  vm.memberList = memberList;
  vm.addMember = addMember;

  function init () {
    GroupService.groupDetail(vm.id).then((resp) => {
      console.log(resp.data);
      vm.group = resp.data.group;
    });
    memberList()
  };

  init();

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

GroupDetailController.$inject = ['GroupService', '$state', '$stateParams'];
export { GroupDetailController };
