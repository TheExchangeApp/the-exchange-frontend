function GroupsController (GroupService, $state) {

  let vm = this;

  vm.groups = [];
  vm.add = add;
  vm.search = search;
  vm.detail = detail;
  vm.showResults = false;

  function init () {

  }

  function add (group) {
    GroupService.groupAdd(group).then((resp) => {
      $state.go('root.home');
    });
  }

  function search (group) {
    GroupService.groupSearch(group).then((resp) => {
      vm.groups = resp.data;
      console.log(vm.groups);
      vm.showResults = true;
    });
  }

  function detail (group) {
    GroupService.groupDetail(group).then((resp) => {
      vm.groups = resp.data;
    })
  }

  init();
};

GroupsController.$inject = ['GroupService', '$state'];
export { GroupsController };
