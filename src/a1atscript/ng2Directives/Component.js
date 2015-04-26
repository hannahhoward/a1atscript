import Ng2Directive from './Ng2Directive.js';
import ToAnnotation from '../ToAnnotation.js';

@ToAnnotation
export class Component extends Ng2Directive {
  constructor(descriptor) {
    super(descriptor)
    this.services = descriptor.services;
  }
}

@ToAnnotation
export class Template {
  constructor(descriptor) {
    this.url = descriptor.url;
    this.inline = descriptor.inline;
  }
}
