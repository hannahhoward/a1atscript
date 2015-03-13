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
  Module
} from '../src/a1atscript/annotations.js';

describe("annotations", function() {

  describe("config", function() {

    @Config('dep1', 'dep2')
    class ExampleConfig {
      constructor(dep1, dep2) {

      }
    };

    it("should annotate the config", function() {
      expect(ExampleConfig.annotations[0]).toEqual(
        new Config('dep1', 'dep2'));
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
        new Run('dep1', 'dep2'));
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
        new Controller('ExampleController', ['dep1', 'dep2']));
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
        new Directive('ExampleDirective', ['dep1', 'dep2']));
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
        new Service('ExampleService', ['dep1', 'dep2']));
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
        new Factory('ExampleFactory', ['dep1', 'dep2']));
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
        new Provider('ExampleProvider', ['dep1', 'dep2']));
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
        new Value('ExampleValue', ['dep1', 'dep2']));
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
        new Constant('ExampleConstant', ['dep1', 'dep2']));
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
        new Animation('ExampleAnimation', ['dep1', 'dep2']));
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
        new Filter('ExampleFilter', ['dep1', 'dep2']));
    });

  });


  describe("module", function() {

    @Module('ExampleModule', ['dep1', 'dep2'])
    class ExampleModule {
      constructor(dep1, dep2) {

      }
    };

    it("should annotate the module", function() {
      expect(ExampleModule.annotations[0]).toEqual(
        new Module('ExampleModule', ['dep1', 'dep2']));
    });

  });

});
