import Ng2Directive from './Ng2Directive.js';
import {ToAnnotation} from '../ToAnnotation.js';

class ComponentAnnotation extends Ng2Directive {
  constructor(descriptor) {
    super(descriptor)
    this.appInjector = descriptor.appInjector || descriptor.injectables || descriptor.services;
  }
}

export const Component = ToAnnotation(ComponentAnnotation);

export class ViewBase {
  constructor(descriptor) {
    this.templateUrl = descriptor.templateUrl || descriptor.url;
    this.template = descriptor.template || descriptor.inline;
  }
}

export const Template = ToAnnotation(ViewBase);

export const View = ToAnnotation(ViewBase);
