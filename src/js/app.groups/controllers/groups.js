function GroupsController (GroupService, $state, NgMap) {

  let vm = this;

  vm.groups = [];
  vm.address = {};
  vm.location = {};
  vm.add = add;
  vm.search = search;
  vm.detail = detail;
  vm.showResults = false;

  function init () {
    navigator.geolocation.getCurrentPosition(pos => {
      // console.log("position object is: ", pos);
      // console.log("lattitude is: ", pos.coords.latitude);
      let location = { lat: pos.coords.latitude, lng: pos.coords.longitude }
      // console.log('location: ', location)
      GroupService.nearby(location).then((resp)=> {
        vm.location = resp.data;
        console.log('what is vm: ', vm.location)
        })

    })

    initMap();
  }

  function initMap () {
      navigator.geolocation.getCurrentPosition(pos => {
        console.log("position object is: ", pos);

      var location = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      var mapCanvas = document.getElementById('map');
      var mapOptions = {
          center: location,
          zoom: 16,
          panControl: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      var map = new google.maps.Map(mapCanvas, mapOptions);

        var marker = new google.maps.Marker({
            position: location,
            map: map
        });

        var contentString = '<div class="info-window">' +
                '<h2>You are Here!</h2>' +
                '<div class="info-content">' +
                '</div>' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
      })
    google.maps.event.addDomListener(window, 'load', initMap);
  };


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
      }
    });
  }

  function searchLocator (group, address) {
      var geocoder;
      var map;
      geocoder = new google.maps.Geocoder();
      geocoder.geocode( { 'address': address},  function(results, status) {
        if (status == 'OK') {
          group.lat = results[0].geometry.location.lat();
          group.lng = results[0].geometry.location.lng();
          findSearchedGroup(group);
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

  function detail (group) {
    GroupService.groupDetail(group).then((resp) => {
      vm.groups = resp.data;
    })
  }

  init();

};

GroupsController.$inject = ['GroupService', '$state', 'NgMap'];
export { GroupsController };
