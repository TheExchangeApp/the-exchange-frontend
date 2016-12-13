function GroupsController (GroupService, $state, NgMap) {

  let vm = this;

  vm.groups = [];
  vm.address = {};
  vm.location = {};
  vm.add = add;
  vm.search = search;
  vm.nearme = nearme;
  vm.detail = detail;
  vm.showResults = false;
  vm.map = null;

  function init () {
    initMap();
    navigator.geolocation.getCurrentPosition(pos => {
      // console.log("position object is: ", pos);
      // console.log("lattitude is: ", pos.coords.latitude);
      let location = { lat: pos.coords.latitude, lng: pos.coords.longitude }
      // console.log('location: ', location)
      GroupService.nearby(location).then((resp)=> {
        vm.location = resp.data;
        console.log('addresses are: ', vm.location)
        vm.location.forEach(group => {
          var pos = {
            lat: parseFloat(group.address.lat),
            lng: parseFloat(group.address.lng)
          }
          var marker = new google.maps.Marker({
            position: pos,
            map: vm.map
          });
        });
      })
    });
  }

  function initMap () {
      navigator.geolocation.getCurrentPosition(pos => {
        // console.log("position object is: ", pos);
      var location = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      var mapCanvas = document.getElementById('map');
      var mapOptions = {
          center: location,
          zoom: 16,
          panControl: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      vm.map = new google.maps.Map(mapCanvas, mapOptions);

        var marker = new google.maps.Marker({
            position: location,
            map: vm.map
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
            infowindow.open(vm.map, marker);
        });
      })
    google.maps.event.addDomListener(window, 'load', initMap);
  };


  function add (group) {
    let address = `${group.street} ${group.zip}`;
    googleLocator(group, address);
  }

  function googleLocator (group, address) {
    var geocoder;
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

    function search (group) {
      GroupService.groupSearch(group).then((resp) => {
        vm.groups = resp.data;
        console.log(group)
        vm.showResults = true;
      })
    }

    function nearme (miles) {
      navigator.geolocation.getCurrentPosition(pos => {
      let location = { lat: pos.coords.latitude, lng: pos.coords.longitude }
      location.miles = miles;
      console.log('mile search: ', location)
      GroupService.nearby(location).then((resp)=> {
        console.log("searched")
        vm.location = resp.data;
        console.log('addresses are: ', vm.location)
        let markersArray =[];
        vm.location.forEach(group => {
          var pos = {
            lat: parseFloat(group.address.lat),
            lng: parseFloat(group.address.lng)
          }
          var marker = new google.maps.Marker({
            position: pos,
            map: vm.map
          });
          markersArray.push(pos);
        });
        resetBounds(markersArray)
      })
    });
  }

  function resetBounds(array){
    var latlngbounds = new google.maps.LatLngBounds();
    array.forEach(function (waypoint){
      latlngbounds.extend(waypoint)
    })
    vm.map.fitBounds(latlngbounds);
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
