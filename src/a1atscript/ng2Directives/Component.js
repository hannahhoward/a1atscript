import Ng2Directive from './Ng2Directive.js';
import {ToAnnotation} from '../ToAnnotation.js';

@ToAnnotation
export class Component extends Ng2Directive {
  constructor(descriptor) {
    super(descriptor)
    this.injectables = descriptor.injectables || descriptor.services;
  }
}

export class ViewBase {
  constructor(descriptor) {
    this.templateUrl = descriptor.templateUrl || descriptor.url;
    this.template = descriptor.template || descriptor.inline;
  }
}

@ToAnnotation
export class Template extends ViewBase {
}

@ToAnnotation
export class View extends ViewBase {
}
