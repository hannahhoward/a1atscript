export class RouteInitializer {
  constructor(componentMapper) {
    this.componentMapper = componentMapper;
  }

  configurationFunction(componentMapperName) {
    var componentMapper = this.componentMapper;
    return function($injector) {
      var $componentMapper;
      try {
        $componentMapper = $injector.get(componentMapperName);
      } catch(e) {
        return;
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
    }
  }

  topRouteConfig(routeConfig) {
    return function($router) {
      $router.config(routeConfig);
    };
  }

  setupComponentControllers() {
    Object.keys(this.componentMapper.registry).forEach((component) => {
      var config = this.componentMapper.registry[component];
      if (!config.isController && config.component != this.topComponent) {
        this.module.controller(
          config.controllerName,
          config.component
        );
      }
    });
  }

  setupInlineTemplates() {
    var inlineTemplateCache = this.componentMapper.inlineTemplateCache;
    return function($templateCache) {
      Object.keys(inlineTemplateCache).forEach((templateUrl) => {
        $templateCache.put(templateUrl, inlineTemplateCache[templateUrl]);
      });
    };
  }
  initialize(ngModuleName, topComponent = null) {
    this.module = angular.module(ngModuleName);

    // ng-new-router changed the name of its componentMapper service recently
    // essentially the approach here is to try to configure the mapper with both names
    // catch exceptions if they don't exist.
    // if both throw an exception, than there is no component router present
    this.module.config(['$injector', this.configurationFunction('$componentLoaderProvider')]);
    this.module.run(['$injector', this.configurationFunction('$componentMapper')]);

    if (topComponent && topComponent.$routeConfig) {
      this.topComponent = topComponent;
      this.module.run(['$router', this.topRouteConfig(topComponent.$routeConfig)])
    }

    this.setupComponentControllers();

    this.module.run(['$templateCache', this.setupInlineTemplates()]);

  }
}
