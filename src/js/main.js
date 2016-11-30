import angular from 'angular';

import { SERVER } from './server';

import './app.core';
import './app.groups';

angular
  .module('app', ['app.core', 'app.groups'])
  .constant('SERVER', SERVER);
