import angular from 'angular';
import 'angular-mocks';

import {Component, View} from '../src/a1atscript/ng2Directives/Component'
import "../src/a1atscript/ng2Directives/ComponentInjector";

import {
  Module,
  Service
} from '../src/a1atscript/annotations';

import {
  bootstrap
} from '../src/a1atscript/bootstrap';

var mock = angular.mock;

@Service('ExampleService')
class ExampleService {
  constructor() {
    this.value = 'Set within controller';
  }
}

class AwesomeBase {
  constructor() {
    this.test = "test";
  }

  setValue() {
    this.value = this.exampleService.value;
  }
}

@Component({
  selector: "awesome",
  properties: {
    apple: "apple"
  },
  injectables: ["ExampleService"]
})
@View({
  templateUrl: "awesome.tpl.html"
})
class AwesomeComponent extends AwesomeBase {
  constructor(exampleService) {
    super();
    this.exampleService = exampleService;
  }
  setValue() {
    super.setValue();
    this.subValue = this.exampleService.value;
  }
}

angular.module("awesomeTemplate", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("awesome.tpl.html",
    "<p>{{awesome.test}} {{awesome.apple}}</p>");
}]);

var AppModule = new Module('AppModule', ['awesomeTemplate', ExampleService, AwesomeComponent])

describe("Component", function() {
  var scope, isolateScope, element, injector, $compile;

  beforeEach(function() {
    bootstrap(AppModule, "AppModule");
    mock.module('AppModule');
    mock.inject(function($rootScope, _$compile_) {
      scope = $rootScope.$new();
      scope.apple = "cheese";
      $compile = _$compile_;
      element = '<awesome bind-apple="apple"></awesome>';
      element = $compile(element)(scope);
      scope.$digest();
      isolateScope = element.isolateScope();
    });
  });

  it("should function as a directive definition object", function() {
    expect(element.find('p').length).toEqual(1);
    expect(element.find('p')[0].innerHTML).toEqual("test cheese")
  });

  describe("this", function() {
    beforeEach(function() {
      isolateScope.awesome.setValue();
    });
    it("should be able to access this from within the link function", function() {
      expect(isolateScope.awesome.value).toEqual("Set within controller");
      expect(isolateScope.awesome.subValue).toEqual("Set within controller");
    })
  });

});
