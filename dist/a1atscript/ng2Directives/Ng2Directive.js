export default class Ng2Directive {
  constructor(descriptor) {
    this.selector = descriptor.selector;
    this.bind = descriptor.bind;
    this.controllerAs = descriptor.controllerAs;
    this.require = descriptor.require;
  }
}
