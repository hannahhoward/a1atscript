import { Module } from './annotations';

import {
  ConfigInjector,
  RunInjector,
  ControllerInjector,
  DirectiveInjector,
  ServiceInjector,
  FactoryInjector,
  ProviderInjector,
  ValueInjector,
  ConstantInjector,
  AnimationInjector,
  FilterInjector
} from './injectorTypes';

var registeredInjectors = {}

export function registerInjector(name, InjectorClass) {
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

export class Injector {
  constructor(appNamePrefix = "") {
    this.appNamePrefix = appNamePrefix;
    this.injectedModules = {};
  }

  get annotationClass() {
    return Module;
  }

  instantiate(moduleClass) {
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
      moduleName = `${this.appNamePrefix}.${moduleName}`;
    }
    var instantiatedModule = angular.module(moduleName, moduleDependencies);
    delete sortedDependencies.module;
    this._instantiateOtherDependencies(sortedDependencies, instantiatedModule);
    this.injectedModules[metadata.token] = moduleName;
    return moduleName;
  }

  _sortSelf(metadata, moduleClass, sortedDependencies) {
    if (metadata == moduleClass) {
      return sortedDependencies;
    } else {
      var selfDependency = this._sortDependency(moduleClass, false);
      return this._mergeSortedDependencies(sortedDependencies, selfDependency);
    }
  }

  _getAnnotatedClass(moduleClass) {
    if (moduleClass instanceof Module) {
      moduleClass.injectable = false;
      return moduleClass;
    } else {
      var metadata = this._getModuleAnnotation(moduleClass);
      return metadata;
    }
  }

  _getDependencyType(dependency) {
    var annotations = dependency.annotations;
    for (var i=0; i < annotations.length; i++) {
      var annotation = annotations[i];
      var foundInjector = Object.keys(registeredInjectors).find(
        (key) => annotation instanceof registeredInjectors[key].annotationClass);
      if (foundInjector) {
        return {
          key: foundInjector,
          metadata: annotation
        };
      }
    }
    return null;
  }

  _getModuleAnnotation(dependency) {
    return dependency.annotations.find((annotation) => annotation instanceof Module);
  }

  _mergeSortedDependencies(sorted1, sorted2) {
    var newSorted = {}
    Object.assign(newSorted, sorted1)
    Object.keys(sorted2).forEach((key) => {
      if (newSorted[key]) {
        newSorted[key] = newSorted[key].concat(sorted2[key]);
      } else {
        newSorted[key] = sorted2[key];
      }
    });
    return newSorted;
  }

  _sortDependency(dependency, checkModule = true) {
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
      Object.keys(dependency).forEach((key) => {
        var subDependency = dependency[key];
        var sortedSubDependencies = this._sortDependency(subDependency);
        sorted = this._mergeSortedDependencies(sorted, sortedSubDependencies);
      });
    }
    return sorted;
  }

  _sortModuleDependencies(moduleClass) {
    var sorted = {};
    moduleClass.dependencies.forEach((dependency) => {
      var newSortedDependencies = this._sortDependency(dependency);
      sorted = this._mergeSortedDependencies(sorted, newSortedDependencies);
    });

    return sorted;
  }

  _moduleMetadata(moduleClass) {
    return moduleClass.annotations.find((value) => value instanceof Module);
  }

  _instantiateModuleDependencies(moduleDependencies) {
    var returnedDependencies = [];

    if (moduleDependencies) {
      moduleDependencies.forEach((moduleDependency) => {
        if (typeof moduleDependency === "string") {
          returnedDependencies.push(moduleDependency);
        } else {
          returnedDependencies.push(this.instantiate(moduleDependency));
        }
      });

    }

    return returnedDependencies;
  }

  _instantiateOtherDependencies(sortedDependencies, instantiatedModule) {
    Object.keys(sortedDependencies).forEach((dependencyType) => {
      registeredInjectors[dependencyType].instantiate(
        instantiatedModule,
        sortedDependencies[dependencyType]
      );
    });
  }
}
