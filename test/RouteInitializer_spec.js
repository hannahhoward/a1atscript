import angular from 'angular';
import 'angular-mocks';
import 'angular-new-router';

import {RouteInitializer} from "../src/a1atscript/router/RouteInitializer.js";

var mock = angular.mock;

angular.module('testApp', ['ngNewRouter']);

describe("RouteInitializer", function() {

  describe("initialize", function() {
    var componentMapper, routeInitializer, $templateCache, $componentLoader, TestComponent, TestController, controllerSpy;
    beforeEach(function() {
      TestComponent = function() {
      };
      TestController = function() {
      };
      componentMapper = {
        registry: {
          "awesome": {
            'templateUrl': 'awesome.tpl.html',
            'component': TestComponent,
            'controllerName': 'AwesomeController',
            'isController': false,
            'routeConfig': [{
              path: "cheese", component: "cheese"
            }]
          },
          "cheese": {
            'templateUrl': './components/cheese/cheese.html',
            'component': TestController,
            'controllerName': "CheesetasticController",
            'isController': true
          }
        },
        controllerRegistry: {
          "AwesomeController": "awesome",
          "CheesetasticController": "cheese"
        },
        inlineTemplateCache: {
          'awesome.tpl.html': "<p>FizzBuzz</p>"
        }
      };

      routeInitializer = new RouteInitializer(componentMapper);
      controllerSpy = spyOn(angular.module('testApp'), 'controller');
      routeInitializer.initialize('testApp');
      mock.module("testApp");
      mock.inject(function(_$componentLoader_, _$templateCache_) {
        $componentLoader = _$componentLoader_;
        $templateCache = _$templateCache_;
      });
    });

    it("should setup controller name mappings properly", function() {
      expect($componentLoader.controllerName("awesome")).toEqual("AwesomeController");
      expect($componentLoader.controllerName("cheese")).toEqual("CheesetasticController");
    });

    it("should setup template mappings properly", function() {
      expect($componentLoader.template("awesome")).toEqual("awesome.tpl.html")
      expect($componentLoader.template("cheese")).toEqual("./components/cheese/cheese.html")
    });

    it("should setup comopnent name mappings properly", function() {
      expect($componentLoader.component("AwesomeController")).toEqual("awesome");
      expect($componentLoader.component("CheesetasticController")).toEqual("cheese");
    });

    it("should initialize controllers for all components", function() {
      expect(controllerSpy).toHaveBeenCalledWith("AwesomeController", TestComponent);
      expect(controllerSpy).not.toHaveBeenCalledWith("CheesetasticController", TestController);
    });

    it("should setup inline templates in the template cache", function() {
      expect($templateCache.get("awesome.tpl.html")).toEqual("<p>FizzBuzz</p>");
    });
  });
});
