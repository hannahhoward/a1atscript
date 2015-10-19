(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	__webpack_require__(1);
	
	var _a1atscriptInjectorJs = __webpack_require__(2);
	
	Object.defineProperty(exports, 'registerInjector', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptInjectorJs.registerInjector;
	  }
	});
	Object.defineProperty(exports, 'getInjector', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptInjectorJs.getInjector;
	  }
	});
	Object.defineProperty(exports, 'Injector', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptInjectorJs.Injector;
	  }
	});
	
	var _a1atscriptAnnotationsJs = __webpack_require__(3);
	
	Object.defineProperty(exports, 'Config', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Config;
	  }
	});
	Object.defineProperty(exports, 'Run', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Run;
	  }
	});
	Object.defineProperty(exports, 'Controller', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Controller;
	  }
	});
	Object.defineProperty(exports, 'Directive', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Directive;
	  }
	});
	Object.defineProperty(exports, 'Service', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Service;
	  }
	});
	Object.defineProperty(exports, 'Factory', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Factory;
	  }
	});
	Object.defineProperty(exports, 'Provider', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Provider;
	  }
	});
	Object.defineProperty(exports, 'Value', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Value;
	  }
	});
	Object.defineProperty(exports, 'Constant', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Constant;
	  }
	});
	Object.defineProperty(exports, 'Filter', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Filter;
	  }
	});
	Object.defineProperty(exports, 'Animation', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Animation;
	  }
	});
	Object.defineProperty(exports, 'Module', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.Module;
	  }
	});
	Object.defineProperty(exports, 'AsModule', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptAnnotationsJs.AsModule;
	  }
	});
	
	var _a1atscriptDirectiveObjectJs = __webpack_require__(19);
	
	Object.defineProperty(exports, 'DirectiveObject', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptDirectiveObjectJs.DirectiveObject;
	  }
	});
	
	var _a1atscriptNg2DirectivesComponentJs = __webpack_require__(9);
	
	Object.defineProperty(exports, 'Component', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptNg2DirectivesComponentJs.Component;
	  }
	});
	Object.defineProperty(exports, 'Template', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptNg2DirectivesComponentJs.Template;
	  }
	});
	Object.defineProperty(exports, 'View', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptNg2DirectivesComponentJs.View;
	  }
	});
	
	var _a1atscriptToAnnotationJs = __webpack_require__(4);
	
	Object.defineProperty(exports, 'ToAnnotation', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptToAnnotationJs.ToAnnotation;
	  }
	});
	
	var _a1atscriptBootstrapJs = __webpack_require__(20);
	
	Object.defineProperty(exports, 'bootstrap', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptBootstrapJs.bootstrap;
	  }
	});
	
	var _a1atscriptRouterJs = __webpack_require__(7);
	
	Object.defineProperty(exports, 'Router', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptRouterJs.Router;
	  }
	});
	Object.defineProperty(exports, 'RouteConfig', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptRouterJs.RouteConfig;
	  }
	});
	
	var _a1atscriptApplyAnnotationJs = __webpack_require__(21);
	
	Object.defineProperty(exports, 'applyAnnotation', {
	  enumerable: true,
	  get: function get() {
	    return _a1atscriptApplyAnnotationJs.applyAnnotation;
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _InjectorJs = __webpack_require__(2);
	
	var _ComponentJs = __webpack_require__(9);
	
	var _injectorTypesJs = __webpack_require__(6);
	
	var _Ng2DirectiveDefinitionObjectJs = __webpack_require__(15);
	
	var _Ng2DirectiveDefinitionObjectJs2 = _interopRequireDefault(_Ng2DirectiveDefinitionObjectJs);
	
	var _PropertiesBuilderJs = __webpack_require__(16);
	
	var _PropertiesBuilderJs2 = _interopRequireDefault(_PropertiesBuilderJs);
	
	var _EventsBuilderJs = __webpack_require__(18);
	
	var _EventsBuilderJs2 = _interopRequireDefault(_EventsBuilderJs);
	
	var _RouterJs = __webpack_require__(7);
	
	var ComponentInjector = (function (_ListInjector) {
	  _inherits(ComponentInjector, _ListInjector);
	
	  function ComponentInjector() {
	    _classCallCheck(this, ComponentInjector);
	
	    _get(Object.getPrototypeOf(ComponentInjector.prototype), 'constructor', this).call(this);
	    this.componentHooks = { before: [], after: [] };
	  }
	
	  _createClass(ComponentInjector, [{
	    key: '_template',
	    value: function _template(component) {
	      return component.annotations.find(function (annotation) {
	        return annotation instanceof _ComponentJs.ViewBase;
	      }) || {};
	    }
	  }, {
	    key: 'instantiateOne',
	    value: function instantiateOne(module, component, annotation) {
	      if (annotation.appInjector) {
	        component.$inject = annotation.appInjector;
	      }
	      _RouterJs.Router.routeReader.read(component);
	      var template = this._template(component);
	      var properties = {},
	          events = {},
	          bind;
	      if (annotation.properties) {
	        properties = new _PropertiesBuilderJs2['default'](annotation.properties, component).build();
	      }
	      if (annotation.events) {
	        events = new _EventsBuilderJs2['default'](annotation.events, component).build();
	      }
	      bind = Object.assign({}, properties, events);
	      if (bind === {}) bind = null;
	      if (annotation.selector) {
	        var ddo = new _Ng2DirectiveDefinitionObjectJs2['default'](component, annotation, template, bind);
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
	      return _ComponentJs.Component;
	    }
	  }]);
	
	  return ComponentInjector;
	})(_injectorTypesJs.ListInjector);
	
	(0, _InjectorJs.registerInjector)('component', ComponentInjector);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	exports.registerInjector = registerInjector;
	exports.getInjector = getInjector;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _annotationsJs = __webpack_require__(3);
	
	var _AnnotationFinderJs = __webpack_require__(5);
	
	var _injectorTypesJs = __webpack_require__(6);
	
	var registeredInjectors = {};
	
	function registerInjector(name, InjectorClass) {
	  registeredInjectors[name] = new InjectorClass();
	}
	
	function getInjector(name) {
	  return registeredInjectors[name];
	}
	
	registerInjector('config', _injectorTypesJs.ConfigInjector);
	registerInjector('run', _injectorTypesJs.RunInjector);
	registerInjector('controller', _injectorTypesJs.ControllerInjector);
	registerInjector('directive', _injectorTypesJs.DirectiveInjector);
	registerInjector('service', _injectorTypesJs.ServiceInjector);
	registerInjector('factory', _injectorTypesJs.FactoryInjector);
	registerInjector('provider', _injectorTypesJs.ProviderInjector);
	registerInjector('value', _injectorTypesJs.ValueInjector);
	registerInjector('constant', _injectorTypesJs.ConstantInjector);
	registerInjector('animation', _injectorTypesJs.AnimationInjector);
	registerInjector('filter', _injectorTypesJs.FilterInjector);
	
	var Injector = (function () {
	  function Injector() {
	    var appNamePrefix = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
	
	    _classCallCheck(this, Injector);
	
	    this.appNamePrefix = appNamePrefix;
	    this.injectedModules = {};
	  }
	
	  _createClass(Injector, [{
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
	      if (moduleClass instanceof _annotationsJs.Module) {
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
	      return new _AnnotationFinderJs.AnnotationFinder(dependency).annotationFor(_annotationsJs.Module);
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
	
	      if (typeof dependency === "string" || dependency instanceof _annotationsJs.Module) {
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
	        return value instanceof _annotationsJs.Module || value instanceof _annotationsJs.AsModule;
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
	      return _annotationsJs.Module;
	    }
	  }]);
	
	  return Injector;
	})();
	
	exports.Injector = Injector;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _ToAnnotationJs = __webpack_require__(4);
	
	var NgAnnotation = function NgAnnotation() {
	  _classCallCheck(this, NgAnnotation);
	
	  for (var _len = arguments.length, dependencies = Array(_len), _key = 0; _key < _len; _key++) {
	    dependencies[_key] = arguments[_key];
	  }
	
	  this.dependencies = dependencies;
	};
	
	var NgNamedAnnotation = function NgNamedAnnotation(token) {
	  var dependencies = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	  _classCallCheck(this, NgNamedAnnotation);
	
	  this.dependencies = dependencies;
	  this.token = token;
	};
	
	var Config = (function (_NgAnnotation) {
	  _inherits(Config, _NgAnnotation);
	
	  function Config() {
	    _classCallCheck(this, _Config);
	
	    _get(Object.getPrototypeOf(_Config.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  var _Config = Config;
	  Config = (0, _ToAnnotationJs.ToAnnotation)(Config) || Config;
	  return Config;
	})(NgAnnotation);
	
	exports.Config = Config;
	
	var Run = (function (_NgAnnotation2) {
	  _inherits(Run, _NgAnnotation2);
	
	  function Run() {
	    _classCallCheck(this, _Run);
	
	    _get(Object.getPrototypeOf(_Run.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  var _Run = Run;
	  Run = (0, _ToAnnotationJs.ToAnnotation)(Run) || Run;
	  return Run;
	})(NgAnnotation);
	
	exports.Run = Run;
	
	var Controller = (function (_NgNamedAnnotation) {
	  _inherits(Controller, _NgNamedAnnotation);
	
	  function Controller() {
	    _classCallCheck(this, _Controller);
	
	    _get(Object.getPrototypeOf(_Controller.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  var _Controller = Controller;
	  Controller = (0, _ToAnnotationJs.ToAnnotation)(Controller) || Controller;
	  return Controller;
	})(NgNamedAnnotation);
	
	exports.Controller = Controller;
	
	var Directive = (function (_NgNamedAnnotation2) {
	  _inherits(Directive, _NgNamedAnnotation2);
	
	  function Directive() {
	    _classCallCheck(this, _Directive);
	
	    _get(Object.getPrototypeOf(_Directive.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  var _Directive = Directive;
	  Directive = (0, _ToAnnotationJs.ToAnnotation)(Directive) || Directive;
	  return Directive;
	})(NgNamedAnnotation);
	
	exports.Directive = Directive;
	
	var Service = (function (_NgNamedAnnotation3) {
	  _inherits(Service, _NgNamedAnnotation3);
	
	  function Service() {
	    _classCallCheck(this, _Service);
	
	    _get(Object.getPrototypeOf(_Service.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  var _Service = Service;
	  Service = (0, _ToAnnotationJs.ToAnnotation)(Service) || Service;
	  return Service;
	})(NgNamedAnnotation);
	
	exports.Service = Service;
	
	var Factory = (function (_NgNamedAnnotation4) {
	  _inherits(Factory, _NgNamedAnnotation4);
	
	  function Factory() {
	    _classCallCheck(this, _Factory);
	
	    _get(Object.getPrototypeOf(_Factory.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  var _Factory = Factory;
	  Factory = (0, _ToAnnotationJs.ToAnnotation)(Factory) || Factory;
	  return Factory;
	})(NgNamedAnnotation);
	
	exports.Factory = Factory;
	
	var Provider = (function (_NgNamedAnnotation5) {
	  _inherits(Provider, _NgNamedAnnotation5);
	
	  function Provider() {
	    _classCallCheck(this, _Provider);
	
	    _get(Object.getPrototypeOf(_Provider.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  var _Provider = Provider;
	  Provider = (0, _ToAnnotationJs.ToAnnotation)(Provider) || Provider;
	  return Provider;
	})(NgNamedAnnotation);
	
	exports.Provider = Provider;
	
	var Value = (function (_NgNamedAnnotation6) {
	  _inherits(Value, _NgNamedAnnotation6);
	
	  function Value() {
	    _classCallCheck(this, _Value);
	
	    _get(Object.getPrototypeOf(_Value.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  var _Value = Value;
	  Value = (0, _ToAnnotationJs.ToAnnotation)(Value) || Value;
	  return Value;
	})(NgNamedAnnotation);
	
	exports.Value = Value;
	
	var Constant = (function (_NgNamedAnnotation7) {
	  _inherits(Constant, _NgNamedAnnotation7);
	
	  function Constant() {
	    _classCallCheck(this, _Constant);
	
	    _get(Object.getPrototypeOf(_Constant.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  var _Constant = Constant;
	  Constant = (0, _ToAnnotationJs.ToAnnotation)(Constant) || Constant;
	  return Constant;
	})(NgNamedAnnotation);
	
	exports.Constant = Constant;
	
	var Filter = (function (_NgNamedAnnotation8) {
	  _inherits(Filter, _NgNamedAnnotation8);
	
	  function Filter() {
	    _classCallCheck(this, _Filter);
	
	    _get(Object.getPrototypeOf(_Filter.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  var _Filter = Filter;
	  Filter = (0, _ToAnnotationJs.ToAnnotation)(Filter) || Filter;
	  return Filter;
	})(NgNamedAnnotation);
	
	exports.Filter = Filter;
	
	var Animation = (function (_NgNamedAnnotation9) {
	  _inherits(Animation, _NgNamedAnnotation9);
	
	  function Animation() {
	    _classCallCheck(this, _Animation);
	
	    _get(Object.getPrototypeOf(_Animation.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  var _Animation = Animation;
	  Animation = (0, _ToAnnotationJs.ToAnnotation)(Animation) || Animation;
	  return Animation;
	})(NgNamedAnnotation);
	
	exports.Animation = Animation;
	
	var Module = (function (_NgNamedAnnotation10) {
	  _inherits(Module, _NgNamedAnnotation10);
	
	  function Module() {
	    _classCallCheck(this, Module);
	
	    _get(Object.getPrototypeOf(Module.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  return Module;
	})(NgNamedAnnotation);
	
	exports.Module = Module;
	
	var AsModule = (function (_Module) {
	  _inherits(AsModule, _Module);
	
	  function AsModule() {
	    _classCallCheck(this, _AsModule);
	
	    _get(Object.getPrototypeOf(_AsModule.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  var _AsModule = AsModule;
	  AsModule = (0, _ToAnnotationJs.ToAnnotation)(AsModule) || AsModule;
	  return AsModule;
	})(Module);
	
	exports.AsModule = AsModule;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.ToAnnotation = ToAnnotation;
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

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AnnotationFinder = (function () {
	  function AnnotationFinder(AnnotatedClass) {
	    _classCallCheck(this, AnnotationFinder);
	
	    this.AnnotatedClass = AnnotatedClass;
	  }
	
	  _createClass(AnnotationFinder, [{
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
	
	exports.AnnotationFinder = AnnotationFinder;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _annotationsJs = __webpack_require__(3);
	
	var _RouterJs = __webpack_require__(7);
	
	var ListInjector = (function () {
	  function ListInjector() {
	    _classCallCheck(this, ListInjector);
	  }
	
	  _createClass(ListInjector, [{
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
	
	exports.ListInjector = ListInjector;
	
	var ConfigInjector = (function (_ListInjector) {
	  _inherits(ConfigInjector, _ListInjector);
	
	  function ConfigInjector() {
	    _classCallCheck(this, ConfigInjector);
	
	    _get(Object.getPrototypeOf(ConfigInjector.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(ConfigInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, config, metadata) {
	      config['$inject'] = metadata.dependencies;
	      module.config(config);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Config;
	    }
	  }]);
	
	  return ConfigInjector;
	})(ListInjector);
	
	exports.ConfigInjector = ConfigInjector;
	
	var RunInjector = (function (_ListInjector2) {
	  _inherits(RunInjector, _ListInjector2);
	
	  function RunInjector() {
	    _classCallCheck(this, RunInjector);
	
	    _get(Object.getPrototypeOf(RunInjector.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(RunInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, run, metadata) {
	      run['$inject'] = metadata.dependencies;
	      module.run(run);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Run;
	    }
	  }]);
	
	  return RunInjector;
	})(ListInjector);
	
	exports.RunInjector = RunInjector;
	
	var ControllerInjector = (function (_ListInjector3) {
	  _inherits(ControllerInjector, _ListInjector3);
	
	  function ControllerInjector() {
	    _classCallCheck(this, ControllerInjector);
	
	    _get(Object.getPrototypeOf(ControllerInjector.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(ControllerInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, controller, metadata) {
	      controller['$inject'] = metadata.dependencies;
	      _RouterJs.Router.routeReader.read(controller);
	      module.controller(metadata.token, controller);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Controller;
	    }
	  }]);
	
	  return ControllerInjector;
	})(ListInjector);
	
	exports.ControllerInjector = ControllerInjector;
	
	var DirectiveInjector = (function (_ListInjector4) {
	  _inherits(DirectiveInjector, _ListInjector4);
	
	  function DirectiveInjector() {
	    _classCallCheck(this, DirectiveInjector);
	
	    _get(Object.getPrototypeOf(DirectiveInjector.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(DirectiveInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, directive, metadata) {
	      directive['$inject'] = metadata.dependencies;
	      module.directive(metadata.token, directive);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Directive;
	    }
	  }]);
	
	  return DirectiveInjector;
	})(ListInjector);
	
	exports.DirectiveInjector = DirectiveInjector;
	
	var ServiceInjector = (function (_ListInjector5) {
	  _inherits(ServiceInjector, _ListInjector5);
	
	  function ServiceInjector() {
	    _classCallCheck(this, ServiceInjector);
	
	    _get(Object.getPrototypeOf(ServiceInjector.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(ServiceInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, service, metadata) {
	      service['$inject'] = metadata.dependencies;
	      module.service(metadata.token, service);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Service;
	    }
	  }]);
	
	  return ServiceInjector;
	})(ListInjector);
	
	exports.ServiceInjector = ServiceInjector;
	
	var FactoryInjector = (function (_ListInjector6) {
	  _inherits(FactoryInjector, _ListInjector6);
	
	  function FactoryInjector() {
	    _classCallCheck(this, FactoryInjector);
	
	    _get(Object.getPrototypeOf(FactoryInjector.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(FactoryInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, factory, metadata) {
	      factory['$inject'] = metadata.dependencies;
	      module.factory(metadata.token, factory);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Factory;
	    }
	  }]);
	
	  return FactoryInjector;
	})(ListInjector);
	
	exports.FactoryInjector = FactoryInjector;
	
	var ProviderInjector = (function (_ListInjector7) {
	  _inherits(ProviderInjector, _ListInjector7);
	
	  function ProviderInjector() {
	    _classCallCheck(this, ProviderInjector);
	
	    _get(Object.getPrototypeOf(ProviderInjector.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(ProviderInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, provider, metadata) {
	      provider['$inject'] = metadata.dependencies;
	      module.provider(metadata.token, provider);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Provider;
	    }
	  }]);
	
	  return ProviderInjector;
	})(ListInjector);
	
	exports.ProviderInjector = ProviderInjector;
	
	var ValueInjector = (function (_ListInjector8) {
	  _inherits(ValueInjector, _ListInjector8);
	
	  function ValueInjector() {
	    _classCallCheck(this, ValueInjector);
	
	    _get(Object.getPrototypeOf(ValueInjector.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(ValueInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, value, metadata) {
	      value['$inject'] = metadata.dependencies;
	      module.value(metadata.token, value);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Value;
	    }
	  }]);
	
	  return ValueInjector;
	})(ListInjector);
	
	exports.ValueInjector = ValueInjector;
	
	var ConstantInjector = (function (_ListInjector9) {
	  _inherits(ConstantInjector, _ListInjector9);
	
	  function ConstantInjector() {
	    _classCallCheck(this, ConstantInjector);
	
	    _get(Object.getPrototypeOf(ConstantInjector.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(ConstantInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, constant, metadata) {
	      constant['$inject'] = metadata.dependencies;
	      module.constant(metadata.token, constant);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Constant;
	    }
	  }]);
	
	  return ConstantInjector;
	})(ListInjector);
	
	exports.ConstantInjector = ConstantInjector;
	
	var AnimationInjector = (function (_ListInjector10) {
	  _inherits(AnimationInjector, _ListInjector10);
	
	  function AnimationInjector() {
	    _classCallCheck(this, AnimationInjector);
	
	    _get(Object.getPrototypeOf(AnimationInjector.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(AnimationInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, animation, metadata) {
	      animation['$inject'] = metadata.dependencies;
	      module.animation(metadata.token, animation);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Animation;
	    }
	  }]);
	
	  return AnimationInjector;
	})(ListInjector);
	
	exports.AnimationInjector = AnimationInjector;
	
	var FilterInjector = (function (_ListInjector11) {
	  _inherits(FilterInjector, _ListInjector11);
	
	  function FilterInjector() {
	    _classCallCheck(this, FilterInjector);
	
	    _get(Object.getPrototypeOf(FilterInjector.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(FilterInjector, [{
	    key: 'instantiateOne',
	    value: function instantiateOne(module, filter, metadata) {
	      filter['$inject'] = metadata.dependencies;
	      module.filter(metadata.token, filter);
	    }
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return _annotationsJs.Filter;
	    }
	  }]);
	
	  return FilterInjector;
	})(ListInjector);
	
	exports.FilterInjector = FilterInjector;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _routerComponentMapperJs = __webpack_require__(8);
	
	var _routerRouteReaderJs = __webpack_require__(12);
	
	var _routerRouteInitializerJs = __webpack_require__(14);
	
	var _routerRouteConfigJs = __webpack_require__(13);
	
	Object.defineProperty(exports, "RouteConfig", {
	  enumerable: true,
	  get: function get() {
	    return _routerRouteConfigJs.RouteConfig;
	  }
	});
	
	var componentMapper = new _routerComponentMapperJs.ComponentMapper();
	var routeReader = new _routerRouteReaderJs.RouteReader(componentMapper);
	var routeInitializer = new _routerRouteInitializerJs.RouteInitializer(componentMapper);
	
	var Router = {
	  componentMapper: componentMapper,
	  routeReader: routeReader,
	  routeInitializer: routeInitializer
	};
	exports.Router = Router;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _annotationsJs = __webpack_require__(3);
	
	var _ng2DirectivesComponentJs = __webpack_require__(9);
	
	var _AnnotationFinderJs = __webpack_require__(5);
	
	var _ng2DirectivesSelectorMatcherJs = __webpack_require__(11);
	
	var _ng2DirectivesSelectorMatcherJs2 = _interopRequireDefault(_ng2DirectivesSelectorMatcherJs);
	
	var DEFAULT_CONTROLLER_SUFFIX = "Controller";
	var DEFAULT_COMPONENT_PREFIX = "a1atscript";
	var DEFAULT_CONTROLLER_PREFIX = "A1AtScript";
	
	var ComponentMapping = (function () {
	  function ComponentMapping(component, componentMapper) {
	    _classCallCheck(this, ComponentMapping);
	
	    this.component = component;
	    this.componentMapper = componentMapper;
	  }
	
	  _createClass(ComponentMapping, [{
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
	
	var ComponentMapper = (function () {
	  function ComponentMapper() {
	    _classCallCheck(this, ComponentMapper);
	  }
	
	  _createClass(ComponentMapper, [{
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
	      var controllerAnnotation = new _AnnotationFinderJs.AnnotationFinder(component).annotationFor(_annotationsJs.Controller);
	      if (controllerAnnotation) {
	        return controllerAnnotation.token;
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: "_isController",
	    value: function _isController(component) {
	      var controllerAnnotation = new _AnnotationFinderJs.AnnotationFinder(component).annotationFor(_annotationsJs.Controller);
	      if (controllerAnnotation) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	  }, {
	    key: "_getComponentName",
	    value: function _getComponentName(component) {
	      var componentAnnotation = new _AnnotationFinderJs.AnnotationFinder(component).annotationFor(_ng2DirectivesComponentJs.Component);
	      if (componentAnnotation) {
	        if (componentAnnotation.controllerAs) {
	          return componentAnnotation.controllerAs;
	        } else if (componentAnnotation.selector) {
	          var selectorMatcher = new _ng2DirectivesSelectorMatcherJs2["default"](componentAnnotation.selector);
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
	      var viewAnnotation = new _AnnotationFinderJs.AnnotationFinder(component).annotationFor(_ng2DirectivesComponentJs.ViewBase);
	      if (viewAnnotation && viewAnnotation.templateUrl) {
	        return viewAnnotation.templateUrl;
	      } else {
	        return "./components/" + name + "/" + name + ".html";
	      }
	    }
	  }, {
	    key: "_readInlineTemplate",
	    value: function _readInlineTemplate(templateUrl, component) {
	      var viewAnnotation = new _AnnotationFinderJs.AnnotationFinder(component).annotationFor(_ng2DirectivesComponentJs.ViewBase);
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
	
	exports.ComponentMapper = ComponentMapper;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _Ng2DirectiveJs = __webpack_require__(10);
	
	var _Ng2DirectiveJs2 = _interopRequireDefault(_Ng2DirectiveJs);
	
	var _ToAnnotationJs = __webpack_require__(4);
	
	var Component = (function (_Ng2Directive) {
	  _inherits(Component, _Ng2Directive);
	
	  function Component(descriptor) {
	    _classCallCheck(this, _Component);
	
	    _get(Object.getPrototypeOf(_Component.prototype), 'constructor', this).call(this, descriptor);
	    this.appInjector = descriptor.appInjector || descriptor.injectables || descriptor.services;
	  }
	
	  var _Component = Component;
	  Component = (0, _ToAnnotationJs.ToAnnotation)(Component) || Component;
	  return Component;
	})(_Ng2DirectiveJs2['default']);
	
	exports.Component = Component;
	
	var ViewBase = function ViewBase(descriptor) {
	  _classCallCheck(this, ViewBase);
	
	  this.templateUrl = descriptor.templateUrl || descriptor.url;
	  this.template = descriptor.template || descriptor.inline;
	};
	
	exports.ViewBase = ViewBase;
	
	var Template = (function (_ViewBase) {
	  _inherits(Template, _ViewBase);
	
	  function Template() {
	    _classCallCheck(this, _Template);
	
	    _get(Object.getPrototypeOf(_Template.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  var _Template = Template;
	  Template = (0, _ToAnnotationJs.ToAnnotation)(Template) || Template;
	  return Template;
	})(ViewBase);
	
	exports.Template = Template;
	
	var View = (function (_ViewBase2) {
	  _inherits(View, _ViewBase2);
	
	  function View() {
	    _classCallCheck(this, _View);
	
	    _get(Object.getPrototypeOf(_View.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  var _View = View;
	  View = (0, _ToAnnotationJs.ToAnnotation)(View) || View;
	  return View;
	})(ViewBase);
	
	exports.View = View;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Ng2Directive = function Ng2Directive(descriptor) {
	  _classCallCheck(this, Ng2Directive);
	
	  this.selector = descriptor.selector;
	  this.properties = descriptor.properties || descriptor.bind;
	  this.controllerAs = descriptor.controllerAs;
	  this.require = descriptor.require;
	  this.transclude = descriptor.transclude;
	  this.events = descriptor.events;
	};
	
	exports["default"] = Ng2Directive;
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
	var MOZ_HACK_REGEXP = /^moz([A-Z])/;
	
	var SelectorMatcher = (function () {
	  function SelectorMatcher(selector) {
	    _classCallCheck(this, SelectorMatcher);
	
	    this._selector = selector;
	  }
	
	  _createClass(SelectorMatcher, [{
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
	
	exports["default"] = SelectorMatcher;
	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _RouteConfigJs = __webpack_require__(13);
	
	var _AnnotationFinderJs = __webpack_require__(5);
	
	var RouteReader = (function () {
	  function RouteReader(componentMapper) {
	    _classCallCheck(this, RouteReader);
	
	    this.componentMapper = componentMapper;
	  }
	
	  _createClass(RouteReader, [{
	    key: "_routeConfigAnnotations",
	    value: function _routeConfigAnnotations(component) {
	      return new _AnnotationFinderJs.AnnotationFinder(component).annotationsFor(_RouteConfigJs.RouteConfig);
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
	
	exports.RouteReader = RouteReader;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _ToAnnotationJs = __webpack_require__(4);
	
	var RouteConfig = (function () {
	  function RouteConfig(routeDescription) {
	    _classCallCheck(this, _RouteConfig);
	
	    this.routeDescription = routeDescription;
	  }
	
	  var _RouteConfig = RouteConfig;
	  RouteConfig = (0, _ToAnnotationJs.ToAnnotation)(RouteConfig) || RouteConfig;
	  return RouteConfig;
	})();
	
	exports.RouteConfig = RouteConfig;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var RouteInitializer = (function () {
	  function RouteInitializer(componentMapper) {
	    _classCallCheck(this, RouteInitializer);
	
	    this.componentMapper = componentMapper;
	  }
	
	  _createClass(RouteInitializer, [{
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
	
	exports.RouteInitializer = RouteInitializer;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _SelectorMatcherJs = __webpack_require__(11);
	
	var _SelectorMatcherJs2 = _interopRequireDefault(_SelectorMatcherJs);
	
	var Ng2DirectiveDefinitionObject = (function () {
	  function Ng2DirectiveDefinitionObject(controller, annotation) {
	    var template = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	    var bind = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
	
	    _classCallCheck(this, Ng2DirectiveDefinitionObject);
	
	    this._annotation = annotation;
	    this._controller = controller;
	    this._template = template;
	    this._bind = bind;
	  }
	
	  _createClass(Ng2DirectiveDefinitionObject, [{
	    key: "selectorMatcher",
	    get: function get() {
	      this._selectorMatcher = this._selectorMatcher || new _SelectorMatcherJs2["default"](this._annotation.selector);
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
	
	exports["default"] = Ng2DirectiveDefinitionObject;
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _BindBuilderJs = __webpack_require__(17);
	
	var _BindBuilderJs2 = _interopRequireDefault(_BindBuilderJs);
	
	var BIND_PREFIX = "_=_";
	var STRING_PREFIX = "_@_";
	var BINDING = BIND_PREFIX;
	var RAW_STRING = STRING_PREFIX;
	
	var PropertiesBuilder = (function (_BindBuilder) {
	  _inherits(PropertiesBuilder, _BindBuilder);
	
	  function PropertiesBuilder() {
	    _classCallCheck(this, PropertiesBuilder);
	
	    _get(Object.getPrototypeOf(PropertiesBuilder.prototype), "constructor", this).apply(this, arguments);
	  }
	
	  _createClass(PropertiesBuilder, [{
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
	})(_BindBuilderJs2["default"]);
	
	exports["default"] = PropertiesBuilder;
	module.exports = exports["default"];

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BindBuilder = (function () {
	  function BindBuilder(bindParam, component) {
	    _classCallCheck(this, BindBuilder);
	
	    this._bindParam = bindParam;
	    this._component = component;
	  }
	
	  _createClass(BindBuilder, [{
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
	
	exports["default"] = BindBuilder;
	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _BindBuilderJs = __webpack_require__(17);
	
	var _BindBuilderJs2 = _interopRequireDefault(_BindBuilderJs);
	
	var prefix = "___bindable___";
	
	var EventsBuilder = (function (_BindBuilder) {
	  _inherits(EventsBuilder, _BindBuilder);
	
	  function EventsBuilder() {
	    _classCallCheck(this, EventsBuilder);
	
	    _get(Object.getPrototypeOf(EventsBuilder.prototype), "constructor", this).apply(this, arguments);
	  }
	
	  _createClass(EventsBuilder, [{
	    key: "setupProperty",
	    value: function setupProperty(key, events) {
	      events[key] = "=?on" + this.bindObj[key][0].toUpperCase() + this.bindObj[key].slice(1);
	    }
	  }]);
	
	  return EventsBuilder;
	})(_BindBuilderJs2["default"]);
	
	exports["default"] = EventsBuilder;
	module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var _bind = Function.prototype.bind;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _injectorTypesJs = __webpack_require__(6);
	
	var _InjectorJs = __webpack_require__(2);
	
	var _ToAnnotationJs = __webpack_require__(4);
	
	var DirectiveObject = (function () {
	  function DirectiveObject(token) {
	    var dependencies = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
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
	  _inherits(DirectiveObjectInjector, _ListInjector);
	
	  function DirectiveObjectInjector() {
	    _classCallCheck(this, DirectiveObjectInjector);
	
	    _get(Object.getPrototypeOf(DirectiveObjectInjector.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(DirectiveObjectInjector, [{
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
	  }, {
	    key: 'annotationClass',
	    get: function get() {
	      return DirectiveObject;
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

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bootstrap = bootstrap;
	
	var _InjectorJs = __webpack_require__(2);
	
	var _RouterJs = __webpack_require__(7);
	
	function bootstrap(appModule) {
	  var appPrefix = arguments.length <= 1 || arguments[1] === undefined ? "" : arguments[1];
	
	  var injector = new _InjectorJs.Injector(appPrefix);
	  var moduleName = injector.instantiate(appModule);
	  _RouterJs.Router.routeInitializer.initialize(moduleName, appModule);
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _bind = Function.prototype.bind;
	exports.applyAnnotation = applyAnnotation;
	
	function applyAnnotation(target, annotationClass) {
	  var AnnotationVersion = annotationClass.originalClass || annotationClass;
	  target.annotations = target.annotations || [];
	
	  for (var _len = arguments.length, params = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    params[_key - 2] = arguments[_key];
	  }
	
	  target.annotations.push(new (_bind.apply(AnnotationVersion, [null].concat(params)))());
	}

/***/ }
/******/ ])));
//# sourceMappingURL=a1atscript.bundle.js.map