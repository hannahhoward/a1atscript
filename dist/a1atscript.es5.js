define('a1atscript/annotations',[], function() {
  
  var NgAnnotation = function NgAnnotation() {
    for (var dependencies = [],
        $__1 = 0; $__1 < arguments.length; $__1++)
      dependencies[$__1] = arguments[$__1];
    this.dependencies = dependencies;
  };
  ($traceurRuntime.createClass)(NgAnnotation, {}, {});
  var NgNamedAnnotation = function NgNamedAnnotation(token) {
    var dependencies = arguments[1] !== (void 0) ? arguments[1] : [];
    this.dependencies = dependencies;
    this.token = token;
  };
  ($traceurRuntime.createClass)(NgNamedAnnotation, {}, {});
  var Config = function Config() {
    $traceurRuntime.superConstructor($Config).apply(this, arguments);
  };
  var $Config = Config;
  ($traceurRuntime.createClass)(Config, {}, {}, NgAnnotation);
  var Run = function Run() {
    $traceurRuntime.superConstructor($Run).apply(this, arguments);
  };
  var $Run = Run;
  ($traceurRuntime.createClass)(Run, {}, {}, NgAnnotation);
  var Controller = function Controller() {
    $traceurRuntime.superConstructor($Controller).apply(this, arguments);
  };
  var $Controller = Controller;
  ($traceurRuntime.createClass)(Controller, {}, {}, NgNamedAnnotation);
  var Directive = function Directive() {
    $traceurRuntime.superConstructor($Directive).apply(this, arguments);
  };
  var $Directive = Directive;
  ($traceurRuntime.createClass)(Directive, {}, {}, NgNamedAnnotation);
  var Service = function Service() {
    $traceurRuntime.superConstructor($Service).apply(this, arguments);
  };
  var $Service = Service;
  ($traceurRuntime.createClass)(Service, {}, {}, NgNamedAnnotation);
  var Factory = function Factory() {
    $traceurRuntime.superConstructor($Factory).apply(this, arguments);
  };
  var $Factory = Factory;
  ($traceurRuntime.createClass)(Factory, {}, {}, NgNamedAnnotation);
  var Provider = function Provider() {
    $traceurRuntime.superConstructor($Provider).apply(this, arguments);
  };
  var $Provider = Provider;
  ($traceurRuntime.createClass)(Provider, {}, {}, NgNamedAnnotation);
  var Value = function Value() {
    $traceurRuntime.superConstructor($Value).apply(this, arguments);
  };
  var $Value = Value;
  ($traceurRuntime.createClass)(Value, {}, {}, NgNamedAnnotation);
  var Constant = function Constant() {
    $traceurRuntime.superConstructor($Constant).apply(this, arguments);
  };
  var $Constant = Constant;
  ($traceurRuntime.createClass)(Constant, {}, {}, NgNamedAnnotation);
  var Filter = function Filter() {
    $traceurRuntime.superConstructor($Filter).apply(this, arguments);
  };
  var $Filter = Filter;
  ($traceurRuntime.createClass)(Filter, {}, {}, NgNamedAnnotation);
  var Animation = function Animation() {
    $traceurRuntime.superConstructor($Animation).apply(this, arguments);
  };
  var $Animation = Animation;
  ($traceurRuntime.createClass)(Animation, {}, {}, NgNamedAnnotation);
  var Module = function Module() {
    $traceurRuntime.superConstructor($Module).apply(this, arguments);
  };
  var $Module = Module;
  ($traceurRuntime.createClass)(Module, {}, {}, NgNamedAnnotation);
  return {
    get Config() {
      return Config;
    },
    get Run() {
      return Run;
    },
    get Controller() {
      return Controller;
    },
    get Directive() {
      return Directive;
    },
    get Service() {
      return Service;
    },
    get Factory() {
      return Factory;
    },
    get Provider() {
      return Provider;
    },
    get Value() {
      return Value;
    },
    get Constant() {
      return Constant;
    },
    get Filter() {
      return Filter;
    },
    get Animation() {
      return Animation;
    },
    get Module() {
      return Module;
    },
    __esModule: true
  };
});

