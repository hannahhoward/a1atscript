"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _SelectorMatcherJs = require("./SelectorMatcher.js");

var _SelectorMatcherJs2 = _interopRequireDefault(_SelectorMatcherJs);

var Ng2DirectiveDefinitionObject = (function () {
  function Ng2DirectiveDefinitionObject(controller, annotation) {
    var template = arguments[2] === undefined ? {} : arguments[2];
    var bind = arguments[3] === undefined ? null : arguments[3];

    _classCallCheck(this, Ng2DirectiveDefinitionObject);

    this._annotation = annotation;
    this._controller = controller;
    this._template = template;
    this._bind = bind;
  }

  _createClass(Ng2DirectiveDefinitionObject, [{
    key: "selectorMatcher",
    get: function () {
      this._selectorMatcher = this._selectorMatcher || new _SelectorMatcherJs2["default"](this._annotation.selector);
      return this._selectorMatcher;
    }
  }, {
    key: "restrict",
    get: function () {
      return this.selectorMatcher.restrict;
    }
  }, {
    key: "controllerAs",
    get: function () {
      return this._annotation.controllerAs || this.name;
    }
  }, {
    key: "bindToController",
    get: function () {
      // bindToController as object syntax only supported on 1.4
      if (angular.version.major == 1 && angular.version.minor >= 4) {
        return this._bind || this._annotation.properties;
      } else {
        return true;
      }
    }
  }, {
    key: "scope",
    get: function () {
      // bindToController as object syntax only supported on 1.4
      if (angular.version.major == 1 && angular.version.minor >= 4) {
        return {};
      } else {
        return this._bind || this._annotation.properties;
      }
    }
  }, {
    key: "template",
    get: function () {
      return this._template.template;
    }
  }, {
    key: "templateUrl",
    get: function () {
      return this._template.templateUrl;
    }
  }, {
    key: "transclude",
    get: function () {
      return this._annotation.transclude;
    }
  }, {
    key: "require",
    get: function () {
      return this._annotation.require;
    }
  }, {
    key: "controller",
    get: function () {
      return this._controller;
    }
  }, {
    key: "name",
    get: function () {
      return this.selectorMatcher.name;
    }
  }, {
    key: "factoryFn",
    get: function () {
      var _this = this;

      return function () {
        return {
          scope: _this.scope,
          restrict: _this.restrict,
          template: _this.template,
          require: _this.require,
          transclude: _this.transclude,
          templateUrl: _this.templateUrl,
          controller: _this.controller,
          bindToController: _this.bindToController,
          controllerAs: _this.controllerAs
        };
      };
    }
  }]);

  return Ng2DirectiveDefinitionObject;
})();

exports["default"] = Ng2DirectiveDefinitionObject;
module.exports = exports["default"];