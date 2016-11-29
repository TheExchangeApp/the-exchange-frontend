function ProductService ($http, SERVER, UserService) {

  this.groupSearch = groupSearch;
  this.groupSingle = groupSingle;
  this.groupAdd = groupAdd;

  function groupSearch () {
    return $http.get(`${SERVER}/group/search`);
  }

  function groupSingle () {
    return $http.get(`${SERVER}/group/id`);
  }

  function groupAdd (product) {
    let req = {
      url: `${SERVER}/group`,
      data: product,
      method: 'POST',
      headers: UserService.getHeaders()
    };

    return $http(req);
  }

};

ProductService.$inject = ['$http', 'SERVER', 'UserService'];
export { ProductService };
