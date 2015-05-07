define('a1atscript/ToAnnotation',[], function() {
  
  function defineAnnotation(target, AnnotationClass, callParams) {
    var oldAnnotation = Object.getOwnPropertyDescriptor(target, 'annotations');
    if (oldAnnotation) {
      var oldGetter = oldAnnotation.get;
      Object.defineProperty(target, 'annotations', {
        configurable: true,
        get: function() {
          var oldValue = oldGetter();
          oldValue.unshift(new (Function.prototype.bind.apply(AnnotationClass, callParams)));
          return oldValue;
        }
      });
    } else {
      Object.defineProperty(target, 'annotations', {
        configurable: true,
        get: function() {
          return [new (Function.prototype.bind.apply(AnnotationClass, callParams))];
        }
      });
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
      descriptor.initializer = function() {
        return value;
      };
    }
    descriptor.enumerable = true;
    return descriptor;
  }
  function ToAnnotation(AnnotationClass) {
    var decorator = function() {
      for (var callParams = [],
          $__0 = 0; $__0 < arguments.length; $__0++)
        callParams[$__0] = arguments[$__0];
      callParams.unshift(null);
      return function(targetClass) {
        for (var otherParams = [],
            $__1 = 1; $__1 < arguments.length; $__1++)
          otherParams[$__1 - 1] = arguments[$__1];
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
    get ToAnnotation() {
      return ToAnnotation;
    },
    __esModule: true
  };
});

define('a1atscript/annotations',["./ToAnnotation"], function($__0) {
  
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  var ToAnnotation = $__0.ToAnnotation;
  var NgAnnotation = function NgAnnotation() {
    for (var dependencies = [],
        $__3 = 0; $__3 < arguments.length; $__3++)
      dependencies[$__3] = arguments[$__3];
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
  Object.defineProperty(Config, "annotations", {get: function() {
      return [new ToAnnotation];
    }});
  var Run = function Run() {
    $traceurRuntime.superConstructor($Run).apply(this, arguments);
  };
  var $Run = Run;
  ($traceurRuntime.createClass)(Run, {}, {}, NgAnnotation);
  Object.defineProperty(Run, "annotations", {get: function() {
      return [new ToAnnotation];
    }});
  var Controller = function Controller() {
    $traceurRuntime.superConstructor($Controller).apply(this, arguments);
  };
  var $Controller = Controller;
  ($traceurRuntime.createClass)(Controller, {}, {}, NgNamedAnnotation);
  Object.defineProperty(Controller, "annotations", {get: function() {
      return [new ToAnnotation];
    }});
  var Directive = function Directive() {
    $traceurRuntime.superConstructor($Directive).apply(this, arguments);
  };
  var $Directive = Directive;
  ($traceurRuntime.createClass)(Directive, {}, {}, NgNamedAnnotation);
  Object.defineProperty(Directive, "annotations", {get: function() {
      return [new ToAnnotation];
    }});
  var Service = function Service() {
    $traceurRuntime.superConstructor($Service).apply(this, arguments);
  };
  var $Service = Service;
  ($traceurRuntime.createClass)(Service, {}, {}, NgNamedAnnotation);
  Object.defineProperty(Service, "annotations", {get: function() {
      return [new ToAnnotation];
    }});
  var Factory = function Factory() {
    $traceurRuntime.superConstructor($Factory).apply(this, arguments);
  };
  var $Factory = Factory;
  ($traceurRuntime.createClass)(Factory, {}, {}, NgNamedAnnotation);
  Object.defineProperty(Factory, "annotations", {get: function() {
      return [new ToAnnotation];
    }});
  var Provider = function Provider() {
    $traceurRuntime.superConstructor($Provider).apply(this, arguments);
  };
  var $Provider = Provider;
  ($traceurRuntime.createClass)(Provider, {}, {}, NgNamedAnnotation);
  Object.defineProperty(Provider, "annotations", {get: function() {
      return [new ToAnnotation];
    }});
  var Value = function Value() {
    $traceurRuntime.superConstructor($Value).apply(this, arguments);
  };
  var $Value = Value;
  ($traceurRuntime.createClass)(Value, {}, {}, NgNamedAnnotation);
  Object.defineProperty(Value, "annotations", {get: function() {
      return [new ToAnnotation];
    }});
  var Constant = function Constant() {
    $traceurRuntime.superConstructor($Constant).apply(this, arguments);
  };
  var $Constant = Constant;
  ($traceurRuntime.createClass)(Constant, {}, {}, NgNamedAnnotation);
  Object.defineProperty(Constant, "annotations", {get: function() {
      return [new ToAnnotation];
    }});
  var Filter = function Filter() {
    $traceurRuntime.superConstructor($Filter).apply(this, arguments);
  };
  var $Filter = Filter;
  ($traceurRuntime.createClass)(Filter, {}, {}, NgNamedAnnotation);
  Object.defineProperty(Filter, "annotations", {get: function() {
      return [new ToAnnotation];
    }});
  var Animation = function Animation() {
    $traceurRuntime.superConstructor($Animation).apply(this, arguments);
  };
  var $Animation = Animation;
  ($traceurRuntime.createClass)(Animation, {}, {}, NgNamedAnnotation);
  Object.defineProperty(Animation, "annotations", {get: function() {
      return [new ToAnnotation];
    }});
  var Module = function Module() {
    $traceurRuntime.superConstructor($Module).apply(this, arguments);
  };
  var $Module = Module;
  ($traceurRuntime.createClass)(Module, {}, {}, NgNamedAnnotation);
  var AsModule = function AsModule() {
    $traceurRuntime.superConstructor($AsModule).apply(this, arguments);
  };
  var $AsModule = AsModule;
  ($traceurRuntime.createClass)(AsModule, {}, {}, Module);
  Object.defineProperty(AsModule, "annotations", {get: function() {
      return [new ToAnnotation];
    }});
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
    get AsModule() {
      return AsModule;
    },
    __esModule: true
  };
});

define('a1atscript/AnnotationFinder',[], function() {
  
  var AnnotationFinder = function AnnotationFinder(AnnotatedClass) {
    this.AnnotatedClass = AnnotatedClass;
  };
  ($traceurRuntime.createClass)(AnnotationFinder, {
    annotationFor: function(AnnotationClass) {
      var OriginalClass = AnnotationClass.originalClass || AnnotationClass;
      if (this.AnnotatedClass.annotations) {
        return this.AnnotatedClass.annotations.find((function(annotation) {
          return annotation instanceof OriginalClass;
        }));
      } else {
        return null;
      }
    },
    annotationsFor: function(AnnotationClass) {
      var OriginalClass = AnnotationClass.originalClass || AnnotationClass;
      if (this.AnnotatedClass.annotations) {
        return this.AnnotatedClass.annotations.filter((function(annotation) {
          return annotation instanceof OriginalClass;
        }));
      } else {
        return null;
      }
    }
  }, {});
  return {
    get AnnotationFinder() {
      return AnnotationFinder;
    },
    __esModule: true
  };
});

define('a1atscript/ng2Directives/Ng2Directive',[], function() {
  
  var Ng2Directive = function Ng2Directive(descriptor) {
    this.selector = descriptor.selector;
    this.properties = descriptor.properties || descriptor.bind;
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

define('a1atscript/ng2Directives/Component',["./Ng2Directive", "../ToAnnotation"], function($__0,$__2) {
  
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var Ng2Directive = $__0.default;
  var ToAnnotation = $__2.ToAnnotation;
  var Component = function Component(descriptor) {
    $traceurRuntime.superConstructor($Component).call(this, descriptor);
    this.injectables = descriptor.injectables || descriptor.services;
  };
  var $Component = Component;
  ($traceurRuntime.createClass)(Component, {}, {}, Ng2Directive);
  Object.defineProperty(Component, "annotations", {get: function() {
      return [new ToAnnotation];
    }});
  var ViewBase = function ViewBase(descriptor) {
    this.templateUrl = descriptor.templateUrl || descriptor.url;
    this.template = descriptor.template || descriptor.inline;
  };
  ($traceurRuntime.createClass)(ViewBase, {}, {});
  var Template = function Template() {
    $traceurRuntime.superConstructor($Template).apply(this, arguments);
  };
  var $Template = Template;
  ($traceurRuntime.createClass)(Template, {}, {}, ViewBase);
  Object.defineProperty(Template, "annotations", {get: function() {
      return [new ToAnnotation];
    }});
  var View = function View() {
    $traceurRuntime.superConstructor($View).apply(this, arguments);
  };
  var $View = View;
  ($traceurRuntime.createClass)(View, {}, {}, ViewBase);
  Object.defineProperty(View, "annotations", {get: function() {
      return [new ToAnnotation];
    }});
  return {
    get Component() {
      return Component;
    },
    get ViewBase() {
      return ViewBase;
    },
    get Template() {
      return Template;
    },
    get View() {
      return View;
    },
    __esModule: true
  };
});

define('a1atscript/ng2Directives/SelectorMatcher',[], function() {
  
  var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
  var MOZ_HACK_REGEXP = /^moz([A-Z])/;
  var SelectorMatcher = function SelectorMatcher(selector) {
    this._selector = selector;
  };
  ($traceurRuntime.createClass)(SelectorMatcher, {
    _camelizeName: function() {
      this._name = this._name.replace(SPECIAL_CHARS_REGEXP, (function(_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
      })).replace(MOZ_HACK_REGEXP, 'Moz$1');
    },
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
      this._camelizeName();
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

define('a1atscript/router/ComponentMapper',["../annotations", "../ng2Directives/Component", "../AnnotationFinder", "../ng2Directives/SelectorMatcher"], function($__0,$__2,$__4,$__6) {
  
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  if (!$__6 || !$__6.__esModule)
    $__6 = {default: $__6};
  var Controller = $__0.Controller;
  var $__3 = $__2,
      Component = $__3.Component,
      ViewBase = $__3.ViewBase;
  var AnnotationFinder = $__4.AnnotationFinder;
  var SelectorMatcher = $__6.default;
  var DEFAULT_CONTROLLER_SUFFIX = "Controller";
  var DEFAULT_COMPONENT_PREFIX = "a1atscript";
  var DEFAULT_CONTROLLER_PREFIX = "A1AtScript";
  var ComponentMapping = function ComponentMapping(component, componentMapper) {
    this.component = component;
    this.componentMapper = componentMapper;
  };
  ($traceurRuntime.createClass)(ComponentMapping, {
    get componentName() {
      return this.componentMapper.map.get(this.component);
    },
    get templateUrl() {
      return this.componentMapper.registry[this.componentName].templateUrl;
    },
    get isController() {
      return this.componentMapper.registry[this.componentName].isController;
    },
    get controllerName() {
      return this.componentMapper.registry[this.componentName].controllerName;
    }
  }, {});
  var ComponentMapper = function ComponentMapper() {};
  ($traceurRuntime.createClass)(ComponentMapper, {
    register: function(component) {
      if (!this.map.get(component)) {
        this._setupComponent(component);
      }
      return new ComponentMapping(component, this);
    },
    _getControllerComponentName: function(component) {
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
    },
    _getControllerName: function(component) {
      var controllerAnnotation = (new AnnotationFinder(component)).annotationFor(Controller);
      if (controllerAnnotation) {
        return controllerAnnotation.token;
      } else {
        return null;
      }
    },
    _isController: function(component) {
      var controllerAnnotation = (new AnnotationFinder(component)).annotationFor(Controller);
      if (controllerAnnotation) {
        return true;
      } else {
        return false;
      }
    },
    _getComponentName: function(component) {
      var componentAnnotation = (new AnnotationFinder(component)).annotationFor(Component);
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
    },
    _getGeneratedName: function() {
      this._componentIndex = this._componentIndex || 0;
      var name = (DEFAULT_COMPONENT_PREFIX + "Component_" + this._componentIndex);
      this._componentIndex = this._componentIndex + 1;
      return name;
    },
    _generateName: function(component) {
      var name = this._getControllerComponentName(component);
      name = name || this._getComponentName(component);
      name = name || this._getGeneratedName();
      return name;
    },
    _generateTemplate: function(name, component) {
      var viewAnnotation = (new AnnotationFinder(component)).annotationFor(ViewBase);
      if (viewAnnotation && viewAnnotation.templateUrl) {
        return viewAnnotation.templateUrl;
      } else {
        return ("./components/" + name + "/" + name + ".html");
      }
    },
    _readInlineTemplate: function(templateUrl, component) {
      var viewAnnotation = (new AnnotationFinder(component)).annotationFor(ViewBase);
      if (viewAnnotation && viewAnnotation.template) {
        this.inlineTemplateCache[templateUrl] = viewAnnotation.template;
      }
    },
    _generateControllerName: function(name) {
      var componentBase;
      if (name.startsWith(DEFAULT_COMPONENT_PREFIX)) {
        componentBase = name.substring(DEFAULT_COMPONENT_PREFIX.length, name.length);
      } else {
        componentBase = name;
      }
      return DEFAULT_CONTROLLER_PREFIX + componentBase[0].toUpperCase() + componentBase.substring(1, componentBase.length) + DEFAULT_CONTROLLER_SUFFIX;
    },
    _setupComponent: function(component) {
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
      this.registry[name] = {
        component: component,
        templateUrl: templateUrl,
        isController: isController,
        controllerName: controllerName
      };
      this.controllerRegistry[controllerName] = name;
      this._readInlineTemplate(templateUrl, component);
    },
    get registry() {
      this._componentRegistry = this._componentRegistry || {};
      return this._componentRegistry;
    },
    get map() {
      this._componentMap = this._componentMap || new Map();
      return this._componentMap;
    },
    getComponent: function(componentName) {
      return this.registry[componentName].component;
    },
    getTemplateUrl: function(componentName) {
      return this.registry[componentName].templateUrl;
    },
    getComponentName: function(component) {
      return this.map.get(component);
    },
    get controllerRegistry() {
      this._controllerRegistry = this._controllerRegistry || {};
      return this._controllerRegistry;
    },
    get inlineTemplateCache() {
      this._inlineTemplateCache = this._inlineTemplateCache || {};
      return this._inlineTemplateCache;
    }
  }, {});
  return {
    get ComponentMapper() {
      return ComponentMapper;
    },
    __esModule: true
  };
});

define('a1atscript/router/RouteConfig',["../ToAnnotation"], function($__0) {
  
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  var ToAnnotation = $__0.ToAnnotation;
  var RouteConfig = function RouteConfig(routeDescription) {
    this.routeDescription = routeDescription;
  };
  ($traceurRuntime.createClass)(RouteConfig, {}, {});
  Object.defineProperty(RouteConfig, "annotations", {get: function() {
      return [new ToAnnotation];
    }});
  return {
    get RouteConfig() {
      return RouteConfig;
    },
    __esModule: true
  };
});

define('a1atscript/router/RouteReader',["./RouteConfig", "../AnnotationFinder"], function($__0,$__2) {
  
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var RouteConfig = $__0.RouteConfig;
  var AnnotationFinder = $__2.AnnotationFinder;
  var RouteReader = function RouteReader(componentMapper) {
    this.componentMapper = componentMapper;
  };
  ($traceurRuntime.createClass)(RouteReader, {
    _routeConfigAnnotations: function(component) {
      return (new AnnotationFinder(component)).annotationsFor(RouteConfig);
    },
    _routeConfig: function(component) {
      return this._routeConfigAnnotations(component).map(this._convertConfig.bind(this));
    },
    _componentName: function(component) {
      if (typeof(component) === "string") {
        return component;
      } else {
        return this.componentMapper.register(component).componentName;
      }
    },
    _convertConfig: function(routeConfigAnnotation) {
      var $__4 = this;
      var routeDescription = Object.assign({}, routeConfigAnnotation.routeDescription);
      if (routeDescription.component) {
        routeDescription.component = this._componentName(routeDescription.component);
      }
      if (routeDescription.components) {
        var components = {};
        Object.keys(routeDescription.components).forEach((function(key) {
          components[key] = $__4._componentName(routeDescription.components[key]);
        }));
        routeDescription.components = components;
      }
      return routeDescription;
    },
    read: function(component) {
      var mapping = this.componentMapper.register(component);
      component.$routeConfig = this._routeConfig(component);
    }
  }, {});
  return {
    get RouteReader() {
      return RouteReader;
    },
    __esModule: true
  };
});

define('a1atscript/router/RouteInitializer',[], function() {
  
  var RouteInitializer = function RouteInitializer(componentMapper) {
    this.componentMapper = componentMapper;
  };
  ($traceurRuntime.createClass)(RouteInitializer, {
    configurationFunction: function(componentMapperName) {
      var componentMapper = this.componentMapper;
      return function($injector) {
        var $componentMapper;
        try {
          $componentMapper = $injector.get(componentMapperName);
        } catch (e) {
          return ;
        }
        $componentMapper.setCtrlNameMapping(function(name) {
          return componentMapper.registry[name].controllerName;
        });
        $componentMapper.setTemplateMapping(function(name) {
          return componentMapper.registry[name].templateUrl;
        });
        $componentMapper.setComponentFromCtrlMapping(function(controllerName) {
          return componentMapper.controllerRegistry[controllerName];
        });
      };
    },
    topRouteConfig: function(routeConfig) {
      return function($router) {
        $router.config(routeConfig);
      };
    },
    setupComponentControllers: function() {
      var $__0 = this;
      Object.keys(this.componentMapper.registry).forEach((function(component) {
        var config = $__0.componentMapper.registry[component];
        if (!config.isController && config.component != $__0.topComponent) {
          $__0.module.controller(config.controllerName, config.component);
        }
      }));
    },
    setupInlineTemplates: function() {
      var inlineTemplateCache = this.componentMapper.inlineTemplateCache;
      return function($templateCache) {
        Object.keys(inlineTemplateCache).forEach((function(templateUrl) {
          $templateCache.put(templateUrl, inlineTemplateCache[templateUrl]);
        }));
      };
    },
    initialize: function(ngModuleName) {
      var topComponent = arguments[1] !== (void 0) ? arguments[1] : null;
      this.module = angular.module(ngModuleName);
      this.module.config(['$injector', this.configurationFunction('$componentLoaderProvider')]);
      this.module.run(['$injector', this.configurationFunction('$componentMapper')]);
      if (topComponent && topComponent.$routeConfig) {
        this.topComponent = topComponent;
        this.module.run(['$router', this.topRouteConfig(topComponent.$routeConfig)]);
      }
      this.setupComponentControllers();
      this.module.run(['$templateCache', this.setupInlineTemplates()]);
    }
  }, {});
  return {
    get RouteInitializer() {
      return RouteInitializer;
    },
    __esModule: true
  };
});

define('a1atscript/Router',["./router/ComponentMapper", "./router/RouteReader", "./router/RouteInitializer", "./router/RouteConfig"], function($__0,$__2,$__4,$__6) {
  
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  if (!$__6 || !$__6.__esModule)
    $__6 = {default: $__6};
  var ComponentMapper = $__0.ComponentMapper;
  var RouteReader = $__2.RouteReader;
  var RouteInitializer = $__4.RouteInitializer;
  var $__router_47_RouteConfig_46_js__ = $__6;
  var componentMapper = new ComponentMapper();
  var routeReader = new RouteReader(componentMapper);
  var routeInitializer = new RouteInitializer(componentMapper);
  var Router = {
    componentMapper: componentMapper,
    routeReader: routeReader,
    routeInitializer: routeInitializer
  };
  return $traceurRuntime.exportStar({
    get Router() {
      return Router;
    },
    __esModule: true
  }, $__router_47_RouteConfig_46_js__);
});

define('a1atscript/injectorTypes',["./annotations", "./Router"], function($__0,$__2) {
  
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
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
  var Router = $__2.Router;
  var ListInjector = function ListInjector() {};
  ($traceurRuntime.createClass)(ListInjector, {instantiate: function(module, dependencyList) {
      var $__4 = this;
      dependencyList.forEach((function(dependencyObject) {
        $__4.instantiateOne(module, dependencyObject.dependency, dependencyObject.metadata);
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
      Router.routeReader.read(controller);
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

define('a1atscript/Injector',["./annotations", "./AnnotationFinder", "./injectorTypes"], function($__0,$__2,$__4) {
  
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  var $__1 = $__0,
      AsModule = $__1.AsModule,
      Module = $__1.Module;
  var AnnotationFinder = $__2.AnnotationFinder;
  var $__5 = $__4,
      ConfigInjector = $__5.ConfigInjector,
      RunInjector = $__5.RunInjector,
      ControllerInjector = $__5.ControllerInjector,
      DirectiveInjector = $__5.DirectiveInjector,
      ServiceInjector = $__5.ServiceInjector,
      FactoryInjector = $__5.FactoryInjector,
      ProviderInjector = $__5.ProviderInjector,
      ValueInjector = $__5.ValueInjector,
      ConstantInjector = $__5.ConstantInjector,
      AnimationInjector = $__5.AnimationInjector,
      FilterInjector = $__5.FilterInjector;
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
          var annotationClass = registeredInjectors[key].annotationClass;
          annotationClass = annotationClass.originalClass || annotationClass;
          return annotation instanceof annotationClass;
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
      return (new AnnotationFinder(dependency)).annotationFor(Module);
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
      var $__6 = this;
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
          var sortedSubDependencies = $__6._sortDependency(subDependency);
          sorted = $__6._mergeSortedDependencies(sorted, sortedSubDependencies);
        }));
      }
      return sorted;
    },
    _sortModuleDependencies: function(moduleClass) {
      var $__6 = this;
      var sorted = {};
      moduleClass.dependencies.forEach((function(dependency) {
        var newSortedDependencies = $__6._sortDependency(dependency);
        sorted = $__6._mergeSortedDependencies(sorted, newSortedDependencies);
      }));
      return sorted;
    },
    _moduleMetadata: function(moduleClass) {
      return moduleClass.annotations.find((function(value) {
        return value instanceof Module || value instanceof AsModule;
      }));
    },
    _instantiateModuleDependencies: function(moduleDependencies) {
      var $__6 = this;
      var returnedDependencies = [];
      if (moduleDependencies) {
        moduleDependencies.forEach((function(moduleDependency) {
          if (typeof moduleDependency === "string") {
            returnedDependencies.push(moduleDependency);
          } else {
            returnedDependencies.push($__6.instantiate(moduleDependency));
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
  return {
    get registerInjector() {
      return registerInjector;
    },
    get Injector() {
      return Injector;
    },
    __esModule: true
  };
});

define('a1atscript/DirectiveObject',["./injectorTypes", "./Injector", "./ToAnnotation"], function($__0,$__2,$__4) {
  
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  var ListInjector = $__0.ListInjector;
  var registerInjector = $__2.registerInjector;
  var ToAnnotation = $__4.ToAnnotation;
  var DirectiveObject = function DirectiveObject(token) {
    var dependencies = arguments[1] !== (void 0) ? arguments[1] : [];
    this.dependencies = dependencies;
    this.token = token;
  };
  ($traceurRuntime.createClass)(DirectiveObject, {}, {});
  Object.defineProperty(DirectiveObject, "annotations", {get: function() {
      return [new ToAnnotation];
    }});
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
            $__7 = 0; $__7 < arguments.length; $__7++)
          args[$__7] = arguments[$__7];
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

define('a1atscript/ng2Directives/Ng2DirectiveDefinitionObject',["./SelectorMatcher"], function($__0) {
  
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  var SelectorMatcher = $__0.default;
  var Ng2DirectiveDefinitionObject = function Ng2DirectiveDefinitionObject(controller, annotation) {
    var template = arguments[2] !== (void 0) ? arguments[2] : {};
    var properties = arguments[3] !== (void 0) ? arguments[3] : null;
    this._annotation = annotation;
    this._controller = controller;
    this._template = template;
    this._properties = properties;
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
        return this._properties || this._annotation.properties;
      } else {
        return true;
      }
    },
    get scope() {
      if (angular.version.major == 1 && angular.version.minor >= 4) {
        return {};
      } else {
        return this._properties || this._annotation.properties;
      }
    },
    get template() {
      return this._template.template;
    },
    get templateUrl() {
      return this._template.templateUrl;
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

define('a1atscript/ng2Directives/PropertiesBuilder',[], function() {
  
  var prefix = "___bindable___";
  var PropertiesBuilder = function PropertiesBuilder(propertiesObj, component) {
    this._propertiesObj = propertiesObj;
    this._component = component;
  };
  ($traceurRuntime.createClass)(PropertiesBuilder, {
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
      var properties = {};
      Object.keys(this._propertiesObj).forEach((function(key) {
        properties[key] = "@" + $__0._propertiesObj[key];
        properties[prefix + key] = "=?bind" + $__0._propertiesObj[key][0].toUpperCase() + $__0._propertiesObj[key].slice(1);
        $__0.setupProperty(key);
      }));
      return properties;
    }
  }, {});
  var $__default = PropertiesBuilder;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

define('a1atscript/ng2Directives/ComponentInjector',["../Injector", "./Component", "../injectorTypes", "./Ng2DirectiveDefinitionObject", "./PropertiesBuilder", "../Router"], function($__0,$__2,$__4,$__6,$__8,$__10) {
  
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
      ViewBase = $__3.ViewBase;
  var ListInjector = $__4.ListInjector;
  var Ng2DirectiveDefinitionObject = $__6.default;
  var PropertiesBuilder = $__8.default;
  var Router = $__10.Router;
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
        return annotation instanceof ViewBase;
      })) || {};
    },
    instantiateOne: function(module, component, annotation) {
      if (annotation.injectables) {
        component.$inject = annotation.injectables;
      }
      Router.routeReader.read(component);
      var template = this._template(component);
      var properties = null;
      if (annotation.properties) {
        properties = (new PropertiesBuilder(annotation.properties, component)).build();
      }
      if (annotation.selector) {
        var ddo = new Ng2DirectiveDefinitionObject(component, annotation, template, properties);
        module.directive(ddo.name, ddo.factoryFn);
      }
    }
  }, {}, ListInjector);
  registerInjector('component', ComponentInjector);
  return {};
});

define('a1atscript/bootstrap',["./Injector", "./Router"], function($__0,$__2) {
  
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var Injector = $__0.Injector;
  var Router = $__2.Router;
  function bootstrap(appModule) {
    var appPrefix = arguments[1] !== (void 0) ? arguments[1] : "";
    var injector = new Injector(appPrefix);
    var moduleName = injector.instantiate(appModule);
    Router.routeInitializer.initialize(moduleName, appModule);
  }
  return {
    get bootstrap() {
      return bootstrap;
    },
    __esModule: true
  };
});

define('a1atscript',["./a1atscript/Injector", "./a1atscript/annotations", "./a1atscript/DirectiveObject", "./a1atscript/ng2Directives/ComponentInjector", "./a1atscript/ng2Directives/Component", "./a1atscript/ToAnnotation", "./a1atscript/bootstrap", "./a1atscript/Router"], function($__0,$__1,$__2,$__3,$__4,$__5,$__6,$__7) {
  
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
  if (!$__5 || !$__5.__esModule)
    $__5 = {default: $__5};
  if (!$__6 || !$__6.__esModule)
    $__6 = {default: $__6};
  if (!$__7 || !$__7.__esModule)
    $__7 = {default: $__7};
  var $__a1atscript_47_Injector_46_js__ = $__0;
  var $__a1atscript_47_annotations_46_js__ = $__1;
  var $__a1atscript_47_DirectiveObject_46_js__ = $__2;
  $__3;
  var $__a1atscript_47_ng2Directives_47_Component_46_js__ = $__4;
  var $__a1atscript_47_ToAnnotation_46_js__ = $__5;
  var $__a1atscript_47_bootstrap_46_js__ = $__6;
  var $__a1atscript_47_Router_46_js__ = $__7;
  return $traceurRuntime.exportStar({__esModule: true}, $__a1atscript_47_Injector_46_js__, $__a1atscript_47_annotations_46_js__, $__a1atscript_47_DirectiveObject_46_js__, $__a1atscript_47_ng2Directives_47_Component_46_js__, $__a1atscript_47_ToAnnotation_46_js__, $__a1atscript_47_bootstrap_46_js__, $__a1atscript_47_Router_46_js__);
});

