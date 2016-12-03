import angular from 'angular';

import { GroupsController } from "./controllers/groups";
import { GroupDetailController } from "./controllers/groupDetail";
import { MeetingsController } from "./controllers/meetings";

import { GroupService } from "./services/groups";

angular
  .module('app.groups', [])
  .controller('GroupsController', GroupsController)
  .controller('GroupDetailController', GroupDetailController)
  .controller('MeetingsController', MeetingsController)
  .service('GroupService', GroupService);
