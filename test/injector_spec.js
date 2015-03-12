import angular from 'angular.js';
import mock from 'angularMocks.js';

import {
  Module,
  Controller,
  Service
} from '../src/annotations';

import {
  Injector
} from '../src/Injector';

@Controller('ExampleController', ['$scope', 'ExampleService'])
function ExampleController($scope, ExampleService) {
  $scope.value = ExampleService.value
}

@Module('ServiceModule')
@Service('ExampleService')
class ExampleService {
  constructor() {
    this.value = 'Test Value';
  }
}

angular.module('NonAtScriptModule', []).value('NonAtScriptValue', 'Another Test Value');

var AppModule = new Module('AppModule', [ExampleService, 'NonAtScriptModule', ExampleController])

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
      beforeEach(mock.inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        exampleController = $controller('ExampleController', { $scope: scope });
        scope.$digest();
      }));


      it("should all components to depend on other components", function() {
        expect(scope.value).toEqual("Test Value");
      });

    });

  });


});
