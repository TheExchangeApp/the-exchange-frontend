function GroupDetailController (GroupService, $state, $stateParams) {

  let vm = this;
  vm.group = {};
  vm.address = {};
  vm.memberList = {};
  vm.addMember = {};

  function init () {
    GroupService.groupDetail($stateParams.id).then((resp) => {
      vm.group = resp.data.group[0];
      vm.address = resp.data.address[0];
    });
  };

  init();

  function memberList (user) {
    console.log("hi from members func")
    GroupService.groupMembers($stateParams.id).then((resp) => {
      vm.memberList = resp.data.members[0];
      console.log(vm.memberList);
    });
  }

  function addMember (user) {
    console.log("hi from members func")

    GroupService.groupAddMember($stateParams.id).then((resp) => {
      vm.addMember = resp.data;
    });
  };

};

GroupDetailController.$inject = ['GroupService', '$state', '$stateParams'];
export { GroupDetailController };
