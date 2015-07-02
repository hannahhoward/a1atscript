"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _routerComponentMapperJs = require("./router/ComponentMapper.js");

var _routerRouteReaderJs = require("./router/RouteReader.js");

var _routerRouteInitializerJs = require("./router/RouteInitializer.js");

var _routerRouteConfigJs = require("./router/RouteConfig.js");

Object.defineProperty(exports, "RouteConfig", {
  enumerable: true,
  get: function get() {
    return _routerRouteConfigJs.RouteConfig;
  }
});

var componentMapper = new _routerComponentMapperJs.ComponentMapper();
var routeReader = new _routerRouteReaderJs.RouteReader(componentMapper);
var routeInitializer = new _routerRouteInitializerJs.RouteInitializer(componentMapper);

var Router = {
  componentMapper: componentMapper,
  routeReader: routeReader,
  routeInitializer: routeInitializer
};
exports.Router = Router;