define('a1atscript/injectorTypes',["./annotations"], function($__0) {
  
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  var $__1 = $__0,
      Config = $__1.Config,
      Run = $__1.Run,
      Controller = $__1.Controller,
      Directive = $__1.Directive,
      Service = $__1.Service,
      Factory = $__1.Factory,
      Provider = $__1.Provider,
      Value = $__1.Value,
      Constant = $__1.Constant,
      Animation = $__1.Animation,
      Filter = $__1.Filter;
  var ListInjector = function ListInjector() {};
  ($traceurRuntime.createClass)(ListInjector, {instantiate: function(module, dependencyList) {
      var $__2 = this;
      dependencyList.forEach((function(dependencyObject) {
        $__2.instantiateOne(module, dependencyObject.dependency, dependencyObject.metadata);
      }));
    }}, {});
  var ConfigInjector = function ConfigInjector() {
    $traceurRuntime.superConstructor($ConfigInjector).apply(this, arguments);
  };
  var $ConfigInjector = ConfigInjector;
  ($traceurRuntime.createClass)(ConfigInjector, {
    get annotationClass() {
      return Config;
    },
    instantiateOne: function(module, config, metadata) {
      config['$inject'] = metadata.dependencies;
      module.config(config);
    }
  }, {}, ListInjector);
  var RunInjector = function RunInjector() {
    $traceurRuntime.superConstructor($RunInjector).apply(this, arguments);
  };
  var $RunInjector = RunInjector;
  ($traceurRuntime.createClass)(RunInjector, {
    get annotationClass() {
      return Run;
    },
    instantiateOne: function(module, run, metadata) {
      run['$inject'] = metadata.dependencies;
      module.run(run);
    }
  }, {}, ListInjector);
  var ControllerInjector = function ControllerInjector() {
    $traceurRuntime.superConstructor($ControllerInjector).apply(this, arguments);
  };
  var $ControllerInjector = ControllerInjector;
  ($traceurRuntime.createClass)(ControllerInjector, {
    get annotationClass() {
      return Controller;
    },
    instantiateOne: function(module, controller, metadata) {
      controller['$inject'] = metadata.dependencies;
      module.controller(metadata.token, controller);
    }
  }, {}, ListInjector);
  var DirectiveInjector = function DirectiveInjector() {
    $traceurRuntime.superConstructor($DirectiveInjector).apply(this, arguments);
  };
  var $DirectiveInjector = DirectiveInjector;
  ($traceurRuntime.createClass)(DirectiveInjector, {
    get annotationClass() {
      return Directive;
    },
    instantiateOne: function(module, directive, metadata) {
      directive['$inject'] = metadata.dependencies;
      module.directive(metadata.token, directive);
    }
  }, {}, ListInjector);
  var ServiceInjector = function ServiceInjector() {
    $traceurRuntime.superConstructor($ServiceInjector).apply(this, arguments);
  };
  var $ServiceInjector = ServiceInjector;
  ($traceurRuntime.createClass)(ServiceInjector, {
    get annotationClass() {
      return Service;
    },
    instantiateOne: function(module, service, metadata) {
      service['$inject'] = metadata.dependencies;
      module.service(metadata.token, service);
    }
  }, {}, ListInjector);
  var FactoryInjector = function FactoryInjector() {
    $traceurRuntime.superConstructor($FactoryInjector).apply(this, arguments);
  };
  var $FactoryInjector = FactoryInjector;
  ($traceurRuntime.createClass)(FactoryInjector, {
    get annotationClass() {
      return Factory;
    },
    instantiateOne: function(module, factory, metadata) {
      factory['$inject'] = metadata.dependencies;
      module.factory(metadata.token, factory);
    }
  }, {}, ListInjector);
  var ProviderInjector = function ProviderInjector() {
    $traceurRuntime.superConstructor($ProviderInjector).apply(this, arguments);
  };
  var $ProviderInjector = ProviderInjector;
  ($traceurRuntime.createClass)(ProviderInjector, {
    get annotationClass() {
      return Provider;
    },
    instantiateOne: function(module, provider, metadata) {
      provider['$inject'] = metadata.dependencies;
      module.provider(metadata.token, provider);
    }
  }, {}, ListInjector);
  var ValueInjector = function ValueInjector() {
    $traceurRuntime.superConstructor($ValueInjector).apply(this, arguments);
  };
  var $ValueInjector = ValueInjector;
  ($traceurRuntime.createClass)(ValueInjector, {
    get annotationClass() {
      return Value;
    },
    instantiateOne: function(module, value, metadata) {
      value['$inject'] = metadata.dependencies;
      module.value(metadata.token, value);
    }
  }, {}, ListInjector);
  var ConstantInjector = function ConstantInjector() {
    $traceurRuntime.superConstructor($ConstantInjector).apply(this, arguments);
  };
  var $ConstantInjector = ConstantInjector;
  ($traceurRuntime.createClass)(ConstantInjector, {
    get annotationClass() {
      return Constant;
    },
    instantiateOne: function(module, constant, metadata) {
      constant['$inject'] = metadata.dependencies;
      module.constant(metadata.token, constant);
    }
  }, {}, ListInjector);
  var AnimationInjector = function AnimationInjector() {
    $traceurRuntime.superConstructor($AnimationInjector).apply(this, arguments);
  };
  var $AnimationInjector = AnimationInjector;
  ($traceurRuntime.createClass)(AnimationInjector, {
    get annotationClass() {
      return Animation;
    },
    instantiateOne: function(module, animation, metadata) {
      animation['$inject'] = metadata.dependencies;
      module.animation(metadata.token, animation);
    }
  }, {}, ListInjector);
  var FilterInjector = function FilterInjector() {
    $traceurRuntime.superConstructor($FilterInjector).apply(this, arguments);
  };
  var $FilterInjector = FilterInjector;
  ($traceurRuntime.createClass)(FilterInjector, {
    get annotationClass() {
      return Filter;
    },
    instantiateOne: function(module, filter, metadata) {
      filter['$inject'] = metadata.dependencies;
      module.filter(metadata.token, filter);
    }
  }, {}, ListInjector);
  return {
    get ListInjector() {
      return ListInjector;
    },
    get ConfigInjector() {
      return ConfigInjector;
    },
    get RunInjector() {
      return RunInjector;
    },
    get ControllerInjector() {
      return ControllerInjector;
    },
    get DirectiveInjector() {
      return DirectiveInjector;
    },
    get ServiceInjector() {
      return ServiceInjector;
    },
    get FactoryInjector() {
      return FactoryInjector;
    },
    get ProviderInjector() {
      return ProviderInjector;
    },
    get ValueInjector() {
      return ValueInjector;
    },
    get ConstantInjector() {
      return ConstantInjector;
    },
    get AnimationInjector() {
      return AnimationInjector;
    },
    get FilterInjector() {
      return FilterInjector;
    },
    __esModule: true
  };
});

