import angular from 'angular';

import { MeetingsController } from "./controllers/meetings";
import { MeetingService } from "./services/meetings";

angular
  .module('app.meetings', [])
  .controller('MeetingsController', MeetingsController)
  .service('MeetingService', MeetingService);
