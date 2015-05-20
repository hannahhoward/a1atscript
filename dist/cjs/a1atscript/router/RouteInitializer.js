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
    value: function topRouteConfig(routeConfig) {
      return function ($router) {
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
      var topComponent = arguments[1] === undefined ? null : arguments[1];

      this.module = angular.module(ngModuleName);

      // ng-new-router changed the name of its componentMapper service recently
      // essentially the approach here is to try to configure the mapper with both names
      // catch exceptions if they don't exist.
      // if both throw an exception, than there is no component router present
      this.module.config(['$injector', this.configurationFunction('$componentLoaderProvider')]);
      this.module.run(['$injector', this.configurationFunction('$componentMapper')]);

      if (topComponent && topComponent.$routeConfig) {
        this.topComponent = topComponent;
        this.module.run(['$router', this.topRouteConfig(topComponent.$routeConfig)]);
      }

      this.setupComponentControllers();

      this.module.run(['$templateCache', this.setupInlineTemplates()]);
    }
  }]);

  return RouteInitializer;
})();

exports.RouteInitializer = RouteInitializer;