import {Controller} from "../annotations.js";
import {Component, ViewBase} from "../ng2Directives/Component.js";
import {AnnotationFinder} from "../AnnotationFinder.js";
import SelectorMatcher from "../ng2Directives/SelectorMatcher.js";

var DEFAULT_CONTROLLER_SUFFIX = "Controller";
var DEFAULT_COMPONENT_PREFIX = "a1atscript";
var DEFAULT_CONTROLLER_PREFIX = "A1AtScript";

class ComponentMapping {
  constructor(component, componentMapper) {
    this.component = component;
    this.componentMapper = componentMapper;
  }

  get componentName() {
    return this.componentMapper.map.get(this.component);
  }

  get templateUrl() {
    return this.componentMapper.registry[this.componentName].templateUrl;
  }

  get isController() {
    return this.componentMapper.registry[this.componentName].isController;
  }

  get controllerName() {
    return this.componentMapper.registry[this.componentName].controllerName;
  }
}

export class ComponentMapper {
  register(component) {
    if (!this.map.get(component)) {
      this._setupComponent(component);
    }
    return new ComponentMapping(component, this);
  }

  _getControllerComponentName(component) {
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

  _getControllerName(component) {
    var controllerAnnotation = (new AnnotationFinder(component)).annotationFor(Controller);
    if (controllerAnnotation) {
      return controllerAnnotation.token;
    } else {
      return null;
    }
  }

  _isController(component) {
    var controllerAnnotation = (new AnnotationFinder(component)).annotationFor(Controller);
    if (controllerAnnotation) {
      return true;
    } else {
      return false;
    }
  }
  _getComponentName(component) {
    var componentAnnotation = (new AnnotationFinder(component)).annotationFor(Component);
    if (componentAnnotation) {
      if (componentAnnotation.controllerAs) {
        return componentAnnotation.controllerAs;
      } else if (componentAnnotation.selector) {
        var selectorMatcher = new SelectorMatcher(componentAnnotation.selector);
        return selectorMatcher.name;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  _getGeneratedName() {
    this._componentIndex = this._componentIndex || 0;
    var name = `${DEFAULT_COMPONENT_PREFIX}Component_${this._componentIndex}`;
    this._componentIndex = this._componentIndex + 1;
    return name;
  }

  _generateName(component) {
    var name = this._getControllerComponentName(component);
    name = name || this._getComponentName(component);
    name = name || this._getGeneratedName();
    return name;
  }

  _generateTemplate(name, component) {
    var viewAnnotation = (new AnnotationFinder(component)).annotationFor(ViewBase);
    if (viewAnnotation && viewAnnotation.templateUrl) {
      return viewAnnotation.templateUrl;
    } else {
      return `./components/${name}/${name}.html`;
    }
  }

  _readInlineTemplate(templateUrl, component) {
    var viewAnnotation = (new AnnotationFinder(component)).annotationFor(ViewBase);
    if (viewAnnotation && viewAnnotation.template) {
      this.inlineTemplateCache[templateUrl] = viewAnnotation.template;
    }
  }

  _generateControllerName(name) {
    var componentBase;
    if (name.startsWith(DEFAULT_COMPONENT_PREFIX)) {
      componentBase = name.substring(DEFAULT_COMPONENT_PREFIX.length, name.length)
    } else {
      componentBase = name;
    }
    return DEFAULT_CONTROLLER_PREFIX + componentBase[0].toUpperCase() + componentBase.substring(1, componentBase.length) + DEFAULT_CONTROLLER_SUFFIX;
  }

  _setupComponent(component) {
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
    this.registry[name] = { component: component, templateUrl: templateUrl, isController: isController, controllerName: controllerName }
    this.controllerRegistry[controllerName] = name;
    this._readInlineTemplate(templateUrl, component);
  }

  get registry() {
    this._componentRegistry = this._componentRegistry || {}
    return this._componentRegistry;
  }

  get map() {
    this._componentMap = this._componentMap || new Map();
    return this._componentMap;
  }

  getComponent(componentName) {
    return this.registry[componentName].component;
  }

  getTemplateUrl(componentName) {
    return this.registry[componentName].templateUrl;
  }

  getComponentName(component) {
    return this.map.get(component);
  }

  get controllerRegistry() {
    this._controllerRegistry = this._controllerRegistry || {}
    return this._controllerRegistry;
  }

  get inlineTemplateCache() {
    this._inlineTemplateCache = this._inlineTemplateCache || {}
    return this._inlineTemplateCache;
  }
}
