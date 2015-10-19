import angular from 'angular';
import 'angular-mocks';

import {
  Module,
  AsModule,
  Controller,
  Directive,
  Service
} from '../src/a1atscript/annotations';

import {
  Injector,
  registerInjector,
  getInjector
} from '../src/a1atscript/Injector';

import {
  applyAnnotation
} from "../src/a1atscript/applyAnnotation.js";
var mock = angular.mock;

@Controller('ExampleController', ['$scope', 'ExampleService'])
class ExampleController {
  constructor($scope, ExampleService) {
    $scope.value = ExampleService.value
  }
}

@AsModule('ServiceModule')
@Service('ExampleService')
class ExampleService {
  constructor() {
    this.value = 'Test Value';
  }
}

function testDirective() {
  return {
    restrict: 'E',
    template: "<p>Hello</p"
  };
}

applyAnnotation(testDirective, Directive, 'testDirective', []);

angular.module('NonAtScriptModule', []).value('NonAtScriptValue', 'Another Test Value');

var AppModule = new Module('AppModule', [ExampleService, 'NonAtScriptModule', ExampleController, testDirective])

describe("Injector", function() {
  var exampleService,
  nonAtScriptValue,
  exampleController,
  scope,
  injector;

  beforeEach(function() {
    injector = new Injector("myAppNamePrefix");
  });

  describe("module shorthand", function() {
    beforeEach(function() {
      injector.instantiate(ExampleService);
      mock.module('myAppNamePrefix.ServiceModule');
      mock.inject(function(_ExampleService_) {
        exampleService = _ExampleService_;
      });
    });

    it("should setup a single component as a module", function() {
      expect(exampleService instanceof ExampleService).toBeTruthy();
    });
  });

  describe("Top Level Module", function() {
    beforeEach(function() {
      injector.instantiate(AppModule);
      mock.module('myAppNamePrefix.AppModule');
    });

    describe("other modules", function() {

      beforeEach(mock.inject(function(_ExampleService_) {
        exampleService = _ExampleService_;
      }));

      it("should setup components", function() {
        expect(exampleService instanceof ExampleService).toBeTruthy();
      });

    });

    describe("standard (non atScript) angular modules", function() {
      beforeEach(mock.inject(function(_NonAtScriptValue_) {
        nonAtScriptValue = _NonAtScriptValue_;
      }));

      it("should setup components", function() {
        expect(nonAtScriptValue).toEqual('Another Test Value');
      });

    });

    describe("components of the module", function() {
      describe("controller", function() {
        beforeEach(mock.inject(function($controller, $rootScope) {
          scope = $rootScope.$new();
          exampleController = $controller('ExampleController', { $scope: scope });
          scope.$digest();
        }));


        it("should all components to depend on other components", function() {
          expect(scope.value).toEqual("Test Value");
        });

      })

      describe("directive", function() {
        var element;
        beforeEach(mock.inject(function($compile, $rootScope) {
          scope = $rootScope.$new();
          element = $compile("<test-directive></test-directive>");
          element = element(scope);
        }))

        it("should be able to use annotations on functions using apply annotation", function() {
          expect(element.find("p").length).toEqual(1);
        })
      })
    });

  });

  describe("Registering an injector", function() {
    it("should store an instance of the class", function() {
      class Bar {

      }
      class Foo {
        get annotationClass() {
          return Bar;
        }
      }
      registerInjector('foo', Foo);
      expect(getInjector('foo') instanceof Foo).toBeTruthy();
    })
  })
});
