import SelectorMatcher from "./SelectorMatcher.js";

export default class Ng2DirectiveDefinitionObject {

  constructor(controller, annotation, templateProperties = {}, bind = null) {
    this._annotation = annotation;
    this._controller = controller;
    this._templateProperties = templateProperties;
    this._bind = bind;
  }

  get selectorMatcher() {
    this._selectorMatcher = this._selectorMatcher ||
      new SelectorMatcher(this._annotation.selector);
    return this._selectorMatcher;
  }

  get restrict() {
    return this.selectorMatcher.restrict;
  }

  get controllerAs() {
    return this._annotation.controllerAs || this.name;
  }

  get bindToController() {
    // bindToController as object syntax only supported on 1.4
    if (angular.version.major == 1 && angular.version.minor >= 4) {
      return this._bind || this._annotation.bind;
    } else {
      return true;
    }

  }

  get scope() {
    // bindToController as object syntax only supported on 1.4
    if (angular.version.major == 1 && angular.version.minor >= 4) {
      return {};
    } else {
      return this._bind || this._annotation.bind;
    }
  }

  get template() {
    return this._templateProperties.template;
  }

  get templateUrl() {
    return this._templateProperties.templateUrl;
  }

  get transclude() {
    return this._annotation.transclude;
  }

  get require() {
    return this._annotation.require;
  }

  get controller() {
    return this._controller;
  }

  get name() {
    return this.selectorMatcher.name;
  }

  get factoryFn() {
    return () => {
      return {
        scope: this.scope,
        restrict: this.restrict,
        template: this.template,
        require: this.require,
        transclude: this.transclude,
        templateUrl: this.templateUrl,
        controller: this.controller,
        bindToController: this.bindToController,
        controllerAs: this.controllerAs
      };
    };
  }
}
