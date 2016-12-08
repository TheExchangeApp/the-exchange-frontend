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
    let address = `${group.street} ${group.zip}`;
    googleLocator(group, address);
  }

  function search (group) {
    let address = `${group.street} ${group.zip}`;
    searchLocator(group, address);
  }

  function googleLocator (group, address) {
    var geocoder;
    var map;
    geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address},  function(results, status) {
      // console.log('results', results[0])
      if (status == 'OK') {
        group.lat = results[0].geometry.location.lat();
        group.lng = results[0].geometry.location.lng();
        addFinishedGroup(group);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

    function searchLocator (group, address) {
      var geocoder;
      var map;
      geocoder = new google.maps.Geocoder();
      geocoder.geocode( { 'address': address},  function(results, status) {
        // console.log('results', results[0])
        if (status == 'OK') {
          group.lat = results[0].geometry.location.lat();
          group.lng = results[0].geometry.location.lng();
          findSearchedGroup(group);
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }

    function addFinishedGroup (group) {
      GroupService.groupAdd(group).then((resp) => {
        vm.group = resp.data;
        console.log(group)
        $state.go('root.home');
      });
    }

    function findSearchedGroup (group) {
      GroupService.groupSearch(group).then((resp) => {
        vm.groups = resp.data;
        console.log(group)
        vm.showResults = true;
      });
    }

    // function kids (group, care) {
    //   if (group.childcare == true) {
    //     return "yes";
    //   } else {
    //     return "no";
    //   };
    // };

  function detail (group) {
    GroupService.groupDetail(group).then((resp) => {
      vm.groups = resp.data;
    })
  }

  init();
  
};

GroupsController.$inject = ['GroupService', '$state'];
export { GroupsController };
