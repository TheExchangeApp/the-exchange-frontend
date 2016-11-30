import angular from 'angular';

import { GroupsController } from "./controllers/groups";

import { GroupService } from "./services/groups";

angular
  .module('app.groups', [])
  .controller('GroupsController', GroupsController)
  .service('GroupService', GroupService);
