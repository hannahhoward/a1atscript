import {
  Config,
  Run,
  Controller,
  Directive,
  Service,
  Factory,
  Provider,
  Value,
  Constant,
  Animation,
  Filter
} from './annotations.js';

export class ListInjector {
  instantiate(module, dependencyList) {
    dependencyList.forEach((dependencyObject) => {
      this.instantiateOne(module, dependencyObject.dependency, dependencyObject.metadata);
    });
  }
}

export class ConfigInjector extends ListInjector {

  get annotationClass() {
    return Config.originalClass || Config;
  }

  instantiateOne(module, config, metadata) {
    config['$inject'] = metadata.dependencies;
    module.config(config);
  }
}

export class RunInjector extends ListInjector {

  get annotationClass() {
    return Run.originalClass || Run;
  }

  instantiateOne(module, run, metadata) {
    run['$inject'] = metadata.dependencies;
    module.run(run);
  }
}

export class ControllerInjector extends ListInjector {

  get annotationClass() {
    return Controller.originalClass || Controller;
  }

  instantiateOne(module, controller, metadata) {
    controller['$inject'] = metadata.dependencies;
    module.controller(metadata.token, controller);
  }

}

export class DirectiveInjector extends ListInjector {

  get annotationClass() {
    return Directive.originalClass || Directive;
  }

  instantiateOne(module, directive, metadata) {
    directive['$inject'] = metadata.dependencies;
    module.directive(metadata.token, directive);
  }

}

export class ServiceInjector extends ListInjector {

  get annotationClass() {
    return Service.originalClass || Service;
  }

  instantiateOne(module, service, metadata) {
    service['$inject'] = metadata.dependencies;
    module.service(metadata.token, service);
  }

}

export class FactoryInjector extends ListInjector {

  get annotationClass() {
    return Factory.originalClass || Factory;
  }

  instantiateOne(module, factory, metadata) {
    factory['$inject'] = metadata.dependencies;
    module.factory(metadata.token, factory);
  }

}

export class ProviderInjector extends ListInjector {

  get annotationClass() {
    return Provider.originalClass || Provider;
  }

  instantiateOne(module, provider, metadata) {
    provider['$inject'] = metadata.dependencies;
    module.provider(metadata.token, provider);
  }

}

export class ValueInjector extends ListInjector {

  get annotationClass() {
    return Value.originalClass || Value;
  }

  instantiateOne(module, value, metadata) {
    value['$inject'] = metadata.dependencies;
    module.value(metadata.token, value);
  }

}

export class ConstantInjector extends ListInjector {

  get annotationClass() {
    return Constant.originalClass || Constant;
  }

  instantiateOne(module, constant, metadata) {
    constant['$inject'] = metadata.dependencies;
    module.constant(metadata.token, constant);
  }

}

export class AnimationInjector extends ListInjector {

  get annotationClass() {
    return Animation.originalClass || Animation;
  }

  instantiateOne(module, animation, metadata) {
    animation['$inject'] = metadata.dependencies;
    module.animation(metadata.token, animation);
  }

}

export class FilterInjector extends ListInjector {

  get annotationClass() {
    return Filter.originalClass || Filter;
  }

  instantiateOne(module, filter, metadata) {
    filter['$inject'] = metadata.dependencies;
    module.filter(metadata.token, filter);
  }

}
