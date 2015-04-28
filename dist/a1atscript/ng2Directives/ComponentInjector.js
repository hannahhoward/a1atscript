import {registerInjector} from '../Injector.js';
import {Component, ViewBase} from './Component.js';
import {ListInjector} from "../injectorTypes.js";
import Ng2DirectiveDefinitionObject from "./Ng2DirectiveDefinitionObject.js";
import PropertiesBuilder from "./PropertiesBuilder.js";

class ComponentInjector extends ListInjector {
  get annotationClass() {
    return Component;
  }

  _template(component) {
    return component.annotations.find((annotation) => annotation instanceof ViewBase) || {};
  }

  instantiateOne(module, component, annotation) {
    var controller;
    if (annotation.injectables) {
      controller = annotation.injectables.concat([component]);
    } else {
      controller = component;
    }
    var template = this._template(component);
    var properties = null;
    if (annotation.properties) {
      properties = (new PropertiesBuilder(annotation.properties, component)).build();
    }
    var ddo = new Ng2DirectiveDefinitionObject(controller, annotation, template, properties);
    module.directive(ddo.name, ddo.factoryFn);
  }
}

registerInjector('component', ComponentInjector);
