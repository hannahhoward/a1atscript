import {registerInjector} from '../Injector.js';
import {Component, Template} from './Component.js';
import TemplateProperties from './TemplateProperties.js';
import {ListInjector} from "../injectorTypes.js";
import Ng2DirectiveDefinitionObject from "./Ng2DirectiveDefinitionObject.js";

class ComponentInjector extends ListInjector {
  get annotationClass() {
    return Component;
  }

  _template(component) {
    return component.annotations.find((annotation) => annotation instanceof Template);
  }

  instantiateOne(module, component, annotation) {
    var controller;
    if (annotation.services) {
      controller = annotation.services.concat([component]);
    } else {
      controller = component;
    }
    var template = this._template(component);
    var templateProperties;
    if (template) {
      templateProperties = new TemplateProperties(template)
    } else {
      templateProperties = {};
    }
    var ddo = new Ng2DirectiveDefinitionObject(controller, annotation, templateProperties);
    module.directive(ddo.name, ddo.factoryFn);
  }
}

registerInjector('component', ComponentInjector);