define('a1atscript/Injector',["./annotations", "./injectorTypes"], function($__0,$__2) {
  
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var Module = $__0.Module;
  var $__3 = $__2,
      ConfigInjector = $__3.ConfigInjector,
      RunInjector = $__3.RunInjector,
      ControllerInjector = $__3.ControllerInjector,
      DirectiveInjector = $__3.DirectiveInjector,
      ServiceInjector = $__3.ServiceInjector,
      FactoryInjector = $__3.FactoryInjector,
      ProviderInjector = $__3.ProviderInjector,
      ValueInjector = $__3.ValueInjector,
      ConstantInjector = $__3.ConstantInjector,
      AnimationInjector = $__3.AnimationInjector,
      FilterInjector = $__3.FilterInjector;
  var registeredInjectors = {};
  function registerInjector(name, InjectorClass) {
    registeredInjectors[name] = new InjectorClass();
  }
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
  var Injector = function Injector() {
    var appNamePrefix = arguments[0] !== (void 0) ? arguments[0] : "";
    this.appNamePrefix = appNamePrefix;
    this.injectedModules = {};
  };
  ($traceurRuntime.createClass)(Injector, {
    get annotationClass() {
      return Module;
    },
    instantiate: function(moduleClass) {
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
        moduleName = (this.appNamePrefix + "." + moduleName);
      }
      var instantiatedModule = angular.module(moduleName, moduleDependencies);
      delete sortedDependencies.module;
      this._instantiateOtherDependencies(sortedDependencies, instantiatedModule);
      this.injectedModules[metadata.token] = moduleName;
      return moduleName;
    },
    _sortSelf: function(metadata, moduleClass, sortedDependencies) {
      if (metadata == moduleClass) {
        return sortedDependencies;
      } else {
        var selfDependency = this._sortDependency(moduleClass, false);
        return this._mergeSortedDependencies(sortedDependencies, selfDependency);
      }
    },
    _getAnnotatedClass: function(moduleClass) {
      if (moduleClass instanceof Module) {
        moduleClass.injectable = false;
        return moduleClass;
      } else {
        var metadata = this._getModuleAnnotation(moduleClass);
        return metadata;
      }
    },
    _getDependencyType: function(dependency) {
      var annotations = dependency.annotations;
      for (var i = 0; i < annotations.length; i++) {
        var annotation = annotations[i];
        var foundInjector = Object.keys(registeredInjectors).find((function(key) {
          return annotation instanceof registeredInjectors[key].annotationClass;
        }));
        if (foundInjector) {
          return {
            key: foundInjector,
            metadata: annotation
          };
        }
      }
      return null;
    },
    _getModuleAnnotation: function(dependency) {
      return dependency.annotations.find((function(annotation) {
        return annotation instanceof Module;
      }));
    },
    _mergeSortedDependencies: function(sorted1, sorted2) {
      var newSorted = {};
      Object.assign(newSorted, sorted1);
      Object.keys(sorted2).forEach((function(key) {
        if (newSorted[key]) {
          newSorted[key] = newSorted[key].concat(sorted2[key]);
        } else {
          newSorted[key] = sorted2[key];
        }
      }));
      return newSorted;
    },
    _sortDependency: function(dependency) {
      var checkModule = arguments[1] !== (void 0) ? arguments[1] : true;
      var $__4 = this;
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
        Object.keys(dependency).forEach((function(key) {
          var subDependency = dependency[key];
          var sortedSubDependencies = $__4._sortDependency(subDependency);
          sorted = $__4._mergeSortedDependencies(sorted, sortedSubDependencies);
        }));
      }
      return sorted;
    },
    _sortModuleDependencies: function(moduleClass) {
      var $__4 = this;
      var sorted = {};
      moduleClass.dependencies.forEach((function(dependency) {
        var newSortedDependencies = $__4._sortDependency(dependency);
        sorted = $__4._mergeSortedDependencies(sorted, newSortedDependencies);
      }));
      return sorted;
    },
    _moduleMetadata: function(moduleClass) {
      return moduleClass.annotations.find((function(value) {
        return value instanceof Module;
      }));
    },
    _instantiateModuleDependencies: function(moduleDependencies) {
      var $__4 = this;
      var returnedDependencies = [];
      if (moduleDependencies) {
        moduleDependencies.forEach((function(moduleDependency) {
          if (typeof moduleDependency === "string") {
            returnedDependencies.push(moduleDependency);
          } else {
            returnedDependencies.push($__4.instantiate(moduleDependency));
          }
        }));
      }
      return returnedDependencies;
    },
    _instantiateOtherDependencies: function(sortedDependencies, instantiatedModule) {
      Object.keys(sortedDependencies).forEach((function(dependencyType) {
        registeredInjectors[dependencyType].instantiate(instantiatedModule, sortedDependencies[dependencyType]);
      }));
    }
  }, {});
  function bootstrap(appModule) {
    var appPrefix = arguments[1] !== (void 0) ? arguments[1] : "";
    var injector = new Injector(appPrefix);
    injector.instantiate(appModule);
  }
  return {
    get registerInjector() {
      return registerInjector;
    },
    get Injector() {
      return Injector;
    },
    get bootstrap() {
      return bootstrap;
    },
    __esModule: true
  };
});

