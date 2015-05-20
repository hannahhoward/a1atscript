'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports.registerInjector = registerInjector;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _annotationsJs = require('./annotations.js');

var _AnnotationFinderJs = require('./AnnotationFinder.js');

var _injectorTypesJs = require('./injectorTypes.js');

var registeredInjectors = {};

function registerInjector(name, InjectorClass) {
  registeredInjectors[name] = new InjectorClass();
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
    var appNamePrefix = arguments[0] === undefined ? '' : arguments[0];

    _classCallCheck(this, Injector);

    this.appNamePrefix = appNamePrefix;
    this.injectedModules = {};
  }

  _createClass(Injector, [{
    key: 'annotationClass',
    get: function () {
      return _annotationsJs.Module;
    }
  }, {
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
        moduleName = '' + this.appNamePrefix + '.' + moduleName;
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

      var checkModule = arguments[1] === undefined ? true : arguments[1];

      var sorted = {};

      if (typeof dependency === 'string' || dependency instanceof _annotationsJs.Module) {
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
          if (typeof moduleDependency === 'string') {
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
  }]);

  return Injector;
})();

exports.Injector = Injector;