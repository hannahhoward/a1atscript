System.register("a1atscript/ng2Directives/Ng2DirectiveDefinitionObject.js", ["a1atscript/ng2Directives/SelectorMatcher.js"], function (_export) {
  "use strict";

  var SelectorMatcher, Ng2DirectiveDefinitionObject;
  return {
    setters: [function (_a1atscriptNg2DirectivesSelectorMatcherJs) {
      SelectorMatcher = _a1atscriptNg2DirectivesSelectorMatcherJs["default"];
    }],
    execute: function () {
      Ng2DirectiveDefinitionObject = (function () {
        function Ng2DirectiveDefinitionObject(controller, annotation) {
          var template = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
          var bind = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
          babelHelpers.classCallCheck(this, Ng2DirectiveDefinitionObject);

          this._annotation = annotation;
          this._controller = controller;
          this._template = template;
          this._bind = bind;
        }

        babelHelpers.createClass(Ng2DirectiveDefinitionObject, [{
          key: "selectorMatcher",
          get: function get() {
            this._selectorMatcher = this._selectorMatcher || new SelectorMatcher(this._annotation.selector);
            return this._selectorMatcher;
          }
        }, {
          key: "restrict",
          get: function get() {
            return this.selectorMatcher.restrict;
          }
        }, {
          key: "controllerAs",
          get: function get() {
            return this._annotation.controllerAs || this.name;
          }
        }, {
          key: "bindToController",
          get: function get() {
            // bindToController as object syntax only supported on 1.4
            if (angular.version.major == 1 && angular.version.minor >= 4) {
              return this._bind || this._annotation.properties;
            } else {
              return true;
            }
          }
        }, {
          key: "scope",
          get: function get() {
            // bindToController as object syntax only supported on 1.4
            if (angular.version.major == 1 && angular.version.minor >= 4) {
              return {};
            } else {
              return this._bind || this._annotation.properties;
            }
          }
        }, {
          key: "template",
          get: function get() {
            return this._template.template;
          }
        }, {
          key: "templateUrl",
          get: function get() {
            return this._template.templateUrl;
          }
        }, {
          key: "transclude",
          get: function get() {
            return this._annotation.transclude;
          }
        }, {
          key: "require",
          get: function get() {
            return this._annotation.require;
          }
        }, {
          key: "controller",
          get: function get() {
            return this._controller;
          }
        }, {
          key: "name",
          get: function get() {
            return this.selectorMatcher.name;
          }
        }, {
          key: "factoryFn",
          get: function get() {
            var _this = this;

            return function () {
              return {
                scope: _this.scope,
                restrict: _this.restrict,
                template: _this.template,
                require: _this.require,
                transclude: _this.transclude,
                templateUrl: _this.templateUrl,
                controller: _this.controller,
                bindToController: _this.bindToController,
                controllerAs: _this.controllerAs
              };
            };
          }
        }]);
        return Ng2DirectiveDefinitionObject;
      })();

      _export("default", Ng2DirectiveDefinitionObject);
    }
  };
});
System.register("a1atscript/ng2Directives/PropertiesBuilder.js", ["a1atscript/ng2Directives/BindBuilder.js"], function (_export) {
  "use strict";

  var BindBuilder, BIND_PREFIX, STRING_PREFIX, BINDING, RAW_STRING, PropertiesBuilder;
  return {
    setters: [function (_a1atscriptNg2DirectivesBindBuilderJs) {
      BindBuilder = _a1atscriptNg2DirectivesBindBuilderJs["default"];
    }],
    execute: function () {
      BIND_PREFIX = "_=_";
      STRING_PREFIX = "_@_";
      BINDING = BIND_PREFIX;
      RAW_STRING = STRING_PREFIX;

      PropertiesBuilder = (function (_BindBuilder) {
        babelHelpers.inherits(PropertiesBuilder, _BindBuilder);

        function PropertiesBuilder() {
          babelHelpers.classCallCheck(this, PropertiesBuilder);
          babelHelpers.get(Object.getPrototypeOf(PropertiesBuilder.prototype), "constructor", this).apply(this, arguments);
        }

        babelHelpers.createClass(PropertiesBuilder, [{
          key: "setupProperty",
          value: function setupProperty(key, properties) {
            properties[STRING_PREFIX + key] = "@" + this.bindObj[key];
            properties[BIND_PREFIX + key] = "=?bind" + this.bindObj[key][0].toUpperCase() + this.bindObj[key].slice(1);

            // This property is used when user uses the `bind-property` attribute on a directive to bind an expression
            Object.defineProperty(this._component.prototype, BIND_PREFIX + key, {
              enumerable: true,
              configurable: true,
              set: genericSetter(BINDING, RAW_STRING),
              get: function get() {
                return this[key];
              }
            });

            // This property is used when user uses the `property` attribute on a directive to bind a string
            Object.defineProperty(this._component.prototype, STRING_PREFIX + key, {
              enumerable: true,
              configurable: true,
              set: genericSetter(RAW_STRING, BINDING),
              get: function get() {
                return this[key];
              }
            });

            function genericSetter(use, errorOn) {
              return function (value) {
                this.__using_binding__ = this.__using_binding__ || {};

                if (this.__using_binding__[key] === errorOn) {
                  if (value !== undefined) {
                    throw new Error("Cannot use bind-" + key + " and " + key + " simultaneously");
                  }

                  return;
                }

                if (value !== undefined) {
                  this.__using_binding__[key] = use;
                }

                this[key] = value;
              };
            }
          }
        }]);
        return PropertiesBuilder;
      })(BindBuilder);

      _export("default", PropertiesBuilder);
    }
  };
});
System.register("a1atscript/ng2Directives/BindBuilder.js", [], function (_export) {
  "use strict";

  var BindBuilder;
  return {
    setters: [],
    execute: function () {
      BindBuilder = (function () {
        function BindBuilder(bindParam, component) {
          babelHelpers.classCallCheck(this, BindBuilder);

          this._bindParam = bindParam;
          this._component = component;
        }

        babelHelpers.createClass(BindBuilder, [{
          key: "build",
          value: function build() {
            var _this = this;

            var properties = {};
            Object.keys(this.bindObj).forEach(function (key) {
              _this.setupProperty(key, properties);
            });
            return properties;
          }
        }, {
          key: "bindObj",
          get: function get() {
            var _this2 = this;

            if (!this._bindObj) {
              if (Array.isArray(this._bindParam)) {
                this._bindObj = {};
                var splitBind;
                this._bindParam.forEach(function (bind) {
                  splitBind = bind.split(/\s*:\s*/);
                  if (splitBind.length == 1) {
                    _this2._bindObj[bind] = bind;
                  } else {
                    _this2._bindObj[splitBind[0]] = splitBind[1];
                  }
                });
              } else {
                this._bindObj = this._bindParam;
              }
            }
            return this._bindObj;
          }
        }]);
        return BindBuilder;
      })();

      _export("default", BindBuilder);
    }
  };
});
System.register("a1atscript/ng2Directives/EventsBuilder.js", ["a1atscript/ng2Directives/BindBuilder.js"], function (_export) {
  "use strict";

  var BindBuilder, prefix, EventsBuilder;
  return {
    setters: [function (_a1atscriptNg2DirectivesBindBuilderJs) {
      BindBuilder = _a1atscriptNg2DirectivesBindBuilderJs["default"];
    }],
    execute: function () {
      prefix = "___bindable___";

      EventsBuilder = (function (_BindBuilder) {
        babelHelpers.inherits(EventsBuilder, _BindBuilder);

        function EventsBuilder() {
          babelHelpers.classCallCheck(this, EventsBuilder);
          babelHelpers.get(Object.getPrototypeOf(EventsBuilder.prototype), "constructor", this).apply(this, arguments);
        }

        babelHelpers.createClass(EventsBuilder, [{
          key: "setupProperty",
          value: function setupProperty(key, events) {
            events[key] = "=?on" + this.bindObj[key][0].toUpperCase() + this.bindObj[key].slice(1);
          }
        }]);
        return EventsBuilder;
      })(BindBuilder);

      _export("default", EventsBuilder);
    }
  };
});
System.register('a1atscript/ng2Directives/ComponentInjector.js', ['a1atscript/Injector.js', 'a1atscript/ng2Directives/Component.js', 'a1atscript/injectorTypes.js', 'a1atscript/ng2Directives/Ng2DirectiveDefinitionObject.js', 'a1atscript/ng2Directives/PropertiesBuilder.js', 'a1atscript/ng2Directives/EventsBuilder.js', 'a1atscript/Router.js'], function (_export) {
  'use strict';

  var registerInjector, Component, ViewBase, ListInjector, Ng2DirectiveDefinitionObject, PropertiesBuilder, EventsBuilder, Router, ComponentInjector;
  return {
    setters: [function (_a1atscriptInjectorJs) {
      registerInjector = _a1atscriptInjectorJs.registerInjector;
    }, function (_a1atscriptNg2DirectivesComponentJs) {
      Component = _a1atscriptNg2DirectivesComponentJs.Component;
      ViewBase = _a1atscriptNg2DirectivesComponentJs.ViewBase;
    }, function (_a1atscriptInjectorTypesJs) {
      ListInjector = _a1atscriptInjectorTypesJs.ListInjector;
    }, function (_a1atscriptNg2DirectivesNg2DirectiveDefinitionObjectJs) {
      Ng2DirectiveDefinitionObject = _a1atscriptNg2DirectivesNg2DirectiveDefinitionObjectJs['default'];
    }, function (_a1atscriptNg2DirectivesPropertiesBuilderJs) {
      PropertiesBuilder = _a1atscriptNg2DirectivesPropertiesBuilderJs['default'];
    }, function (_a1atscriptNg2DirectivesEventsBuilderJs) {
      EventsBuilder = _a1atscriptNg2DirectivesEventsBuilderJs['default'];
    }, function (_a1atscriptRouterJs) {
      Router = _a1atscriptRouterJs.Router;
    }],
    execute: function () {
      ComponentInjector = (function (_ListInjector) {
        babelHelpers.inherits(ComponentInjector, _ListInjector);

        function ComponentInjector() {
          babelHelpers.classCallCheck(this, ComponentInjector);

          babelHelpers.get(Object.getPrototypeOf(ComponentInjector.prototype), 'constructor', this).call(this);
          this.componentHooks = { before: [], after: [] };
        }

        babelHelpers.createClass(ComponentInjector, [{
          key: '_template',
          value: function _template(component) {
            return component.annotations.find(function (annotation) {
              return annotation instanceof ViewBase;
            }) || {};
          }
        }, {
          key: 'instantiateOne',
          value: function instantiateOne(module, component, annotation) {
            if (annotation.appInjector) {
              component.$inject = annotation.appInjector;
            }
            Router.routeReader.read(component);
            var template = this._template(component);
            var properties = {},
                events = {},
                bind;
            if (annotation.properties) {
              properties = new PropertiesBuilder(annotation.properties, component).build();
            }
            if (annotation.events) {
              events = new EventsBuilder(annotation.events, component).build();
            }
            bind = Object.assign({}, properties, events);
            if (bind === {}) bind = null;
            if (annotation.selector) {
              var ddo = new Ng2DirectiveDefinitionObject(component, annotation, template, bind);
              this.hooks('before', module, ddo);
              module.directive(ddo.name, ddo.factoryFn);
              this.hooks('after', module, ddo);
            }
          }
        }, {
          key: 'hooks',
          value: function hooks(phase, module, ddo) {
            this.componentHooks[phase].forEach(function (hook) {
              hook(module, ddo);
            });
          }
        }, {
          key: 'annotationClass',
          get: function get() {
            return Component;
          }
        }]);
        return ComponentInjector;
      })(ListInjector);

      registerInjector('component', ComponentInjector);
    }
  };
});
System.register('a1atscript/DirectiveObject.js', ['a1atscript/injectorTypes.js', 'a1atscript/Injector.js', 'a1atscript/ToAnnotation.js'], function (_export) {
  'use strict';

  var ListInjector, registerInjector, ToAnnotation, DirectiveObject, DirectiveObjectInjector;
  return {
    setters: [function (_a1atscriptInjectorTypesJs) {
      ListInjector = _a1atscriptInjectorTypesJs.ListInjector;
    }, function (_a1atscriptInjectorJs) {
      registerInjector = _a1atscriptInjectorJs.registerInjector;
    }, function (_a1atscriptToAnnotationJs) {
      ToAnnotation = _a1atscriptToAnnotationJs.ToAnnotation;
    }],
    execute: function () {
      DirectiveObject = (function () {
        function DirectiveObject(token) {
          var dependencies = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
          babelHelpers.classCallCheck(this, _DirectiveObject);

          this.dependencies = dependencies;
          this.token = token;
        }

        var _DirectiveObject = DirectiveObject;
        DirectiveObject = ToAnnotation(DirectiveObject) || DirectiveObject;
        return DirectiveObject;
      })();

      _export('DirectiveObject', DirectiveObject);

      DirectiveObjectInjector = (function (_ListInjector) {
        babelHelpers.inherits(DirectiveObjectInjector, _ListInjector);

        function DirectiveObjectInjector() {
          babelHelpers.classCallCheck(this, DirectiveObjectInjector);
          babelHelpers.get(Object.getPrototypeOf(DirectiveObjectInjector.prototype), 'constructor', this).apply(this, arguments);
        }

        babelHelpers.createClass(DirectiveObjectInjector, [{
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

              var directive = new (babelHelpers.bind.apply(ConstructorFn, [null].concat(args)))();
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
        }, {
          key: 'annotationClass',
          get: function get() {
            return DirectiveObject;
          }
        }]);
        return DirectiveObjectInjector;
      })(ListInjector);

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
    }
  };
});
System.register('a1atscript/injectorTypes.js', ['a1atscript/annotations.js', 'a1atscript/Router.js'], function (_export) {
  'use strict';

  var Config, Run, Controller, Directive, Service, Factory, Provider, Value, Constant, Animation, Filter, Router, ListInjector, ConfigInjector, RunInjector, ControllerInjector, DirectiveInjector, ServiceInjector, FactoryInjector, ProviderInjector, ValueInjector, ConstantInjector, AnimationInjector, FilterInjector;
  return {
    setters: [function (_a1atscriptAnnotationsJs) {
      Config = _a1atscriptAnnotationsJs.Config;
      Run = _a1atscriptAnnotationsJs.Run;
      Controller = _a1atscriptAnnotationsJs.Controller;
      Directive = _a1atscriptAnnotationsJs.Directive;
      Service = _a1atscriptAnnotationsJs.Service;
      Factory = _a1atscriptAnnotationsJs.Factory;
      Provider = _a1atscriptAnnotationsJs.Provider;
      Value = _a1atscriptAnnotationsJs.Value;
      Constant = _a1atscriptAnnotationsJs.Constant;
      Animation = _a1atscriptAnnotationsJs.Animation;
      Filter = _a1atscriptAnnotationsJs.Filter;
    }, function (_a1atscriptRouterJs) {
      Router = _a1atscriptRouterJs.Router;
    }],
    execute: function () {
      ListInjector = (function () {
        function ListInjector() {
          babelHelpers.classCallCheck(this, ListInjector);
        }

        babelHelpers.createClass(ListInjector, [{
          key: 'instantiate',
          value: function instantiate(module, dependencyList) {
            var _this = this;

            dependencyList.forEach(function (dependencyObject) {
              _this.instantiateOne(module, dependencyObject.dependency, dependencyObject.metadata);
            });
          }
        }]);
        return ListInjector;
      })();

      _export('ListInjector', ListInjector);

      ConfigInjector = (function (_ListInjector) {
        babelHelpers.inherits(ConfigInjector, _ListInjector);

        function ConfigInjector() {
          babelHelpers.classCallCheck(this, ConfigInjector);
          babelHelpers.get(Object.getPrototypeOf(ConfigInjector.prototype), 'constructor', this).apply(this, arguments);
        }

        babelHelpers.createClass(ConfigInjector, [{
          key: 'instantiateOne',
          value: function instantiateOne(module, config, metadata) {
            config['$inject'] = metadata.dependencies;
            module.config(config);
          }
        }, {
          key: 'annotationClass',
          get: function get() {
            return Config;
          }
        }]);
        return ConfigInjector;
      })(ListInjector);

      _export('ConfigInjector', ConfigInjector);

      RunInjector = (function (_ListInjector2) {
        babelHelpers.inherits(RunInjector, _ListInjector2);

        function RunInjector() {
          babelHelpers.classCallCheck(this, RunInjector);
          babelHelpers.get(Object.getPrototypeOf(RunInjector.prototype), 'constructor', this).apply(this, arguments);
        }

        babelHelpers.createClass(RunInjector, [{
          key: 'instantiateOne',
          value: function instantiateOne(module, run, metadata) {
            run['$inject'] = metadata.dependencies;
            module.run(run);
          }
        }, {
          key: 'annotationClass',
          get: function get() {
            return Run;
          }
        }]);
        return RunInjector;
      })(ListInjector);

      _export('RunInjector', RunInjector);

      ControllerInjector = (function (_ListInjector3) {
        babelHelpers.inherits(ControllerInjector, _ListInjector3);

        function ControllerInjector() {
          babelHelpers.classCallCheck(this, ControllerInjector);
          babelHelpers.get(Object.getPrototypeOf(ControllerInjector.prototype), 'constructor', this).apply(this, arguments);
        }

        babelHelpers.createClass(ControllerInjector, [{
          key: 'instantiateOne',
          value: function instantiateOne(module, controller, metadata) {
            controller['$inject'] = metadata.dependencies;
            Router.routeReader.read(controller);
            module.controller(metadata.token, controller);
          }
        }, {
          key: 'annotationClass',
          get: function get() {
            return Controller;
          }
        }]);
        return ControllerInjector;
      })(ListInjector);

      _export('ControllerInjector', ControllerInjector);

      DirectiveInjector = (function (_ListInjector4) {
        babelHelpers.inherits(DirectiveInjector, _ListInjector4);

        function DirectiveInjector() {
          babelHelpers.classCallCheck(this, DirectiveInjector);
          babelHelpers.get(Object.getPrototypeOf(DirectiveInjector.prototype), 'constructor', this).apply(this, arguments);
        }

        babelHelpers.createClass(DirectiveInjector, [{
          key: 'instantiateOne',
          value: function instantiateOne(module, directive, metadata) {
            directive['$inject'] = metadata.dependencies;
            module.directive(metadata.token, directive);
          }
        }, {
          key: 'annotationClass',
          get: function get() {
            return Directive;
          }
        }]);
        return DirectiveInjector;
      })(ListInjector);

      _export('DirectiveInjector', DirectiveInjector);

      ServiceInjector = (function (_ListInjector5) {
        babelHelpers.inherits(ServiceInjector, _ListInjector5);

        function ServiceInjector() {
          babelHelpers.classCallCheck(this, ServiceInjector);
          babelHelpers.get(Object.getPrototypeOf(ServiceInjector.prototype), 'constructor', this).apply(this, arguments);
        }

        babelHelpers.createClass(ServiceInjector, [{
          key: 'instantiateOne',
          value: function instantiateOne(module, service, metadata) {
            service['$inject'] = metadata.dependencies;
            module.service(metadata.token, service);
          }
        }, {
          key: 'annotationClass',
          get: function get() {
            return Service;
          }
        }]);
        return ServiceInjector;
      })(ListInjector);

      _export('ServiceInjector', ServiceInjector);

      FactoryInjector = (function (_ListInjector6) {
        babelHelpers.inherits(FactoryInjector, _ListInjector6);

        function FactoryInjector() {
          babelHelpers.classCallCheck(this, FactoryInjector);
          babelHelpers.get(Object.getPrototypeOf(FactoryInjector.prototype), 'constructor', this).apply(this, arguments);
        }

        babelHelpers.createClass(FactoryInjector, [{
          key: 'instantiateOne',
          value: function instantiateOne(module, factory, metadata) {
            factory['$inject'] = metadata.dependencies;
            module.factory(metadata.token, factory);
          }
        }, {
          key: 'annotationClass',
          get: function get() {
            return Factory;
          }
        }]);
        return FactoryInjector;
      })(ListInjector);

      _export('FactoryInjector', FactoryInjector);

      ProviderInjector = (function (_ListInjector7) {
        babelHelpers.inherits(ProviderInjector, _ListInjector7);

        function ProviderInjector() {
          babelHelpers.classCallCheck(this, ProviderInjector);
          babelHelpers.get(Object.getPrototypeOf(ProviderInjector.prototype), 'constructor', this).apply(this, arguments);
        }

        babelHelpers.createClass(ProviderInjector, [{
          key: 'instantiateOne',
          value: function instantiateOne(module, provider, metadata) {
            provider['$inject'] = metadata.dependencies;
            module.provider(metadata.token, provider);
          }
        }, {
          key: 'annotationClass',
          get: function get() {
            return Provider;
          }
        }]);
        return ProviderInjector;
      })(ListInjector);

      _export('ProviderInjector', ProviderInjector);

      ValueInjector = (function (_ListInjector8) {
        babelHelpers.inherits(ValueInjector, _ListInjector8);

        function ValueInjector() {
          babelHelpers.classCallCheck(this, ValueInjector);
          babelHelpers.get(Object.getPrototypeOf(ValueInjector.prototype), 'constructor', this).apply(this, arguments);
        }

        babelHelpers.createClass(ValueInjector, [{
          key: 'instantiateOne',
          value: function instantiateOne(module, value, metadata) {
            value['$inject'] = metadata.dependencies;
            module.value(metadata.token, value);
          }
        }, {
          key: 'annotationClass',
          get: function get() {
            return Value;
          }
        }]);
        return ValueInjector;
      })(ListInjector);

      _export('ValueInjector', ValueInjector);

      ConstantInjector = (function (_ListInjector9) {
        babelHelpers.inherits(ConstantInjector, _ListInjector9);

        function ConstantInjector() {
          babelHelpers.classCallCheck(this, ConstantInjector);
          babelHelpers.get(Object.getPrototypeOf(ConstantInjector.prototype), 'constructor', this).apply(this, arguments);
        }

        babelHelpers.createClass(ConstantInjector, [{
          key: 'instantiateOne',
          value: function instantiateOne(module, constant, metadata) {
            constant['$inject'] = metadata.dependencies;
            module.constant(metadata.token, constant);
          }
        }, {
          key: 'annotationClass',
          get: function get() {
            return Constant;
          }
        }]);
        return ConstantInjector;
      })(ListInjector);

      _export('ConstantInjector', ConstantInjector);

      AnimationInjector = (function (_ListInjector10) {
        babelHelpers.inherits(AnimationInjector, _ListInjector10);

        function AnimationInjector() {
          babelHelpers.classCallCheck(this, AnimationInjector);
          babelHelpers.get(Object.getPrototypeOf(AnimationInjector.prototype), 'constructor', this).apply(this, arguments);
        }

        babelHelpers.createClass(AnimationInjector, [{
          key: 'instantiateOne',
          value: function instantiateOne(module, animation, metadata) {
            animation['$inject'] = metadata.dependencies;
            module.animation(metadata.token, animation);
          }
        }, {
          key: 'annotationClass',
          get: function get() {
            return Animation;
          }
        }]);
        return AnimationInjector;
      })(ListInjector);

      _export('AnimationInjector', AnimationInjector);

      FilterInjector = (function (_ListInjector11) {
        babelHelpers.inherits(FilterInjector, _ListInjector11);

        function FilterInjector() {
          babelHelpers.classCallCheck(this, FilterInjector);
          babelHelpers.get(Object.getPrototypeOf(FilterInjector.prototype), 'constructor', this).apply(this, arguments);
        }

        babelHelpers.createClass(FilterInjector, [{
          key: 'instantiateOne',
          value: function instantiateOne(module, filter, metadata) {
            filter['$inject'] = metadata.dependencies;
            module.filter(metadata.token, filter);
          }
        }, {
          key: 'annotationClass',
          get: function get() {
            return Filter;
          }
        }]);
        return FilterInjector;
      })(ListInjector);

      _export('FilterInjector', FilterInjector);
    }
  };
});
System.register('a1atscript/Injector.js', ['a1atscript/annotations.js', 'a1atscript/AnnotationFinder.js', 'a1atscript/injectorTypes.js'], function (_export) {
  'use strict';

  var AsModule, Module, AnnotationFinder, ConfigInjector, RunInjector, ControllerInjector, DirectiveInjector, ServiceInjector, FactoryInjector, ProviderInjector, ValueInjector, ConstantInjector, AnimationInjector, FilterInjector, registeredInjectors, Injector;

  _export('registerInjector', registerInjector);

  _export('getInjector', getInjector);

  function registerInjector(name, InjectorClass) {
    registeredInjectors[name] = new InjectorClass();
  }

  function getInjector(name) {
    return registeredInjectors[name];
  }

  return {
    setters: [function (_a1atscriptAnnotationsJs) {
      AsModule = _a1atscriptAnnotationsJs.AsModule;
      Module = _a1atscriptAnnotationsJs.Module;
    }, function (_a1atscriptAnnotationFinderJs) {
      AnnotationFinder = _a1atscriptAnnotationFinderJs.AnnotationFinder;
    }, function (_a1atscriptInjectorTypesJs) {
      ConfigInjector = _a1atscriptInjectorTypesJs.ConfigInjector;
      RunInjector = _a1atscriptInjectorTypesJs.RunInjector;
      ControllerInjector = _a1atscriptInjectorTypesJs.ControllerInjector;
      DirectiveInjector = _a1atscriptInjectorTypesJs.DirectiveInjector;
      ServiceInjector = _a1atscriptInjectorTypesJs.ServiceInjector;
      FactoryInjector = _a1atscriptInjectorTypesJs.FactoryInjector;
      ProviderInjector = _a1atscriptInjectorTypesJs.ProviderInjector;
      ValueInjector = _a1atscriptInjectorTypesJs.ValueInjector;
      ConstantInjector = _a1atscriptInjectorTypesJs.ConstantInjector;
      AnimationInjector = _a1atscriptInjectorTypesJs.AnimationInjector;
      FilterInjector = _a1atscriptInjectorTypesJs.FilterInjector;
    }],
    execute: function () {
      registeredInjectors = {};

      registerInjector('config', ConfigInjector);
      registerInjector('run', RunInjector);
      registerInjector('controller', ControllerInjector);
      registerInjector('directive', DirectiveInjector);
      registerInjector('service', ServiceInjector);
      registerInjector('factory', FactoryInjector);
      registerInjector('provider', ProviderInjector);
      registerInjector('value', ValueInjector);
      registerInjector('constant', ConstantInjector);
      registerInjector('animation', AnimationInjector);
      registerInjector('filter', FilterInjector);

      Injector = (function () {
        function Injector() {
          var appNamePrefix = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
          babelHelpers.classCallCheck(this, Injector);

          this.appNamePrefix = appNamePrefix;
          this.injectedModules = {};
        }

        babelHelpers.createClass(Injector, [{
          key: 'instantiate',
          value: function instantiate(moduleClass) {
            var metadata = this._getAnnotatedClass(moduleClass);
            if (!metadata) {
              return undefined;
            }
            if (this.injectedModules[metadata.token]) {
              return this.injectedModules[metadata.token];
            }
            var sortedDependencies = this._sortModuleDependencies(metadata);
            sortedDependencies = this._sortSelf(metadata, moduleClass, sortedDependencies);
            var moduleDependencies = this._instantiateModuleDependencies(sortedDependencies.module);
            var moduleName = metadata.token;
            if (this.appNamePrefix && moduleName != this.appNamePrefix) {
              moduleName = this.appNamePrefix + '.' + moduleName;
            }
            var instantiatedModule = angular.module(moduleName, moduleDependencies);
            delete sortedDependencies.module;
            this._instantiateOtherDependencies(sortedDependencies, instantiatedModule);
            this.injectedModules[metadata.token] = moduleName;
            return moduleName;
          }
        }, {
          key: '_sortSelf',
          value: function _sortSelf(metadata, moduleClass, sortedDependencies) {
            if (metadata == moduleClass) {
              return sortedDependencies;
            } else {
              var selfDependency = this._sortDependency(moduleClass, false);
              return this._mergeSortedDependencies(sortedDependencies, selfDependency);
            }
          }
        }, {
          key: '_getAnnotatedClass',
          value: function _getAnnotatedClass(moduleClass) {
            if (moduleClass instanceof Module) {
              moduleClass.injectable = false;
              return moduleClass;
            } else {
              var metadata = this._getModuleAnnotation(moduleClass);
              return metadata;
            }
          }
        }, {
          key: '_getDependencyType',
          value: function _getDependencyType(dependency) {
            var annotations = dependency.annotations;
            for (var i = 0; i < annotations.length; i++) {
              var annotation = annotations[i];
              var foundInjector = Object.keys(registeredInjectors).find(function (key) {
                var annotationClass = registeredInjectors[key].annotationClass;
                annotationClass = annotationClass.originalClass || annotationClass;
                return annotation instanceof annotationClass;
              });
              if (foundInjector) {
                return {
                  key: foundInjector,
                  metadata: annotation
                };
              }
            }
            return null;
          }
        }, {
          key: '_getModuleAnnotation',
          value: function _getModuleAnnotation(dependency) {
            return new AnnotationFinder(dependency).annotationFor(Module);
          }
        }, {
          key: '_mergeSortedDependencies',
          value: function _mergeSortedDependencies(sorted1, sorted2) {
            var newSorted = {};
            Object.assign(newSorted, sorted1);
            Object.keys(sorted2).forEach(function (key) {
              if (newSorted[key]) {
                newSorted[key] = newSorted[key].concat(sorted2[key]);
              } else {
                newSorted[key] = sorted2[key];
              }
            });
            return newSorted;
          }
        }, {
          key: '_sortDependency',
          value: function _sortDependency(dependency) {
            var _this = this;

            var checkModule = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

            var sorted = {};

            if (typeof dependency === "string" || dependency instanceof Module) {
              sorted.module = [dependency];
            } else if (dependency.annotations) {
              if (checkModule && this._getModuleAnnotation(dependency)) {
                sorted.module = [dependency];
              } else {
                var dependencyType = this._getDependencyType(dependency);
                if (dependencyType) {
                  sorted[dependencyType.key] = [{
                    dependency: dependency,
                    metadata: dependencyType.metadata
                  }];
                }
              }
            } else {
              Object.keys(dependency).forEach(function (key) {
                var subDependency = dependency[key];
                var sortedSubDependencies = _this._sortDependency(subDependency);
                sorted = _this._mergeSortedDependencies(sorted, sortedSubDependencies);
              });
            }
            return sorted;
          }
        }, {
          key: '_sortModuleDependencies',
          value: function _sortModuleDependencies(moduleClass) {
            var _this2 = this;

            var sorted = {};
            moduleClass.dependencies.forEach(function (dependency) {
              var newSortedDependencies = _this2._sortDependency(dependency);
              sorted = _this2._mergeSortedDependencies(sorted, newSortedDependencies);
            });

            return sorted;
          }
        }, {
          key: '_moduleMetadata',
          value: function _moduleMetadata(moduleClass) {
            return moduleClass.annotations.find(function (value) {
              return value instanceof Module || value instanceof AsModule;
            });
          }
        }, {
          key: '_instantiateModuleDependencies',
          value: function _instantiateModuleDependencies(moduleDependencies) {
            var _this3 = this;

            var returnedDependencies = [];

            if (moduleDependencies) {
              moduleDependencies.forEach(function (moduleDependency) {
                if (typeof moduleDependency === "string") {
                  returnedDependencies.push(moduleDependency);
                } else {
                  returnedDependencies.push(_this3.instantiate(moduleDependency));
                }
              });
            }

            return returnedDependencies;
          }
        }, {
          key: '_instantiateOtherDependencies',
          value: function _instantiateOtherDependencies(sortedDependencies, instantiatedModule) {
            Object.keys(sortedDependencies).forEach(function (dependencyType) {
              registeredInjectors[dependencyType].instantiate(instantiatedModule, sortedDependencies[dependencyType]);
            });
          }
        }, {
          key: 'annotationClass',
          get: function get() {
            return Module;
          }
        }]);
        return Injector;
      })();

      _export('Injector', Injector);
    }
  };
});
System.register("a1atscript/bootstrap.js", ["a1atscript/Injector.js", "a1atscript/Router.js"], function (_export) {
  "use strict";

  var Injector, Router;

  _export("bootstrap", bootstrap);

  function bootstrap(appModule) {
    var appPrefix = arguments.length <= 1 || arguments[1] === undefined ? "" : arguments[1];

    var injector = new Injector(appPrefix);
    var moduleName = injector.instantiate(appModule);
    Router.routeInitializer.initialize(moduleName, appModule);
  }

  return {
    setters: [function (_a1atscriptInjectorJs) {
      Injector = _a1atscriptInjectorJs.Injector;
    }, function (_a1atscriptRouterJs) {
      Router = _a1atscriptRouterJs.Router;
    }],
    execute: function () {}
  };
});
System.register('a1atscript/annotations.js', ['a1atscript/ToAnnotation.js'], function (_export) {
  'use strict';

  var ToAnnotation, NgAnnotation, NgNamedAnnotation, Config, Run, Controller, Directive, Service, Factory, Provider, Value, Constant, Filter, Animation, Module, AsModule;
  return {
    setters: [function (_a1atscriptToAnnotationJs) {
      ToAnnotation = _a1atscriptToAnnotationJs.ToAnnotation;
    }],
    execute: function () {
      NgAnnotation = function NgAnnotation() {
        babelHelpers.classCallCheck(this, NgAnnotation);

        for (var _len = arguments.length, dependencies = Array(_len), _key = 0; _key < _len; _key++) {
          dependencies[_key] = arguments[_key];
        }

        this.dependencies = dependencies;
      };

      NgNamedAnnotation = function NgNamedAnnotation(token) {
        var dependencies = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
        babelHelpers.classCallCheck(this, NgNamedAnnotation);

        this.dependencies = dependencies;
        this.token = token;
      };

      Config = (function (_NgAnnotation) {
        babelHelpers.inherits(Config, _NgAnnotation);

        function Config() {
          babelHelpers.classCallCheck(this, _Config);
          babelHelpers.get(Object.getPrototypeOf(_Config.prototype), 'constructor', this).apply(this, arguments);
        }

        var _Config = Config;
        Config = ToAnnotation(Config) || Config;
        return Config;
      })(NgAnnotation);

      _export('Config', Config);

      Run = (function (_NgAnnotation2) {
        babelHelpers.inherits(Run, _NgAnnotation2);

        function Run() {
          babelHelpers.classCallCheck(this, _Run);
          babelHelpers.get(Object.getPrototypeOf(_Run.prototype), 'constructor', this).apply(this, arguments);
        }

        var _Run = Run;
        Run = ToAnnotation(Run) || Run;
        return Run;
      })(NgAnnotation);

      _export('Run', Run);

      Controller = (function (_NgNamedAnnotation) {
        babelHelpers.inherits(Controller, _NgNamedAnnotation);

        function Controller() {
          babelHelpers.classCallCheck(this, _Controller);
          babelHelpers.get(Object.getPrototypeOf(_Controller.prototype), 'constructor', this).apply(this, arguments);
        }

        var _Controller = Controller;
        Controller = ToAnnotation(Controller) || Controller;
        return Controller;
      })(NgNamedAnnotation);

      _export('Controller', Controller);

      Directive = (function (_NgNamedAnnotation2) {
        babelHelpers.inherits(Directive, _NgNamedAnnotation2);

        function Directive() {
          babelHelpers.classCallCheck(this, _Directive);
          babelHelpers.get(Object.getPrototypeOf(_Directive.prototype), 'constructor', this).apply(this, arguments);
        }

        var _Directive = Directive;
        Directive = ToAnnotation(Directive) || Directive;
        return Directive;
      })(NgNamedAnnotation);

      _export('Directive', Directive);

      Service = (function (_NgNamedAnnotation3) {
        babelHelpers.inherits(Service, _NgNamedAnnotation3);

        function Service() {
          babelHelpers.classCallCheck(this, _Service);
          babelHelpers.get(Object.getPrototypeOf(_Service.prototype), 'constructor', this).apply(this, arguments);
        }

        var _Service = Service;
        Service = ToAnnotation(Service) || Service;
        return Service;
      })(NgNamedAnnotation);

      _export('Service', Service);

      Factory = (function (_NgNamedAnnotation4) {
        babelHelpers.inherits(Factory, _NgNamedAnnotation4);

        function Factory() {
          babelHelpers.classCallCheck(this, _Factory);
          babelHelpers.get(Object.getPrototypeOf(_Factory.prototype), 'constructor', this).apply(this, arguments);
        }

        var _Factory = Factory;
        Factory = ToAnnotation(Factory) || Factory;
        return Factory;
      })(NgNamedAnnotation);

      _export('Factory', Factory);

      Provider = (function (_NgNamedAnnotation5) {
        babelHelpers.inherits(Provider, _NgNamedAnnotation5);

        function Provider() {
          babelHelpers.classCallCheck(this, _Provider);
          babelHelpers.get(Object.getPrototypeOf(_Provider.prototype), 'constructor', this).apply(this, arguments);
        }

        var _Provider = Provider;
        Provider = ToAnnotation(Provider) || Provider;
        return Provider;
      })(NgNamedAnnotation);

      _export('Provider', Provider);

      Value = (function (_NgNamedAnnotation6) {
        babelHelpers.inherits(Value, _NgNamedAnnotation6);

        function Value() {
          babelHelpers.classCallCheck(this, _Value);
          babelHelpers.get(Object.getPrototypeOf(_Value.prototype), 'constructor', this).apply(this, arguments);
        }

        var _Value = Value;
        Value = ToAnnotation(Value) || Value;
        return Value;
      })(NgNamedAnnotation);

      _export('Value', Value);

      Constant = (function (_NgNamedAnnotation7) {
        babelHelpers.inherits(Constant, _NgNamedAnnotation7);

        function Constant() {
          babelHelpers.classCallCheck(this, _Constant);
          babelHelpers.get(Object.getPrototypeOf(_Constant.prototype), 'constructor', this).apply(this, arguments);
        }

        var _Constant = Constant;
        Constant = ToAnnotation(Constant) || Constant;
        return Constant;
      })(NgNamedAnnotation);

      _export('Constant', Constant);

      Filter = (function (_NgNamedAnnotation8) {
        babelHelpers.inherits(Filter, _NgNamedAnnotation8);

        function Filter() {
          babelHelpers.classCallCheck(this, _Filter);
          babelHelpers.get(Object.getPrototypeOf(_Filter.prototype), 'constructor', this).apply(this, arguments);
        }

        var _Filter = Filter;
        Filter = ToAnnotation(Filter) || Filter;
        return Filter;
      })(NgNamedAnnotation);

      _export('Filter', Filter);

      Animation = (function (_NgNamedAnnotation9) {
        babelHelpers.inherits(Animation, _NgNamedAnnotation9);

        function Animation() {
          babelHelpers.classCallCheck(this, _Animation);
          babelHelpers.get(Object.getPrototypeOf(_Animation.prototype), 'constructor', this).apply(this, arguments);
        }

        var _Animation = Animation;
        Animation = ToAnnotation(Animation) || Animation;
        return Animation;
      })(NgNamedAnnotation);

      _export('Animation', Animation);

      Module = (function (_NgNamedAnnotation10) {
        babelHelpers.inherits(Module, _NgNamedAnnotation10);

        function Module() {
          babelHelpers.classCallCheck(this, Module);
          babelHelpers.get(Object.getPrototypeOf(Module.prototype), 'constructor', this).apply(this, arguments);
        }

        return Module;
      })(NgNamedAnnotation);

      _export('Module', Module);

      AsModule = (function (_Module) {
        babelHelpers.inherits(AsModule, _Module);

        function AsModule() {
          babelHelpers.classCallCheck(this, _AsModule);
          babelHelpers.get(Object.getPrototypeOf(_AsModule.prototype), 'constructor', this).apply(this, arguments);
        }

        var _AsModule = AsModule;
        AsModule = ToAnnotation(AsModule) || AsModule;
        return AsModule;
      })(Module);

      _export('AsModule', AsModule);
    }
  };
});
System.register("a1atscript/ng2Directives/Ng2Directive.js", [], function (_export) {
  "use strict";

  var Ng2Directive;
  return {
    setters: [],
    execute: function () {
      Ng2Directive = function Ng2Directive(descriptor) {
        babelHelpers.classCallCheck(this, Ng2Directive);

        this.selector = descriptor.selector;
        this.properties = descriptor.properties || descriptor.bind;
        this.controllerAs = descriptor.controllerAs;
        this.require = descriptor.require;
        this.transclude = descriptor.transclude;
        this.events = descriptor.events;
      };

      _export("default", Ng2Directive);
    }
  };
});
System.register('a1atscript/ng2Directives/Component.js', ['a1atscript/ng2Directives/Ng2Directive.js', 'a1atscript/ToAnnotation.js'], function (_export) {
  'use strict';

  var Ng2Directive, ToAnnotation, Component, ViewBase, Template, View;
  return {
    setters: [function (_a1atscriptNg2DirectivesNg2DirectiveJs) {
      Ng2Directive = _a1atscriptNg2DirectivesNg2DirectiveJs['default'];
    }, function (_a1atscriptToAnnotationJs) {
      ToAnnotation = _a1atscriptToAnnotationJs.ToAnnotation;
    }],
    execute: function () {
      Component = (function (_Ng2Directive) {
        babelHelpers.inherits(Component, _Ng2Directive);

        function Component(descriptor) {
          babelHelpers.classCallCheck(this, _Component);

          babelHelpers.get(Object.getPrototypeOf(_Component.prototype), 'constructor', this).call(this, descriptor);
          this.appInjector = descriptor.appInjector || descriptor.injectables || descriptor.services;
        }

        var _Component = Component;
        Component = ToAnnotation(Component) || Component;
        return Component;
      })(Ng2Directive);

      _export('Component', Component);

      ViewBase = function ViewBase(descriptor) {
        babelHelpers.classCallCheck(this, ViewBase);

        this.templateUrl = descriptor.templateUrl || descriptor.url;
        this.template = descriptor.template || descriptor.inline;
      };

      _export('ViewBase', ViewBase);

      Template = (function (_ViewBase) {
        babelHelpers.inherits(Template, _ViewBase);

        function Template() {
          babelHelpers.classCallCheck(this, _Template);
          babelHelpers.get(Object.getPrototypeOf(_Template.prototype), 'constructor', this).apply(this, arguments);
        }

        var _Template = Template;
        Template = ToAnnotation(Template) || Template;
        return Template;
      })(ViewBase);

      _export('Template', Template);

      View = (function (_ViewBase2) {
        babelHelpers.inherits(View, _ViewBase2);

        function View() {
          babelHelpers.classCallCheck(this, _View);
          babelHelpers.get(Object.getPrototypeOf(_View.prototype), 'constructor', this).apply(this, arguments);
        }

        var _View = View;
        View = ToAnnotation(View) || View;
        return View;
      })(ViewBase);

      _export('View', View);
    }
  };
});
System.register("a1atscript/ng2Directives/SelectorMatcher.js", [], function (_export) {
  "use strict";

  var SPECIAL_CHARS_REGEXP, MOZ_HACK_REGEXP, SelectorMatcher;
  return {
    setters: [],
    execute: function () {
      SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
      MOZ_HACK_REGEXP = /^moz([A-Z])/;

      SelectorMatcher = (function () {
        function SelectorMatcher(selector) {
          babelHelpers.classCallCheck(this, SelectorMatcher);

          this._selector = selector;
        }

        babelHelpers.createClass(SelectorMatcher, [{
          key: "_camelizeName",
          value: function _camelizeName() {
            this._name = this._name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
              return offset ? letter.toUpperCase() : letter;
            }).replace(MOZ_HACK_REGEXP, 'Moz$1');
          }
        }, {
          key: "_split",
          value: function _split() {
            if (this._selector[0] == ".") {
              this._restrict = "C";
              this._name = this._selector.substring(1);
            } else if (this._selector[0] == "[" && this._selector[this._selector.length - 1] == "]") {
              this._restrict = "A";
              this._name = this._selector.substring(1, this._selector.length - 1);
            } else {
              this._restrict = "E";
              this._name = this._selector;
            }
          }
        }, {
          key: "name",
          get: function get() {
            if (!this._name) {
              this._split();
            }
            this._camelizeName();
            return this._name;
          }
        }, {
          key: "restrict",
          get: function get() {
            if (!this._restrict) {
              this._split();
            }
            return this._restrict;
          }
        }]);
        return SelectorMatcher;
      })();

      _export("default", SelectorMatcher);
    }
  };
});
System.register("a1atscript/router/ComponentMapper.js", ["a1atscript/annotations.js", "a1atscript/ng2Directives/Component.js", "a1atscript/AnnotationFinder.js", "a1atscript/ng2Directives/SelectorMatcher.js"], function (_export) {
  "use strict";

  var Controller, Component, ViewBase, AnnotationFinder, SelectorMatcher, DEFAULT_CONTROLLER_SUFFIX, DEFAULT_COMPONENT_PREFIX, DEFAULT_CONTROLLER_PREFIX, ComponentMapping, ComponentMapper;
  return {
    setters: [function (_a1atscriptAnnotationsJs) {
      Controller = _a1atscriptAnnotationsJs.Controller;
    }, function (_a1atscriptNg2DirectivesComponentJs) {
      Component = _a1atscriptNg2DirectivesComponentJs.Component;
      ViewBase = _a1atscriptNg2DirectivesComponentJs.ViewBase;
    }, function (_a1atscriptAnnotationFinderJs) {
      AnnotationFinder = _a1atscriptAnnotationFinderJs.AnnotationFinder;
    }, function (_a1atscriptNg2DirectivesSelectorMatcherJs) {
      SelectorMatcher = _a1atscriptNg2DirectivesSelectorMatcherJs["default"];
    }],
    execute: function () {
      DEFAULT_CONTROLLER_SUFFIX = "Controller";
      DEFAULT_COMPONENT_PREFIX = "a1atscript";
      DEFAULT_CONTROLLER_PREFIX = "A1AtScript";

      ComponentMapping = (function () {
        function ComponentMapping(component, componentMapper) {
          babelHelpers.classCallCheck(this, ComponentMapping);

          this.component = component;
          this.componentMapper = componentMapper;
        }

        babelHelpers.createClass(ComponentMapping, [{
          key: "componentName",
          get: function get() {
            return this.componentMapper.map.get(this.component);
          }
        }, {
          key: "templateUrl",
          get: function get() {
            return this.componentMapper.registry[this.componentName].templateUrl;
          }
        }, {
          key: "isController",
          get: function get() {
            return this.componentMapper.registry[this.componentName].isController;
          }
        }, {
          key: "controllerName",
          get: function get() {
            return this.componentMapper.registry[this.componentName].controllerName;
          }
        }]);
        return ComponentMapping;
      })();

      ComponentMapper = (function () {
        function ComponentMapper() {
          babelHelpers.classCallCheck(this, ComponentMapper);
        }

        babelHelpers.createClass(ComponentMapper, [{
          key: "register",
          value: function register(component) {
            if (!this.map.get(component)) {
              this._setupComponent(component);
            }
            return new ComponentMapping(component, this);
          }
        }, {
          key: "_getControllerComponentName",
          value: function _getControllerComponentName(component) {
            var name = this._getControllerName(component);
            if (name) {
              if (name.endsWith(DEFAULT_CONTROLLER_SUFFIX)) {
                return name[0].toLowerCase() + name.substr(1, name.length - DEFAULT_CONTROLLER_SUFFIX.length - 1);
              } else {
                return name[0].toLowerCase() + name.substr(1, name.length - 1);
              }
            } else {
              return null;
            }
          }
        }, {
          key: "_getControllerName",
          value: function _getControllerName(component) {
            var controllerAnnotation = new AnnotationFinder(component).annotationFor(Controller);
            if (controllerAnnotation) {
              return controllerAnnotation.token;
            } else {
              return null;
            }
          }
        }, {
          key: "_isController",
          value: function _isController(component) {
            var controllerAnnotation = new AnnotationFinder(component).annotationFor(Controller);
            if (controllerAnnotation) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "_getComponentName",
          value: function _getComponentName(component) {
            var componentAnnotation = new AnnotationFinder(component).annotationFor(Component);
            if (componentAnnotation) {
              if (componentAnnotation.controllerAs) {
                return componentAnnotation.controllerAs;
              } else if (componentAnnotation.selector) {
                var selectorMatcher = new SelectorMatcher(componentAnnotation.selector);
                return selectorMatcher.name;
              } else {
                return null;
              }
            } else {
              return null;
            }
          }
        }, {
          key: "_getGeneratedName",
          value: function _getGeneratedName() {
            this._componentIndex = this._componentIndex || 0;
            var name = DEFAULT_COMPONENT_PREFIX + "Component_" + this._componentIndex;
            this._componentIndex = this._componentIndex + 1;
            return name;
          }
        }, {
          key: "_generateName",
          value: function _generateName(component) {
            var name = this._getControllerComponentName(component);
            name = name || this._getComponentName(component);
            name = name || this._getGeneratedName();
            return name;
          }
        }, {
          key: "_generateTemplate",
          value: function _generateTemplate(name, component) {
            var viewAnnotation = new AnnotationFinder(component).annotationFor(ViewBase);
            if (viewAnnotation && viewAnnotation.templateUrl) {
              return viewAnnotation.templateUrl;
            } else {
              return "./components/" + name + "/" + name + ".html";
            }
          }
        }, {
          key: "_readInlineTemplate",
          value: function _readInlineTemplate(templateUrl, component) {
            var viewAnnotation = new AnnotationFinder(component).annotationFor(ViewBase);
            if (viewAnnotation && viewAnnotation.template) {
              this.inlineTemplateCache[templateUrl] = viewAnnotation.template;
            }
          }
        }, {
          key: "_generateControllerName",
          value: function _generateControllerName(name) {
            var componentBase;
            if (name.startsWith(DEFAULT_COMPONENT_PREFIX)) {
              componentBase = name.substring(DEFAULT_COMPONENT_PREFIX.length, name.length);
            } else {
              componentBase = name;
            }
            return DEFAULT_CONTROLLER_PREFIX + componentBase[0].toUpperCase() + componentBase.substring(1, componentBase.length) + DEFAULT_CONTROLLER_SUFFIX;
          }
        }, {
          key: "_setupComponent",
          value: function _setupComponent(component) {
            var name = this._generateName(component);
            var templateUrl = this._generateTemplate(name, component);
            var controllerName = this._getControllerName(component);
            var isController;
            if (controllerName) {
              isController = true;
            } else {
              isController = false;
              controllerName = this._generateControllerName(name);
            }
            this.map.set(component, name);
            this.registry[name] = { component: component, templateUrl: templateUrl, isController: isController, controllerName: controllerName };
            this.controllerRegistry[controllerName] = name;
            this._readInlineTemplate(templateUrl, component);
          }
        }, {
          key: "getComponent",
          value: function getComponent(componentName) {
            return this.registry[componentName].component;
          }
        }, {
          key: "getTemplateUrl",
          value: function getTemplateUrl(componentName) {
            return this.registry[componentName].templateUrl;
          }
        }, {
          key: "getComponentName",
          value: function getComponentName(component) {
            return this.map.get(component);
          }
        }, {
          key: "registry",
          get: function get() {
            this._componentRegistry = this._componentRegistry || {};
            return this._componentRegistry;
          }
        }, {
          key: "map",
          get: function get() {
            this._componentMap = this._componentMap || new Map();
            return this._componentMap;
          }
        }, {
          key: "controllerRegistry",
          get: function get() {
            this._controllerRegistry = this._controllerRegistry || {};
            return this._controllerRegistry;
          }
        }, {
          key: "inlineTemplateCache",
          get: function get() {
            this._inlineTemplateCache = this._inlineTemplateCache || {};
            return this._inlineTemplateCache;
          }
        }]);
        return ComponentMapper;
      })();

      _export("ComponentMapper", ComponentMapper);
    }
  };
});
System.register("a1atscript/AnnotationFinder.js", [], function (_export) {
  "use strict";

  var AnnotationFinder;
  return {
    setters: [],
    execute: function () {
      AnnotationFinder = (function () {
        function AnnotationFinder(AnnotatedClass) {
          babelHelpers.classCallCheck(this, AnnotationFinder);

          this.AnnotatedClass = AnnotatedClass;
        }

        babelHelpers.createClass(AnnotationFinder, [{
          key: "annotationFor",
          value: function annotationFor(AnnotationClass) {
            var OriginalClass = AnnotationClass.originalClass || AnnotationClass;
            if (this.AnnotatedClass.annotations) {
              return this.AnnotatedClass.annotations.find(function (annotation) {
                return annotation instanceof OriginalClass;
              });
            } else {
              return null;
            }
          }
        }, {
          key: "annotationsFor",
          value: function annotationsFor(AnnotationClass) {
            var OriginalClass = AnnotationClass.originalClass || AnnotationClass;
            if (this.AnnotatedClass.annotations) {
              return this.AnnotatedClass.annotations.filter(function (annotation) {
                return annotation instanceof OriginalClass;
              });
            } else {
              return null;
            }
          }
        }]);
        return AnnotationFinder;
      })();

      _export("AnnotationFinder", AnnotationFinder);
    }
  };
});
System.register("a1atscript/router/RouteReader.js", ["a1atscript/router/RouteConfig.js", "a1atscript/AnnotationFinder.js"], function (_export) {
  "use strict";

  var RouteConfig, AnnotationFinder, RouteReader;
  return {
    setters: [function (_a1atscriptRouterRouteConfigJs) {
      RouteConfig = _a1atscriptRouterRouteConfigJs.RouteConfig;
    }, function (_a1atscriptAnnotationFinderJs) {
      AnnotationFinder = _a1atscriptAnnotationFinderJs.AnnotationFinder;
    }],
    execute: function () {
      RouteReader = (function () {
        function RouteReader(componentMapper) {
          babelHelpers.classCallCheck(this, RouteReader);

          this.componentMapper = componentMapper;
        }

        babelHelpers.createClass(RouteReader, [{
          key: "_routeConfigAnnotations",
          value: function _routeConfigAnnotations(component) {
            return new AnnotationFinder(component).annotationsFor(RouteConfig);
          }
        }, {
          key: "_routeConfig",
          value: function _routeConfig(component) {
            return this._routeConfigAnnotations(component).map(this._convertConfig.bind(this));
          }
        }, {
          key: "_componentName",
          value: function _componentName(component) {
            if (typeof component === "string") {
              return component;
            } else {
              return this.componentMapper.register(component).componentName;
            }
          }
        }, {
          key: "_convertConfig",
          value: function _convertConfig(routeConfigAnnotation) {
            var _this = this;

            var routeDescription = Object.assign({}, routeConfigAnnotation.routeDescription);
            if (routeDescription.component) {
              routeDescription.component = this._componentName(routeDescription.component);
            }

            if (routeDescription.components) {
              var components = {};
              Object.keys(routeDescription.components).forEach(function (key) {
                components[key] = _this._componentName(routeDescription.components[key]);
              });
              routeDescription.components = components;
            }

            return routeDescription;
          }
        }, {
          key: "read",
          value: function read(component) {
            var mapping = this.componentMapper.register(component);
            component.$routeConfig = this._routeConfig(component);
          }
        }]);
        return RouteReader;
      })();

      _export("RouteReader", RouteReader);
    }
  };
});
System.register('a1atscript/router/RouteInitializer.js', [], function (_export) {
  'use strict';

  var RouteInitializer;
  return {
    setters: [],
    execute: function () {
      RouteInitializer = (function () {
        function RouteInitializer(componentMapper) {
          babelHelpers.classCallCheck(this, RouteInitializer);

          this.componentMapper = componentMapper;
        }

        babelHelpers.createClass(RouteInitializer, [{
          key: 'configurationFunction',
          value: function configurationFunction(componentMapperName) {
            var componentMapper = this.componentMapper;
            return function ($injector) {
              var $componentMapper;
              try {
                $componentMapper = $injector.get(componentMapperName);
              } catch (e) {
                return;
              }
              $componentMapper.setCtrlNameMapping(function (name) {
                return componentMapper.registry[name].controllerName;
              });
              $componentMapper.setTemplateMapping(function (name) {
                return componentMapper.registry[name].templateUrl;
              });
              $componentMapper.setComponentFromCtrlMapping(function (controllerName) {
                return componentMapper.controllerRegistry[controllerName];
              });
            };
          }
        }, {
          key: 'topRouteConfig',
          value: function topRouteConfig(routerName, routeConfig) {
            return function ($injector) {
              var $router;
              try {
                $router = $injector.get(routerName);
              } catch (e) {
                return;
              }
              $router.config(routeConfig);
            };
          }
        }, {
          key: 'setupComponentControllers',
          value: function setupComponentControllers() {
            var _this = this;

            Object.keys(this.componentMapper.registry).forEach(function (component) {
              var config = _this.componentMapper.registry[component];
              if (!config.isController && config.component != _this.topComponent) {
                _this.module.controller(config.controllerName, config.component);
              }
            });
          }
        }, {
          key: 'setupInlineTemplates',
          value: function setupInlineTemplates() {
            var inlineTemplateCache = this.componentMapper.inlineTemplateCache;
            return function ($templateCache) {
              Object.keys(inlineTemplateCache).forEach(function (templateUrl) {
                $templateCache.put(templateUrl, inlineTemplateCache[templateUrl]);
              });
            };
          }
        }, {
          key: 'initialize',
          value: function initialize(ngModuleName) {
            var topComponent = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

            this.module = angular.module(ngModuleName);

            // ng-new-router changed the name of its componentMapper service recently
            // essentially the approach here is to try to configure the mapper with both names
            // catch exceptions if they don't exist.
            // if both throw an exception, than there is no component router present
            this.module.config(['$injector', this.configurationFunction('$componentLoaderProvider')]);
            this.module.run(['$injector', this.configurationFunction('$componentMapper')]);

            if (topComponent && topComponent.$routeConfig) {
              this.topComponent = topComponent;
              this.module.run(['$injector', this.topRouteConfig('$router', topComponent.$routeConfig)]);
            }

            this.setupComponentControllers();

            this.module.run(['$templateCache', this.setupInlineTemplates()]);
          }
        }]);
        return RouteInitializer;
      })();

      _export('RouteInitializer', RouteInitializer);
    }
  };
});
System.register('a1atscript/ToAnnotation.js', [], function (_export) {
  'use strict';

  _export('ToAnnotation', ToAnnotation);

  function defineAnnotation(target, AnnotationClass, callParams) {
    var oldAnnotation = Object.getOwnPropertyDescriptor(target, 'annotations');
    if (oldAnnotation) {
      var oldGetter = oldAnnotation.get;
      Object.defineProperty(target, 'annotations', {
        configurable: true,
        get: function get() {
          var oldValue = oldGetter();
          oldValue.unshift(new (Function.prototype.bind.apply(AnnotationClass, callParams))());
          return oldValue;
        } });
    } else {
      Object.defineProperty(target, 'annotations', {
        configurable: true,
        get: function get() {
          return [new (Function.prototype.bind.apply(AnnotationClass, callParams))()];
        } });
    }
  }

  function handleProperty(descriptor, AnnotationClass, callParams) {
    var value;
    if (descriptor.initializer) {
      value = descriptor.initializer();
    } else {
      value = descriptor.value;
    }
    defineAnnotation(value, AnnotationClass, callParams);
    if (descriptor.initializer) {
      descriptor.initializer = function () {
        return value;
      };
    }
    descriptor.enumerable = true;
    return descriptor;
  }

  function ToAnnotation(AnnotationClass) {
    var decorator = function decorator() {
      for (var _len = arguments.length, callParams = Array(_len), _key = 0; _key < _len; _key++) {
        callParams[_key] = arguments[_key];
      }

      callParams.unshift(null);
      return function (targetClass) {
        for (var _len2 = arguments.length, otherParams = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          otherParams[_key2 - 1] = arguments[_key2];
        }

        if (otherParams.length >= 2) {
          return handleProperty(otherParams[1], AnnotationClass, callParams);
        } else {
          defineAnnotation(targetClass, AnnotationClass, callParams);
          return targetClass;
        }
      };
    };
    decorator.originalClass = AnnotationClass;
    return decorator;
  }

  return {
    setters: [],
    execute: function () {}
  };
});
System.register('a1atscript/router/RouteConfig.js', ['a1atscript/ToAnnotation.js'], function (_export) {
  'use strict';

  var ToAnnotation, RouteConfig;
  return {
    setters: [function (_a1atscriptToAnnotationJs) {
      ToAnnotation = _a1atscriptToAnnotationJs.ToAnnotation;
    }],
    execute: function () {
      RouteConfig = (function () {
        function RouteConfig(routeDescription) {
          babelHelpers.classCallCheck(this, _RouteConfig);

          this.routeDescription = routeDescription;
        }

        var _RouteConfig = RouteConfig;
        RouteConfig = ToAnnotation(RouteConfig) || RouteConfig;
        return RouteConfig;
      })();

      _export('RouteConfig', RouteConfig);
    }
  };
});
System.register("a1atscript/Router.js", ["a1atscript/router/ComponentMapper.js", "a1atscript/router/RouteReader.js", "a1atscript/router/RouteInitializer.js", "a1atscript/router/RouteConfig.js"], function (_export) {
  "use strict";

  var ComponentMapper, RouteReader, RouteInitializer, componentMapper, routeReader, routeInitializer, Router;
  return {
    setters: [function (_a1atscriptRouterComponentMapperJs) {
      ComponentMapper = _a1atscriptRouterComponentMapperJs.ComponentMapper;
    }, function (_a1atscriptRouterRouteReaderJs) {
      RouteReader = _a1atscriptRouterRouteReaderJs.RouteReader;
    }, function (_a1atscriptRouterRouteInitializerJs) {
      RouteInitializer = _a1atscriptRouterRouteInitializerJs.RouteInitializer;
    }, function (_a1atscriptRouterRouteConfigJs) {
      _export("RouteConfig", _a1atscriptRouterRouteConfigJs.RouteConfig);
    }],
    execute: function () {
      componentMapper = new ComponentMapper();
      routeReader = new RouteReader(componentMapper);
      routeInitializer = new RouteInitializer(componentMapper);
      Router = {
        componentMapper: componentMapper,
        routeReader: routeReader,
        routeInitializer: routeInitializer
      };

      _export("Router", Router);
    }
  };
});
System.register("a1atscript/applyAnnotation.js", [], function (_export) {
  "use strict";

  _export("applyAnnotation", applyAnnotation);

  function applyAnnotation(target, annotationClass) {
    var AnnotationVersion = annotationClass.originalClass || annotationClass;
    target.annotations = target.annotations || [];

    for (var _len = arguments.length, params = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      params[_key - 2] = arguments[_key];
    }

    target.annotations.push(new (babelHelpers.bind.apply(AnnotationVersion, [null].concat(params)))());
  }

  return {
    setters: [],
    execute: function () {}
  };
});
System.register('a1atscript', ['a1atscript/ng2Directives/ComponentInjector.js', 'a1atscript/Injector.js', 'a1atscript/annotations.js', 'a1atscript/DirectiveObject.js', 'a1atscript/ng2Directives/Component.js', 'a1atscript/ToAnnotation.js', 'a1atscript/bootstrap.js', 'a1atscript/Router.js', 'a1atscript/applyAnnotation.js'], function (_export) {
  'use strict';

  return {
    setters: [function (_a1atscriptNg2DirectivesComponentInjectorJs) {}, function (_a1atscriptInjectorJs) {
      _export('registerInjector', _a1atscriptInjectorJs.registerInjector);

      _export('getInjector', _a1atscriptInjectorJs.getInjector);

      _export('Injector', _a1atscriptInjectorJs.Injector);
    }, function (_a1atscriptAnnotationsJs) {
      _export('Config', _a1atscriptAnnotationsJs.Config);

      _export('Run', _a1atscriptAnnotationsJs.Run);

      _export('Controller', _a1atscriptAnnotationsJs.Controller);

      _export('Directive', _a1atscriptAnnotationsJs.Directive);

      _export('Service', _a1atscriptAnnotationsJs.Service);

      _export('Factory', _a1atscriptAnnotationsJs.Factory);

      _export('Provider', _a1atscriptAnnotationsJs.Provider);

      _export('Value', _a1atscriptAnnotationsJs.Value);

      _export('Constant', _a1atscriptAnnotationsJs.Constant);

      _export('Filter', _a1atscriptAnnotationsJs.Filter);

      _export('Animation', _a1atscriptAnnotationsJs.Animation);

      _export('Module', _a1atscriptAnnotationsJs.Module);

      _export('AsModule', _a1atscriptAnnotationsJs.AsModule);
    }, function (_a1atscriptDirectiveObjectJs) {
      _export('DirectiveObject', _a1atscriptDirectiveObjectJs.DirectiveObject);
    }, function (_a1atscriptNg2DirectivesComponentJs) {
      _export('Component', _a1atscriptNg2DirectivesComponentJs.Component);

      _export('Template', _a1atscriptNg2DirectivesComponentJs.Template);

      _export('View', _a1atscriptNg2DirectivesComponentJs.View);
    }, function (_a1atscriptToAnnotationJs) {
      _export('ToAnnotation', _a1atscriptToAnnotationJs.ToAnnotation);
    }, function (_a1atscriptBootstrapJs) {
      _export('bootstrap', _a1atscriptBootstrapJs.bootstrap);
    }, function (_a1atscriptRouterJs) {
      _export('Router', _a1atscriptRouterJs.Router);

      _export('RouteConfig', _a1atscriptRouterJs.RouteConfig);
    }, function (_a1atscriptApplyAnnotationJs) {
      _export('applyAnnotation', _a1atscriptApplyAnnotationJs.applyAnnotation);
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=a1atscript.system.bundle.js.map