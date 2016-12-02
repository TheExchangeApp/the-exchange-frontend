import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import { run } from "./run";
import { routerConfig } from "./routes";

import { LayoutController } from "./controllers/layout";
import { RegisterController } from "./controllers/register";
import { LoginController } from "./controllers/login";
import { ProfileController } from "./controllers/profile";

import { UserService } from "./services/user";

angular
  .module('app.core', ['ui.router', 'ngCookies'])
  .config(routerConfig)
  .run(run)
  .controller('LayoutController', LayoutController)
  .controller('RegisterController', RegisterController)
  .controller('LoginController', LoginController)
  .controller('ProfileController', ProfileController)
  .service('UserService', UserService);
