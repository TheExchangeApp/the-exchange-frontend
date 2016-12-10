import angular from 'angular';
import 'ngMap';

import { SERVER } from './server';

import './app.core';
import './app.groups';
import './app.meetings';

angular
  .module('app', ['app.core', 'app.groups', 'app.meetings', 'ngMap'])
  .constant('SERVER', SERVER);
