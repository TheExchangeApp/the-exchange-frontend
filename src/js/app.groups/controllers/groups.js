function GroupsController (GroupService, $state) {
  let vm = this;

  vm.groups = [];
  vm.add = add;
  vm.search = search;

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

  // $rootScope.$on('searchChange', (event, data) => {
  //   vm.search = GroupService.groupSearch();
  // });
  //
  function search (group) {
    GroupService.groupSearch(group).then((resp) => {
      vm.groups = resp.data;
    });
  }
};

GroupsController.$inject = ['GroupService', '$state'];
export { GroupsController };
