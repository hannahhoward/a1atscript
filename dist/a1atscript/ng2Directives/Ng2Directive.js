export default class Ng2Directive {
  constructor(descriptor) {
    this.selector = descriptor.selector;
    this.properties = descriptor.properties || descriptor.bind;
    this.controllerAs = descriptor.controllerAs;
    this.require = descriptor.require;
    this.transclude = descriptor.transclude;
    this.events = descriptor.events;
  }
}
