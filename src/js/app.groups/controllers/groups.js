function GroupsController (GroupService, $state) {
 console.log('hello')
  let vm = this;

  vm.groups = [];
  vm.add = add;

  function add (group) {

    GroupService.groupAdd(group).then((resp) => {
      console.log(group)
      $state.go('root.home');
    });
  }

  function init () {
    GroupService.groupSearch().then((resp) => {
      vm.groups = resp.data;
    });
  }

  init();
};

GroupsController.$inject = ['GroupService', '$state'];
export { GroupsController };
