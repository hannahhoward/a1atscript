"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _RouteConfigJs = require("./RouteConfig.js");

var _AnnotationFinderJs = require("../AnnotationFinder.js");

var RouteReader = (function () {
  function RouteReader(componentMapper) {
    _classCallCheck(this, RouteReader);

    this.componentMapper = componentMapper;
  }

  _createClass(RouteReader, [{
    key: "_routeConfigAnnotations",
    value: function _routeConfigAnnotations(component) {
      return new _AnnotationFinderJs.AnnotationFinder(component).annotationsFor(_RouteConfigJs.RouteConfig);
    }
  }, {
    key: "_routeConfig",
    value: function _routeConfig(component) {
      return this._routeConfigAnnotations(component).map(this._convertConfig.bind(this));
    }
  }, {
    key: "_componentName",
    value: function _componentName(component) {
      if (typeof component === "string") {
        return component;
      } else {
        return this.componentMapper.register(component).componentName;
      }
    }
  }, {
    key: "_convertConfig",
    value: function _convertConfig(routeConfigAnnotation) {
      var _this = this;

      var routeDescription = Object.assign({}, routeConfigAnnotation.routeDescription);
      if (routeDescription.component) {
        routeDescription.component = this._componentName(routeDescription.component);
      }

      if (routeDescription.components) {
        var components = {};
        Object.keys(routeDescription.components).forEach(function (key) {
          components[key] = _this._componentName(routeDescription.components[key]);
        });
        routeDescription.components = components;
      }

      return routeDescription;
    }
  }, {
    key: "read",
    value: function read(component) {
      var mapping = this.componentMapper.register(component);
      component.$routeConfig = this._routeConfig(component);
    }
  }]);

  return RouteReader;
})();

exports.RouteReader = RouteReader;