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
    console.log("hi from AddMembers func")
    GroupService.groupAddMember($stateParams.id).then((resp) => {
      vm.addMember = resp.data;
      console.log(vm.addMember);
    });
  };

  function memberList () {
    console.log("hi from members func")
    GroupService.groupMemberList($stateParams.id).then((resp) => {
      vm.memberList = resp.data;

      console.log(vm.memberList);
    });
  }

};

GroupDetailController.$inject = ['GroupService', '$state', '$stateParams'];
export { GroupDetailController };
