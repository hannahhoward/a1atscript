import {registerInjector} from '../Injector.js';
import {Component, ViewBase} from './Component.js';
import {ListInjector} from "../injectorTypes.js";
import Ng2DirectiveDefinitionObject from "./Ng2DirectiveDefinitionObject.js";
import PropertiesBuilder from "./PropertiesBuilder.js";
import EventsBuilder from "./EventsBuilder.js";
import {Router} from "../Router.js";

class ComponentInjector extends ListInjector {
  constructor() {
    super();
    this.componentHooks = {before: [], after: []};
  }

  get annotationClass() {
    return Component;
  }

  _template(component) {
    return component.annotations.find((annotation) => annotation instanceof ViewBase) || {};
  }

  instantiateOne(module, component, annotation) {
    if (annotation.injectables) {
      component.$inject = annotation.injectables;
    }
    Router.routeReader.read(component);
    var template = this._template(component);
    var properties = {},
        events = {},
        bind;
    if (annotation.properties) {
      properties = (new PropertiesBuilder(annotation.properties, component)).build();
    }
    if (annotation.events) {
      events = (new EventsBuilder(annotation.events, component)).build();
    }
    bind = Object.assign({}, properties, events);
    if (bind === {}) bind = null;
    if (annotation.selector) {
      var ddo = new Ng2DirectiveDefinitionObject(component, annotation, template, bind);
      this.hooks('before', module, ddo);
      module.directive(ddo.name, ddo.factoryFn);
      this.hooks('after', module, ddo);
    }
  }

  hooks(phase, module, ddo) {
    this.componentHooks[phase].forEach((hook) => {
      hook(module, ddo);
  });
}
}

registerInjector('component', ComponentInjector);
