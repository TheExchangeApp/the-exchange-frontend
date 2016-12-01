function GroupDetailController (GroupService, $state, $stateParams) {

  let vm = this;
  vm.groups = [];
  vm.group = {};
  vm.address = {};

  function init () {

    GroupService.groupDetail($stateParams.id).then((resp) => {
      vm.group = resp.data.group[0];
      vm.address = resp.data.address[0];
    });
  };
  init();
};

GroupDetailController.$inject = ['GroupService', '$state', '$stateParams'];
export { GroupDetailController };
