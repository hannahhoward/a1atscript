import Ng2Directive from './Ng2Directive.js';

export class Component extends Ng2Directive {
  constructor(descriptor) {
    super(descriptor)
    this.services = descriptor.services;
  }
}

export class Template {
  constructor(descriptor) {
    this.url = descriptor.url;
    this.inline = descriptor.inline;
  }
}
