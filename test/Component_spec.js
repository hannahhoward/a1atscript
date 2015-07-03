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

import {getInjector} from '../src/a1atscript/Injector';

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
  events: {
    click: "click"
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
  var scope, isolateScope, element, injector, $compile, saveSpy,
      componentInjector, beforeHook, hooks;

  beforeEach(function() {
    hooks = {
      before(module, ddo) {
        ddo._bind.foo = "@"
      },
      after() {}
    };

    componentInjector = getInjector('component');
    spyOn(hooks, 'before').and.callThrough();
    spyOn(hooks, 'after');
    componentInjector.componentHooks.before.push(hooks.before);
    componentInjector.componentHooks.after.push(hooks.after);

    bootstrap(AppModule, "AppModule");
    mock.module('AppModule');
    mock.inject(function($rootScope, _$compile_) {
      scope = $rootScope.$new();
      scope.apple = "cheese";
      scope.save = function() { };
      saveSpy = spyOn(scope, 'save');
      $compile = _$compile_;
      element = '<awesome bind-apple="apple" on-click="save" foo="bar"></awesome>';
      element = $compile(element)(scope);
      scope.$digest();
      isolateScope = element.isolateScope();
    });
  });

  it("should function as a directive definition object", function() {
    expect(element.find('p').length).toEqual(1);
    expect(element.find('p')[0].innerHTML).toEqual("test cheese")
  });

  it("should setup the events", function() {
    isolateScope.awesome.click();
    expect(saveSpy).toHaveBeenCalled();
  });

  it("should call 'before' hook and allow altering ddo", function() {
    let hookArgs = hooks.before.calls.argsFor(0);
    let module = hookArgs[0];
    let ddo = hookArgs[1];
    expect(module).toEqual(angular.module(AppModule.token));
    expect(ddo._annotation instanceof Component).toBeTruthy();
    expect(ddo._controller).toEqual(AwesomeComponent);
    expect(isolateScope.awesome.foo).toEqual('bar');
  });

  it("should call 'after' hook", function() {
    let hookArgs = hooks.after.calls.argsFor(0);
    let module = hookArgs[0];
    let ddo = hookArgs[1];
    expect(module).toEqual(angular.module(AppModule.token));
    expect(ddo._annotation instanceof Component).toBeTruthy();
    expect(ddo._controller).toEqual(AwesomeComponent);
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
