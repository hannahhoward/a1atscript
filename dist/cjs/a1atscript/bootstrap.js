"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrap = bootstrap;

var _InjectorJs = require("./Injector.js");

var _RouterJs = require("./Router.js");

function bootstrap(appModule) {
  var appPrefix = arguments[1] === undefined ? "" : arguments[1];

  var injector = new _InjectorJs.Injector(appPrefix);
  var moduleName = injector.instantiate(appModule);
  _RouterJs.Router.routeInitializer.initialize(moduleName, appModule);
}