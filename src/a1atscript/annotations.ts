import {ToAnnotation} from './ToAnnotation';

class NgAnnotation {
  dependencies: Array<string>;
  token: string;

  constructor(...dependencies) {
    this.dependencies = dependencies;
  }
}

class NgNamedAnnotation {
  dependencies: Array<string>;
  token: string;

  constructor(token, dependencies = []) {
    this.dependencies = dependencies;
    this.token = token;
  }
}

class ConfigAnnotation extends NgAnnotation {
}

export const Config = ToAnnotation(ConfigAnnotation);

class RunAnnotation extends NgAnnotation {

}

export const Run = ToAnnotation(RunAnnotation);

class ControllerAnnotation extends NgNamedAnnotation {

}

export const Controller = ToAnnotation(ControllerAnnotation);

class DirectiveAnnotation extends NgNamedAnnotation {

}

export const Directive = ToAnnotation(DirectiveAnnotation);

class ServiceAnnotation extends NgNamedAnnotation {

}

export const Service = ToAnnotation(ServiceAnnotation);


class FactoryAnnotation extends NgNamedAnnotation {

}

export const Factory = ToAnnotation(FactoryAnnotation);

class ProviderAnnotation extends NgNamedAnnotation {

}

export const Provider = ToAnnotation(ProviderAnnotation);

class ValueAnnotation extends NgNamedAnnotation {

}

export const Value = ToAnnotation(ValueAnnotation);

class ConstantAnnotation extends NgNamedAnnotation {

}

export const Constant = ToAnnotation(ConstantAnnotation);

class FilterAnnotation extends NgNamedAnnotation {

}

export const Filter = ToAnnotation(FilterAnnotation);

class AnimationAnnotation extends NgNamedAnnotation {

}

export const Animation = ToAnnotation(AnimationAnnotation);

export class Module extends NgNamedAnnotation {

}

export const AsModule = ToAnnotation(Module);