define('a1atscript/DirectiveObject',["./injectorTypes", "./Injector"], function($__0,$__2) {
  
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var ListInjector = $__0.ListInjector;
  var registerInjector = $__2.registerInjector;
  var DirectiveObject = function DirectiveObject(token) {
    var dependencies = arguments[1] !== (void 0) ? arguments[1] : [];
    this.dependencies = dependencies;
    this.token = token;
  };
  ($traceurRuntime.createClass)(DirectiveObject, {}, {});
  var DirectiveObjectInjector = function DirectiveObjectInjector() {
    $traceurRuntime.superConstructor($DirectiveObjectInjector).apply(this, arguments);
  };
  var $DirectiveObjectInjector = DirectiveObjectInjector;
  ($traceurRuntime.createClass)(DirectiveObjectInjector, {
    get annotationClass() {
      return DirectiveObject;
    },
    _createFactoryArray: function(ConstructorFn) {
      var args = ConstructorFn.$inject || [];
      var factoryArray = args.slice();
      factoryArray.push((function() {
        for (var args = [],
            $__5 = 0; $__5 < arguments.length; $__5++)
          args[$__5] = arguments[$__5];
        var directive = new (Function.prototype.bind.apply(ConstructorFn, $traceurRuntime.spread([null], args)))();
        for (var key in directive) {
          directive[key] = directive[key];
        }
        return directive;
      }));
      return factoryArray;
    },
    _cloneFunction: function(original) {
      return function() {
        return original.apply(this, arguments);
      };
    },
    _override: function(object, methodName, callback) {
      object[methodName] = callback(object[methodName]);
    },
    instantiateOne: function(module, directiveObject, metadata) {
      directiveObject['$inject'] = metadata.dependencies;
      if (!directiveObject.prototype.compile) {
        directiveObject.prototype.compile = (function() {});
      }
      var originalCompileFn = this._cloneFunction(directiveObject.prototype.compile);
      this._override(directiveObject.prototype, 'compile', function() {
        return function() {
          originalCompileFn.apply(this, arguments);
          if (directiveObject.prototype.link) {
            return directiveObject.prototype.link.bind(this);
          }
        };
      });
      var factoryArray = this._createFactoryArray(directiveObject);
      module.directive(metadata.token, factoryArray);
    }
  }, {}, ListInjector);
  registerInjector('directiveObject', DirectiveObjectInjector);
  return {
    get DirectiveObject() {
      return DirectiveObject;
    },
    __esModule: true
  };
});

