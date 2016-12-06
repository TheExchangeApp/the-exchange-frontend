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
    console.log("the group is: ", group)
    let address = `${group.street} ${group.zip}`
    console.log(address)
    GroupService.groupSearch(group).then((resp) => {
      vm.groups = resp.data;
      vm.showResults = true;
      googlelocator(address);
    });
  }

  function googlelocator (address) {
    var geocoder;
    var map;
    geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {
      console.log('results', results)
      if (status == 'OK') {
        results[0].geometry.location;
        // var marker = new google.maps.Marker({
        //   map: map,
        //   position: results[0].geometry.location
        // });
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
