function GroupService ($http, SERVER, UserService) {

  this.groupSearch = groupSearch;
  this.groupSingle = groupSingle;
  this.groupAdd = groupAdd;

  function groupSearch () {
    return $http.get(`${SERVER}/group/search`);
  }

  function groupSingle () {
    return $http.get(`${SERVER}/group/id`);
  }

  function groupAdd (group) {
    let req = {
      url: `${SERVER}/group`,
      data: group,
      method: 'POST',
      headers: UserService.getHeaders()
    };

    return $http(req);
  }

  function groupDelete () {
    let req = {
      url: `${SERVER}/group/id`,
      data: group,
      method: 'DELETE',
      headers: UserService.getHeaders()
    };

    return $http(req);
  }

  function groupEdit () {
    let req = {
      url: `${SERVER}/group/id`,
      data: group,
      method: 'PUT',
      headers: UserService.getHeaders()
    };

    return $http(req);
  }
};

GroupService.$inject = ['$http', 'SERVER', 'UserService'];
export { GroupService };
