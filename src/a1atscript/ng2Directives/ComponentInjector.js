import {registerInjector} from '../Injector.js';
import {Component, ViewBase} from './Component.js';
import {ListInjector} from "../injectorTypes.js";
import Ng2DirectiveDefinitionObject from "./Ng2DirectiveDefinitionObject.js";
import PropertiesBuilder from "./PropertiesBuilder.js";
import {Router} from "../Router.js";

class ComponentInjector extends ListInjector {
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
    var properties = null;
    if (annotation.properties) {
      properties = (new PropertiesBuilder(annotation.properties, component)).build();
    }
    if (annotation.selector) {
      var ddo = new Ng2DirectiveDefinitionObject(component, annotation, template, properties);
      module.directive(ddo.name, ddo.factoryFn);
    }
  }
}

registerInjector('component', ComponentInjector);
