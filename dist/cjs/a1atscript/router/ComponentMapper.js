"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _annotationsJs = require("../annotations.js");

var _ng2DirectivesComponentJs = require("../ng2Directives/Component.js");

var _AnnotationFinderJs = require("../AnnotationFinder.js");

var _ng2DirectivesSelectorMatcherJs = require("../ng2Directives/SelectorMatcher.js");

var _ng2DirectivesSelectorMatcherJs2 = _interopRequireDefault(_ng2DirectivesSelectorMatcherJs);

var DEFAULT_CONTROLLER_SUFFIX = "Controller";
var DEFAULT_COMPONENT_PREFIX = "a1atscript";
var DEFAULT_CONTROLLER_PREFIX = "A1AtScript";

var ComponentMapping = (function () {
  function ComponentMapping(component, componentMapper) {
    _classCallCheck(this, ComponentMapping);

    this.component = component;
    this.componentMapper = componentMapper;
  }

  _createClass(ComponentMapping, [{
    key: "componentName",
    get: function () {
      return this.componentMapper.map.get(this.component);
    }
  }, {
    key: "templateUrl",
    get: function () {
      return this.componentMapper.registry[this.componentName].templateUrl;
    }
  }, {
    key: "isController",
    get: function () {
      return this.componentMapper.registry[this.componentName].isController;
    }
  }, {
    key: "controllerName",
    get: function () {
      return this.componentMapper.registry[this.componentName].controllerName;
    }
  }]);

  return ComponentMapping;
})();

var ComponentMapper = (function () {
  function ComponentMapper() {
    _classCallCheck(this, ComponentMapper);
  }

  _createClass(ComponentMapper, [{
    key: "register",
    value: function register(component) {
      if (!this.map.get(component)) {
        this._setupComponent(component);
      }
      return new ComponentMapping(component, this);
    }
  }, {
    key: "_getControllerComponentName",
    value: function _getControllerComponentName(component) {
      var name = this._getControllerName(component);
      if (name) {
        if (name.endsWith(DEFAULT_CONTROLLER_SUFFIX)) {
          return name[0].toLowerCase() + name.substr(1, name.length - DEFAULT_CONTROLLER_SUFFIX.length - 1);
        } else {
          return name[0].toLowerCase() + name.substr(1, name.length - 1);
        }
      } else {
        return null;
      }
    }
  }, {
    key: "_getControllerName",
    value: function _getControllerName(component) {
      var controllerAnnotation = new _AnnotationFinderJs.AnnotationFinder(component).annotationFor(_annotationsJs.Controller);
      if (controllerAnnotation) {
        return controllerAnnotation.token;
      } else {
        return null;
      }
    }
  }, {
    key: "_isController",
    value: function _isController(component) {
      var controllerAnnotation = new _AnnotationFinderJs.AnnotationFinder(component).annotationFor(_annotationsJs.Controller);
      if (controllerAnnotation) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "_getComponentName",
    value: function _getComponentName(component) {
      var componentAnnotation = new _AnnotationFinderJs.AnnotationFinder(component).annotationFor(_ng2DirectivesComponentJs.Component);
      if (componentAnnotation) {
        if (componentAnnotation.controllerAs) {
          return componentAnnotation.controllerAs;
        } else if (componentAnnotation.selector) {
          var selectorMatcher = new _ng2DirectivesSelectorMatcherJs2["default"](componentAnnotation.selector);
          return selectorMatcher.name;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  }, {
    key: "_getGeneratedName",
    value: function _getGeneratedName() {
      this._componentIndex = this._componentIndex || 0;
      var name = "" + DEFAULT_COMPONENT_PREFIX + "Component_" + this._componentIndex;
      this._componentIndex = this._componentIndex + 1;
      return name;
    }
  }, {
    key: "_generateName",
    value: function _generateName(component) {
      var name = this._getControllerComponentName(component);
      name = name || this._getComponentName(component);
      name = name || this._getGeneratedName();
      return name;
    }
  }, {
    key: "_generateTemplate",
    value: function _generateTemplate(name, component) {
      var viewAnnotation = new _AnnotationFinderJs.AnnotationFinder(component).annotationFor(_ng2DirectivesComponentJs.ViewBase);
      if (viewAnnotation && viewAnnotation.templateUrl) {
        return viewAnnotation.templateUrl;
      } else {
        return "./components/" + name + "/" + name + ".html";
      }
    }
  }, {
    key: "_readInlineTemplate",
    value: function _readInlineTemplate(templateUrl, component) {
      var viewAnnotation = new _AnnotationFinderJs.AnnotationFinder(component).annotationFor(_ng2DirectivesComponentJs.ViewBase);
      if (viewAnnotation && viewAnnotation.template) {
        this.inlineTemplateCache[templateUrl] = viewAnnotation.template;
      }
    }
  }, {
    key: "_generateControllerName",
    value: function _generateControllerName(name) {
      var componentBase;
      if (name.startsWith(DEFAULT_COMPONENT_PREFIX)) {
        componentBase = name.substring(DEFAULT_COMPONENT_PREFIX.length, name.length);
      } else {
        componentBase = name;
      }
      return DEFAULT_CONTROLLER_PREFIX + componentBase[0].toUpperCase() + componentBase.substring(1, componentBase.length) + DEFAULT_CONTROLLER_SUFFIX;
    }
  }, {
    key: "_setupComponent",
    value: function _setupComponent(component) {
      var name = this._generateName(component);
      var templateUrl = this._generateTemplate(name, component);
      var controllerName = this._getControllerName(component);
      var isController;
      if (controllerName) {
        isController = true;
      } else {
        isController = false;
        controllerName = this._generateControllerName(name);
      }
      this.map.set(component, name);
      this.registry[name] = { component: component, templateUrl: templateUrl, isController: isController, controllerName: controllerName };
      this.controllerRegistry[controllerName] = name;
      this._readInlineTemplate(templateUrl, component);
    }
  }, {
    key: "registry",
    get: function () {
      this._componentRegistry = this._componentRegistry || {};
      return this._componentRegistry;
    }
  }, {
    key: "map",
    get: function () {
      this._componentMap = this._componentMap || new Map();
      return this._componentMap;
    }
  }, {
    key: "getComponent",
    value: function getComponent(componentName) {
      return this.registry[componentName].component;
    }
  }, {
    key: "getTemplateUrl",
    value: function getTemplateUrl(componentName) {
      return this.registry[componentName].templateUrl;
    }
  }, {
    key: "getComponentName",
    value: function getComponentName(component) {
      return this.map.get(component);
    }
  }, {
    key: "controllerRegistry",
    get: function () {
      this._controllerRegistry = this._controllerRegistry || {};
      return this._controllerRegistry;
    }
  }, {
    key: "inlineTemplateCache",
    get: function () {
      this._inlineTemplateCache = this._inlineTemplateCache || {};
      return this._inlineTemplateCache;
    }
  }]);

  return ComponentMapper;
})();

exports.ComponentMapper = ComponentMapper;