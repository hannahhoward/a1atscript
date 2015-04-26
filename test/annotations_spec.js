import {
  Config,
  Run,
  Controller,
  Directive,
  Service,
  Factory,
  Provider,
  Value,
  Constant,
  Animation,
  Filter,
  AsModule
} from '../src/a1atscript/annotations.js';

var OriginalConfig = Config.originalClass || Config;
var OriginalRun = Run.originalClass || Run;
var OriginalController = Controller.originalClass || Controller;
var OriginalDirective = Directive.originalClass || Directive;
var OriginalService = Service.originalClass || Service;
var OriginalFactory = Factory.originalClass || Factory;
var OriginalProvider = Provider.originalClass || Provider;
var OriginalValue = Value.originalClass || Value;
var OriginalConstant = Constant.originalClass || Constant;
var OriginalAnimation = Animation.originalClass || Animation;
var OriginalFilter = Filter.originalClass || Filter;
var OriginalAsModule = AsModule.originalClass || AsModule;

describe("annotations", function() {

  describe("config", function() {

    @Config('dep1', 'dep2')
    class ExampleConfig {
      constructor(dep1, dep2) {

      }
    };

    it("should annotate the config", function() {
      expect(ExampleConfig.annotations[0]).toEqual(
        new OriginalConfig('dep1', 'dep2'));
      expect(ExampleConfig.annotations[0].dependencies).toEqual(['dep1', 'dep2'])
    });

  });

  describe("run", function() {

    @Run('dep1', 'dep2')
    class ExampleRun {
      constructor(dep1, dep2) {

      }
    };

    it("should annotate the run", function() {
      expect(ExampleRun.annotations[0]).toEqual(
        new OriginalRun('dep1', 'dep2'));
      expect(ExampleRun.annotations[0].dependencies).toEqual(['dep1', 'dep2'])
    });

  });

  describe("controller", function() {

    @Controller('ExampleController', ['dep1', 'dep2'])
    class ExampleController {
      constructor(dep1, dep2) {

      }
    };

    it("should annotate the controller", function() {
      expect(ExampleController.annotations[0]).toEqual(
        new OriginalController('ExampleController', ['dep1', 'dep2']));
    });

  });

  describe("directive", function() {

    @Directive('ExampleDirective', ['dep1', 'dep2'])
    class ExampleDirective {
      constructor(dep1, dep2) {

      }
    };

    it("should annotate the directive", function() {
      expect(ExampleDirective.annotations[0]).toEqual(
        new OriginalDirective('ExampleDirective', ['dep1', 'dep2']));
    });

  });

  describe("service", function() {

    @Service('ExampleService', ['dep1', 'dep2'])
    class ExampleService {
      constructor(dep1, dep2) {

      }
    };

    it("should annotate the service", function() {
      expect(ExampleService.annotations[0]).toEqual(
        new OriginalService('ExampleService', ['dep1', 'dep2']));
    });

  });

  describe("factory", function() {

    @Factory('ExampleFactory', ['dep1', 'dep2'])
    class ExampleFactory {
      constructor(dep1, dep2) {

      }
    };

    it("should annotate the factory", function() {
      expect(ExampleFactory.annotations[0]).toEqual(
        new OriginalFactory('ExampleFactory', ['dep1', 'dep2']));
    });

  });

  describe("provider", function() {

    @Provider('ExampleProvider', ['dep1', 'dep2'])
    class ExampleProvider {
      constructor(dep1, dep2) {

      }
    };

    it("should annotate the provider", function() {
      expect(ExampleProvider.annotations[0]).toEqual(
        new OriginalProvider('ExampleProvider', ['dep1', 'dep2']));
    });

  });

  describe("value", function() {

    @Value('ExampleValue', ['dep1', 'dep2'])
    class ExampleValue {
      constructor(dep1, dep2) {

      }
    };

    it("should annotate the value", function() {
      expect(ExampleValue.annotations[0]).toEqual(
        new OriginalValue('ExampleValue', ['dep1', 'dep2']));
    });

  });

  describe("constant", function() {

    @Constant('ExampleConstant', ['dep1', 'dep2'])
    class ExampleConstant {
      constructor(dep1, dep2) {

      }
    };

    it("should annotate the constant", function() {
      expect(ExampleConstant.annotations[0]).toEqual(
        new OriginalConstant('ExampleConstant', ['dep1', 'dep2']));
    });

  });

  describe("animation", function() {

    @Animation('ExampleAnimation', ['dep1', 'dep2'])
    class ExampleAnimation {
      constructor(dep1, dep2) {

      }
    };

    it("should annotate the animation", function() {
      expect(ExampleAnimation.annotations[0]).toEqual(
        new OriginalAnimation('ExampleAnimation', ['dep1', 'dep2']));
    });

  });

  describe("filter", function() {

    @Filter('ExampleFilter', ['dep1', 'dep2'])
    class ExampleFilter {
      constructor(dep1, dep2) {

      }
    };

    it("should annotate the filter", function() {
      expect(ExampleFilter.annotations[0]).toEqual(
        new OriginalFilter('ExampleFilter', ['dep1', 'dep2']));
    });

  });


  describe("asModule", function() {

    @AsModule('ExampleModule', ['dep1', 'dep2'])
    class ExampleModule {
      constructor(dep1, dep2) {

      }
    };

    it("should annotate the module", function() {
      expect(ExampleModule.annotations[0]).toEqual(
        new OriginalAsModule('ExampleModule', ['dep1', 'dep2']));
    });

  });

});
