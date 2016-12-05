import angular from 'angular';

import { SERVER } from './server';

import './app.core';
import './app.groups';
import './app.meetings';

angular
  .module('app', ['app.core', 'app.groups', 'app.meetings'])
  .constant('SERVER', SERVER);
