import SelectorMatcher from "./SelectorMatcher.js";

export class Ng2DirectiveDefinitionObject {

  constructor(controller, annotation, templateProperties = {}) {
    this._annotation = annotation;
    this._controller = controller;
    this._templateProperties = _templateProperties;
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
    return this._annotation.bind;
  }

  get scope() {
    return {};
  }

  get template() {
    return this._templateProperties.template;
  }

  get templateUrl() {
    return this._templateProperties.templateUrl;
  }

  get tranclude() {
    return this._annotation.tranclude;
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
