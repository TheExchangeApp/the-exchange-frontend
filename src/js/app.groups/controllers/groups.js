function GroupsController (GroupService, $state) {
  let vm = this;

  vm.groups = [];
  vm.add = add;
  vm.search = search;
  vm.showResults = false;

  function add (group) {

    GroupService.groupAdd(group).then((resp) => {
      $state.go('root.home');
    });
  }

  function init () {
    GroupService.groupSearch().then((resp) => {
      vm.groups = resp.data;

    });
  }

  init();

  function search (group) {
    GroupService.groupSearch(group).then((resp) => {
      vm.groups = resp.data;
      console.log(vm.groups);
      vm.showResults = true;
    });
  }
};

GroupsController.$inject = ['GroupService', '$state'];
export { GroupsController };