define('a1atscript/ng2Directives/Ng2Directive',[], function() {
  
  var Ng2Directive = function Ng2Directive(descriptor) {
    this.selector = descriptor.selector;
    this.bind = descriptor.bind;
    this.controllerAs = descriptor.controllerAs;
    this.require = descriptor.require;
    this.transclude = descriptor.transclude;
  };
  ($traceurRuntime.createClass)(Ng2Directive, {}, {});
  var $__default = Ng2Directive;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

define('a1atscript/ng2Directives/Component',["./Ng2Directive"], function($__0) {
  
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  var Ng2Directive = $__0.default;
  var Component = function Component(descriptor) {
    $traceurRuntime.superConstructor($Component).call(this, descriptor);
    this.services = descriptor.services;
  };
  var $Component = Component;
  ($traceurRuntime.createClass)(Component, {}, {}, Ng2Directive);
  var Template = function Template(descriptor) {
    this.url = descriptor.url;
    this.inline = descriptor.inline;
  };
  ($traceurRuntime.createClass)(Template, {}, {});
  return {
    get Component() {
      return Component;
    },
    get Template() {
      return Template;
    },
    __esModule: true
  };
});

define('a1atscript/ng2Directives/TemplateProperties',["./Component"], function($__0) {
  
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  var Template = $__0.Template;
  var TemplateProperties = function TemplateProperties(template) {
    this._template = template;
  };
  ($traceurRuntime.createClass)(TemplateProperties, {
    get template() {
      return this._template.inline;
    },
    get templateUrl() {
      return this._template.url;
    }
  }, {});
  var $__default = TemplateProperties;
  Object.defineProperty(TemplateProperties, "parameters", {get: function() {
      return [[Template]];
    }});
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

define('a1atscript/ng2Directives/SelectorMatcher',[], function() {
  
  var SelectorMatcher = function SelectorMatcher(selector) {
    this._selector = selector;
  };
  ($traceurRuntime.createClass)(SelectorMatcher, {
    _split: function() {
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
    },
    get name() {
      if (!this._name) {
        this._split();
      }
      return this._name;
    },
    get restrict() {
      if (!this._restrict) {
        this._split();
      }
      return this._restrict;
    }
  }, {});
  var $__default = SelectorMatcher;
  Object.defineProperty(SelectorMatcher, "parameters", {get: function() {
      return [[$traceurRuntime.type.string]];
    }});
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

define('a1atscript/ng2Directives/Ng2DirectiveDefinitionObject',["./SelectorMatcher"], function($__0) {
  
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  var SelectorMatcher = $__0.default;
  var Ng2DirectiveDefinitionObject = function Ng2DirectiveDefinitionObject(controller, annotation) {
    var templateProperties = arguments[2] !== (void 0) ? arguments[2] : {};
    var bind = arguments[3] !== (void 0) ? arguments[3] : null;
    this._annotation = annotation;
    this._controller = controller;
    this._templateProperties = templateProperties;
    this._bind = bind;
  };
  ($traceurRuntime.createClass)(Ng2DirectiveDefinitionObject, {
    get selectorMatcher() {
      this._selectorMatcher = this._selectorMatcher || new SelectorMatcher(this._annotation.selector);
      return this._selectorMatcher;
    },
    get restrict() {
      return this.selectorMatcher.restrict;
    },
    get controllerAs() {
      return this._annotation.controllerAs || this.name;
    },
    get bindToController() {
      if (angular.version.major == 1 && angular.version.minor >= 4) {
        return this._bind || this._annotation.bind;
      } else {
        return true;
      }
    },
    get scope() {
      if (angular.version.major == 1 && angular.version.minor >= 4) {
        return {};
      } else {
        return this._bind || this._annotation.bind;
      }
    },
    get template() {
      return this._templateProperties.template;
    },
    get templateUrl() {
      return this._templateProperties.templateUrl;
    },
    get transclude() {
      return this._annotation.transclude;
    },
    get require() {
      return this._annotation.require;
    },
    get controller() {
      return this._controller;
    },
    get name() {
      return this.selectorMatcher.name;
    },
    get factoryFn() {
      var $__2 = this;
      return (function() {
        return {
          scope: $__2.scope,
          restrict: $__2.restrict,
          template: $__2.template,
          require: $__2.require,
          transclude: $__2.transclude,
          templateUrl: $__2.templateUrl,
          controller: $__2.controller,
          bindToController: $__2.bindToController,
          controllerAs: $__2.controllerAs
        };
      });
    }
  }, {});
  var $__default = Ng2DirectiveDefinitionObject;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

define('a1atscript/ng2Directives/BindBuilder',[], function() {
  
  var prefix = "___bindable___";
  var BindBuilder = function BindBuilder(bindObj, component) {
    this._bindObj = bindObj;
    this._component = component;
  };
  ($traceurRuntime.createClass)(BindBuilder, {
    setupProperty: function(key) {
      Object.defineProperty(this._component.prototype, prefix + key, {
        enumerable: true,
        configurable: true,
        set: function(value) {
          this[key] = value;
        }
      });
    },
    build: function() {
      var $__0 = this;
      var bind = {};
      Object.keys(this._bindObj).forEach((function(key) {
        bind[key] = "@" + $__0._bindObj[key];
        bind[prefix + key] = "=?bind" + $__0._bindObj[key][0].toUpperCase() + $__0._bindObj[key].slice(1);
        $__0.setupProperty(key);
      }));
      return bind;
    }
  }, {});
  var $__default = BindBuilder;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

define('a1atscript/ng2Directives/ComponentInjector',["../Injector", "./Component", "./TemplateProperties", "../injectorTypes", "./Ng2DirectiveDefinitionObject", "./BindBuilder"], function($__0,$__2,$__4,$__6,$__8,$__10) {
  
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  if (!$__6 || !$__6.__esModule)
    $__6 = {default: $__6};
  if (!$__8 || !$__8.__esModule)
    $__8 = {default: $__8};
  if (!$__10 || !$__10.__esModule)
    $__10 = {default: $__10};
  var registerInjector = $__0.registerInjector;
  var $__3 = $__2,
      Component = $__3.Component,
      Template = $__3.Template;
  var TemplateProperties = $__4.default;
  var ListInjector = $__6.ListInjector;
  var Ng2DirectiveDefinitionObject = $__8.default;
  var BindBuilder = $__10.default;
  var ComponentInjector = function ComponentInjector() {
    $traceurRuntime.superConstructor($ComponentInjector).apply(this, arguments);
  };
  var $ComponentInjector = ComponentInjector;
  ($traceurRuntime.createClass)(ComponentInjector, {
    get annotationClass() {
      return Component;
    },
    _template: function(component) {
      return component.annotations.find((function(annotation) {
        return annotation instanceof Template;
      }));
    },
    instantiateOne: function(module, component, annotation) {
      var controller;
      if (annotation.services) {
        controller = annotation.services.concat([component]);
      } else {
        controller = component;
      }
      var template = this._template(component);
      var templateProperties;
      if (template) {
        templateProperties = new TemplateProperties(template);
      } else {
        templateProperties = {};
      }
      var bind = null;
      if (annotation.bind) {
        bind = (new BindBuilder(annotation.bind, component)).build();
      }
      var ddo = new Ng2DirectiveDefinitionObject(controller, annotation, templateProperties, bind);
      module.directive(ddo.name, ddo.factoryFn);
    }
  }, {}, ListInjector);
  registerInjector('component', ComponentInjector);
  return {};
});

define('a1atscript',["./a1atscript/Injector", "./a1atscript/annotations", "./a1atscript/DirectiveObject", "./a1atscript/ng2Directives/ComponentInjector", "./a1atscript/ng2Directives/Component"], function($__0,$__1,$__2,$__3,$__4) {
  
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {default: $__1};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__3 || !$__3.__esModule)
    $__3 = {default: $__3};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  var $__a1atscript_47_Injector_46_js__ = $__0;
  var $__a1atscript_47_annotations_46_js__ = $__1;
  var $__a1atscript_47_DirectiveObject_46_js__ = $__2;
  $__3;
  var $__a1atscript_47_ng2Directives_47_Component_46_js__ = $__4;
  return $traceurRuntime.exportStar({__esModule: true}, $__a1atscript_47_Injector_46_js__, $__a1atscript_47_annotations_46_js__, $__a1atscript_47_DirectiveObject_46_js__, $__a1atscript_47_ng2Directives_47_Component_46_js__);
});

