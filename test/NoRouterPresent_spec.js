import angular from 'angular';
import 'angular-mocks';

import {Component, View} from '../src/a1atscript/ng2Directives/Component';
import {RouteConfig} from '../src/a1atscript/router/RouteConfig';
import "../src/a1atscript/ng2Directives/ComponentInjector";

import {
  AsModule,
  Service
} from '../src/a1atscript/annotations';

import {
  bootstrap
} from '../src/a1atscript/bootstrap';

var mock = angular.mock;

@Component({})
@View({
  template: "<p>Sub</p>"
})
class SubComponent {

}

@Component({})
@View({
  template: "<p>Home</p><ng-viewport></ng-viewport>"
})
@RouteConfig({
  path: "/sub", component: SubComponent
})
class HomeComponent {
}

@AsModule('NoRouterAppModule', ['templates', HomeComponent, SubComponent])
@Component({
  selector: "awesome"
})
@View({
  templateUrl: "app.tpl.html"
})
@RouteConfig({
  path: "/home", component: HomeComponent
})
class AppComponent {
}

angular.module("templates", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app.tpl.html",
    "<ng-viewport></ng-viewport>");
}]);

describe("Routable Component", function() {
  var scope, element, $compile;

  beforeEach(function() {
    bootstrap(AppComponent, "NoRouterAppModule");
    mock.module('NoRouterAppModule');
    mock.inject(function($rootScope, _$compile_) {
      scope = $rootScope.$new();
      $compile = _$compile_;
      element = '<awesome></awesome>';
      element = $compile(element)(scope);
      $rootScope.$digest();
    });
  });

  it("should not build routes but should compile with no issues despite lack of router", function() {
    expect(element.find('ng-viewport').length).toEqual(1);
  });
});
