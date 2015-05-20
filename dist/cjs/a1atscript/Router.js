"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _routerComponentMapperJs = require("./router/ComponentMapper.js");

var _routerRouteReaderJs = require("./router/RouteReader.js");

var _routerRouteInitializerJs = require("./router/RouteInitializer.js");

var _routerRouteConfigJs = require("./router/RouteConfig.js");

_defaults(exports, _interopRequireWildcard(_routerRouteConfigJs));

var componentMapper = new _routerComponentMapperJs.ComponentMapper();
var routeReader = new _routerRouteReaderJs.RouteReader(componentMapper);
var routeInitializer = new _routerRouteInitializerJs.RouteInitializer(componentMapper);

var Router = {
  componentMapper: componentMapper,
  routeReader: routeReader,
  routeInitializer: routeInitializer
};
exports.Router = Router;