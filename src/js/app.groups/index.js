import angular from 'angular';

import { GroupsController } from "./controllers/groups";
import { GroupDetailController } from "./controllers/groupDetail";

import { GroupService } from "./services/groups";

angular
  .module('app.groups', [])
  .controller('GroupsController', GroupsController)
  .controller('GroupDetailController', GroupDetailController)
  .service('GroupService', GroupService);
