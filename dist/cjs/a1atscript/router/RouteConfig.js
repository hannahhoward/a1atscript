'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ToAnnotationJs = require('../ToAnnotation.js');

var RouteConfig = (function () {
  function RouteConfig(routeDescription) {
    _classCallCheck(this, _RouteConfig);

    this.routeDescription = routeDescription;
  }

  var _RouteConfig = RouteConfig;
  RouteConfig = (0, _ToAnnotationJs.ToAnnotation)(RouteConfig) || RouteConfig;
  return RouteConfig;
})();

exports.RouteConfig = RouteConfig;