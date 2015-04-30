import {ToAnnotation} from './ToAnnotation.js';

class NgAnnotation {
  constructor(...dependencies) {
    this.dependencies = dependencies;
  }
}

class NgNamedAnnotation {
  constructor(token, dependencies = []) {
    this.dependencies = dependencies;
    this.token = token;
  }
}

@ToAnnotation
export class Config extends NgAnnotation {

}

@ToAnnotation
export class Run extends NgAnnotation {

}

@ToAnnotation
export class Controller extends NgNamedAnnotation {

}

@ToAnnotation
export class Directive extends NgNamedAnnotation {

}

@ToAnnotation
export class Service extends NgNamedAnnotation {

}

@ToAnnotation
export class Factory extends NgNamedAnnotation {

}

@ToAnnotation
export class Provider extends NgNamedAnnotation {

}

@ToAnnotation
export class Value extends NgNamedAnnotation {

}

@ToAnnotation
export class Constant extends NgNamedAnnotation {

}

@ToAnnotation
export class Filter extends NgNamedAnnotation {

}

@ToAnnotation
export class Animation extends NgNamedAnnotation {

}

export class Module extends NgNamedAnnotation {

}

@ToAnnotation
export class AsModule extends Module {

}
