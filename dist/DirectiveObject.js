import {ListInjector} from './injectorTypes';
import {registerInjector} from './Injector';

export class DirectiveObject {
  constructor(token, dependencies = []) {
    this.dependencies = dependencies;
    this.token = token;
  }
}

class DirectiveObjectInjector extends ListInjector {
  get annotationClass() {
    return DirectiveObject;
  }

  _createFactoryArray(ConstructorFn) {
    // get the array of dependencies that are needed by this component (as contained in the `$inject` array)
    var args = ConstructorFn.$inject || [];
    var factoryArray = args.slice(); // create a copy of the array
    // The factoryArray uses Angular's array notation whereby each element of the array is the name of a
    // dependency, and the final item is the factory function itself.
    factoryArray.push((...args) => {
      var directive = new ConstructorFn(...args);
      for (var key in directive) {
        directive[key] = directive[key];
      }
      return directive;
    });

    return factoryArray;
  }

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


/*
        var originalCompileFn = _cloneFunction(constructorFn.prototype.compile);

        // Decorate the compile method to automatically return the link method (if it exists)
        // and bind it to the context of the constructor (so `this` works correctly).
        // This gets around the problem of a non-lexical "this" which occurs when the directive class itself
        // returns `this.link` from within the compile function.
        _override(constructorFn.prototype, 'compile', function () {
            return function () {
                originalCompileFn.apply(this, arguments);

                if (constructorFn.prototype.link) {
                    return constructorFn.prototype.link.bind(this);
                }
            };
        });

        var factoryArray = _createFactoryArray(constructorFn);

        app.directive(name, factoryArray);
        return this;
    }
*/
