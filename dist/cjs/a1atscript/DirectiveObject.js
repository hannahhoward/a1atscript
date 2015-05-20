'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var _bind = Function.prototype.bind;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _injectorTypesJs = require('./injectorTypes.js');

var _InjectorJs = require('./Injector.js');

var _ToAnnotationJs = require('./ToAnnotation.js');

var DirectiveObject = (function () {
  function DirectiveObject(token) {
    var dependencies = arguments[1] === undefined ? [] : arguments[1];

    _classCallCheck(this, _DirectiveObject);

    this.dependencies = dependencies;
    this.token = token;
  }

  var _DirectiveObject = DirectiveObject;
  DirectiveObject = (0, _ToAnnotationJs.ToAnnotation)(DirectiveObject) || DirectiveObject;
  return DirectiveObject;
})();

exports.DirectiveObject = DirectiveObject;

var DirectiveObjectInjector = (function (_ListInjector) {
  function DirectiveObjectInjector() {
    _classCallCheck(this, DirectiveObjectInjector);

    if (_ListInjector != null) {
      _ListInjector.apply(this, arguments);
    }
  }

  _inherits(DirectiveObjectInjector, _ListInjector);

  _createClass(DirectiveObjectInjector, [{
    key: 'annotationClass',
    get: function () {
      return DirectiveObject;
    }
  }, {
    key: '_createFactoryArray',
    value: function _createFactoryArray(ConstructorFn) {
      // get the array of dependencies that are needed by this component (as contained in the `$inject` array)
      var args = ConstructorFn.$inject || [];
      var factoryArray = args.slice(); // create a copy of the array
      // The factoryArray uses Angular's array notation whereby each element of the array is the name of a
      // dependency, and the final item is the factory function itself.
      factoryArray.push(function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var directive = new (_bind.apply(ConstructorFn, [null].concat(args)))();
        for (var key in directive) {
          directive[key] = directive[key];
        }
        return directive;
      });

      return factoryArray;
    }
  }, {
    key: '_cloneFunction',
    value: function _cloneFunction(original) {
      return function () {
        return original.apply(this, arguments);
      };
    }
  }, {
    key: '_override',
    value: function _override(object, methodName, callback) {
      object[methodName] = callback(object[methodName]);
    }
  }, {
    key: 'instantiateOne',
    value: function instantiateOne(module, directiveObject, metadata) {
      directiveObject['$inject'] = metadata.dependencies;

      if (!directiveObject.prototype.compile) {
        // create an empty compile function if none was defined.
        directiveObject.prototype.compile = function () {};
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
  }]);

  return DirectiveObjectInjector;
})(_injectorTypesJs.ListInjector);

(0, _InjectorJs.registerInjector)('directiveObject', DirectiveObjectInjector);

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