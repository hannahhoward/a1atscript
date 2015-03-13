import Ng2Directive from '../src/a1atscript/ng2Directives/Ng2Directive.js';
import Ng2DirectiveDefinitionObject from '../src/a1atscript/ng2Directives/Ng2DirectiveDefinitionObject.js';

class Hello {
  constructor() {
  }
}

describe("DirectiveDefinitionObject", function() {
  var ng2DirectiveDefinitionObject, ng2Directive, ddoFactoryFn, templateProperties;

  describe("regular behavior", function() {
    beforeEach(function() {
      ng2Directive = new Ng2Directive({
        selector: "[attr]",
        bind: {
          'something': '='
        }
      });
      angular.version.major = 1;
      angular.version.minor = 4;
      ng2DirectiveDefinitionObject = new Ng2DirectiveDefinitionObject(Hello, ng2Directive);
    });

    it("should have the right properties", function() {
      expect(ng2DirectiveDefinitionObject.restrict).toEqual("A");
      expect(ng2DirectiveDefinitionObject.name).toEqual("attr");
      expect(ng2DirectiveDefinitionObject.controllerAs).toEqual("attr");
      expect(ng2DirectiveDefinitionObject.bindToController).toEqual({
        'something': '='
      });
      expect(ng2DirectiveDefinitionObject.controller).toEqual(Hello);
      expect(ng2DirectiveDefinitionObject.scope).toEqual({});
      expect(ng2DirectiveDefinitionObject.template).toBe(undefined);
      expect(ng2DirectiveDefinitionObject.templateUrl).toBe(undefined);
      expect(ng2DirectiveDefinitionObject.require).toBe(undefined);
      expect(ng2DirectiveDefinitionObject.transclude).toBe(undefined);
    });

    describe("factoryFn", function() {
      beforeEach(function() {
        ddoFactoryFn = ng2DirectiveDefinitionObject.factoryFn;
      });

      it("should build a factory function that returns the right DDO", function() {
        expect(ddoFactoryFn()).toEqual({
          scope: {},
          restrict: "A",
          controllerAs: "attr",
          bindToController: {
            'something': "="
          },
          require: undefined,
          transclude: undefined,
          controller: Hello,
          template: undefined,
          templateUrl: undefined
        });
      });
    });
  });

  describe("with ng1 customizations", function() {
    beforeEach(function() {
      ng2Directive = new Ng2Directive({
        selector: "[attr]",
        bind: {
          'something': '='
        },
        controllerAs: "awesome",
        require: "power"
      });
      angular.version.major = 1;
      angular.version.minor = 4;
      ng2DirectiveDefinitionObject = new Ng2DirectiveDefinitionObject(Hello, ng2Directive);
    });

    it("should have the right properties", function() {
      expect(ng2DirectiveDefinitionObject.restrict).toEqual("A");
      expect(ng2DirectiveDefinitionObject.name).toEqual("attr");
      expect(ng2DirectiveDefinitionObject.controllerAs).toEqual("awesome");
      expect(ng2DirectiveDefinitionObject.bindToController).toEqual({
        'something': '='
      });
      expect(ng2DirectiveDefinitionObject.controller).toEqual(Hello);
      expect(ng2DirectiveDefinitionObject.scope).toEqual({});
      expect(ng2DirectiveDefinitionObject.template).toBe(undefined);
      expect(ng2DirectiveDefinitionObject.templateUrl).toBe(undefined);
      expect(ng2DirectiveDefinitionObject.require).toBe("power");
      expect(ng2DirectiveDefinitionObject.transclude).toBe(undefined);

    });

    describe("factoryFn", function() {
      beforeEach(function() {
        ddoFactoryFn = ng2DirectiveDefinitionObject.factoryFn;
      });

      it("should build a factory function that returns the right DDO", function() {
        expect(ddoFactoryFn()).toEqual({
          scope: {},
          restrict: "A",
          controllerAs: "awesome",
          bindToController: {
            'something': "="
          },
          require: "power",
          transclude: undefined,
          controller: Hello,
          template: undefined,
          templateUrl: undefined
        });
      });
    });
  });

  describe("with template", function() {
    beforeEach(function() {
      ng2Directive = new Ng2Directive({
        selector: "[attr]",
        bind: {
          'something': '='
        }
      });
      templateProperties = {
        templateUrl: "attr.html"
      }
      angular.version.major = 1;
      angular.version.minor = 4;
      ng2DirectiveDefinitionObject = new Ng2DirectiveDefinitionObject(Hello, ng2Directive, templateProperties);
    });

    it("should have the right properties", function() {
      expect(ng2DirectiveDefinitionObject.restrict).toEqual("A");
      expect(ng2DirectiveDefinitionObject.name).toEqual("attr");
      expect(ng2DirectiveDefinitionObject.controllerAs).toEqual("attr");
      expect(ng2DirectiveDefinitionObject.bindToController).toEqual({
        'something': '='
      });
      expect(ng2DirectiveDefinitionObject.controller).toEqual(Hello);
      expect(ng2DirectiveDefinitionObject.scope).toEqual({});
      expect(ng2DirectiveDefinitionObject.template).toBe(undefined);
      expect(ng2DirectiveDefinitionObject.templateUrl).toBe("attr.html");
      expect(ng2DirectiveDefinitionObject.require).toBe(undefined);
      expect(ng2DirectiveDefinitionObject.transclude).toBe(undefined);
    });

    describe("factoryFn", function() {
      beforeEach(function() {
        ddoFactoryFn = ng2DirectiveDefinitionObject.factoryFn;
      });

      it("should build a factory function that returns the right DDO", function() {
        expect(ddoFactoryFn()).toEqual({
          scope: {},
          restrict: "A",
          controllerAs: "attr",
          bindToController: {
            'something': "="
          },
          require: undefined,
          transclude: undefined,
          controller: Hello,
          template: undefined,
          templateUrl: "attr.html"
        });
      });
    });
  });

  describe("angular < 1.4", function() {
    beforeEach(function() {
      ng2Directive = new Ng2Directive({
        selector: "[attr]",
        bind: {
          'something': '='
        }
      });
      angular.version.major = 1;
      angular.version.minor = 3;
      ng2DirectiveDefinitionObject = new Ng2DirectiveDefinitionObject(Hello, ng2Directive);
    });

    it("should have the right properties", function() {
      expect(ng2DirectiveDefinitionObject.restrict).toEqual("A");
      expect(ng2DirectiveDefinitionObject.name).toEqual("attr");
      expect(ng2DirectiveDefinitionObject.controllerAs).toEqual("attr");
      expect(ng2DirectiveDefinitionObject.bindToController).toEqual(true);
      expect(ng2DirectiveDefinitionObject.controller).toEqual(Hello);
      expect(ng2DirectiveDefinitionObject.scope).toEqual({
        'something': '='
      });
      expect(ng2DirectiveDefinitionObject.template).toBe(undefined);
      expect(ng2DirectiveDefinitionObject.templateUrl).toBe(undefined);
      expect(ng2DirectiveDefinitionObject.require).toBe(undefined);
      expect(ng2DirectiveDefinitionObject.transclude).toBe(undefined);
    });

    describe("factoryFn", function() {
      beforeEach(function() {
        ddoFactoryFn = ng2DirectiveDefinitionObject.factoryFn;
      });

      it("should build a factory function that returns the right DDO", function() {
        expect(ddoFactoryFn()).toEqual({
          scope: {
            'something': "="
          },
          restrict: "A",
          controllerAs: "attr",
          bindToController: true,
          require: undefined,
          transclude: undefined,
          controller: Hello,
          template: undefined,
          templateUrl: undefined
        });
      });
    });
  });


});
