function GroupsController (GroupService, $state) {

  let vm = this;

  vm.groups = [];
  vm.address = {};
  vm.lag = {};
  vm.lng = {};
  vm.add = add;
  vm.search = search;
  vm.detail = detail;
  vm.showResults = false;

  function init () {

  }

  function add (group) {
    // console.log("the group is: ", group)
    let address = `${group.street} ${group.zip}`
    googleLocator(group, address);
    GroupService.groupAdd(group).then((resp) => {
      console.log(group)
      // $state.go('root.home');
    });
  }

  function search (group) {
    // console.log("the group is: ", group)
    let address = `${group.street} ${group.zip}`
    googleLocator(group, address);
    // console.log(address)
    GroupService.groupSearch(group).then((resp) => {
      vm.groups = resp.data;
      vm.showResults = true;
    });
  }

  function googleLocator (group, address) {
    var geocoder;
    var map;
    geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {
      // console.log('results', results[0])
      if (status == 'OK') {
        group.lat = results[0].geometry.location.lat();
        group.lng = results[0].geometry.location.lng();
        // console.log(results[0].geometry.location.lat());
        // console.log(results[0].geometry.location.lng());
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
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
