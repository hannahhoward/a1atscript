import {registerInjector} from './Injector';
import ComponentDirectiveDefinitionObject from "./ComponentDirectiveDefinitionObject";

class ComponentInjector extends ListInjector {
  get annotationClass() {
    return Component;
  }

  _setupTemplate(ddo, templateAnnotation) {}

  _cloneFunction(original) {
    return function() {
      return original.apply(this, arguments);
    };
  }

  _override(object, methodName, callback) {
    object[methodName] = callback(object[methodName]);
  }

  instantiateOne(module, directiveObject, metadata) {
    directiveObject['$inject'] = metadata.dependencies;

    if (!directiveObject.prototype.compile) {
      // create an empty compile function if none was defined.
      directiveObject.prototype.compile = () => {};
    }

    var originalCompileFn = this._cloneFunction(directiveObject.prototype.compile);

    // Decorate the compile method to automatically return the link method (if it exists)
    // and bind it to the context of the constructor (so `this` works correctly).
    // This gets around the problem of a non-lexical "this" which occurs when the directive class itself
    // returns `this.link` from within the compile function.
    this._override(directiveObject.prototype, 'compile', function () {
      return function () {

        originalCompileFn.apply(this, arguments);

        if (directiveObject.prototype.link) {
          return directiveObject.prototype.link.bind(this);
        }
      };
    });

    var factoryArray = this._createFactoryArray(directiveObject);

    module.directive(metadata.token, factoryArray);
  }
}

registerInjector('directiveObject', DirectiveObjectInjector);
