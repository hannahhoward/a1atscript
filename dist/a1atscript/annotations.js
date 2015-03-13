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

export class Config extends NgAnnotation {

}

export class Run extends NgAnnotation {

}

export class Controller extends NgNamedAnnotation {

}

export class Directive extends NgNamedAnnotation {

}

export class Service extends NgNamedAnnotation {

}

export class Factory extends NgNamedAnnotation {

}

export class Provider extends NgNamedAnnotation {

}

export class Value extends NgNamedAnnotation {

}

export class Constant extends NgNamedAnnotation {

}

export class Filter extends NgNamedAnnotation {

}

export class Animation extends NgNamedAnnotation {

}

export class Module extends NgNamedAnnotation {

}
