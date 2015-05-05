import angular from 'angular';
import 'angular-mocks';
import 'angular-new-router';

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

@AsModule('AppModule', ['templates', 'ngNewRouter', HomeComponent, SubComponent])
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
    bootstrap(AppComponent, "AppModule");
    mock.module('AppModule');
    mock.inject(function($rootScope, $router, _$compile_) {
      scope = $rootScope.$new();
      $compile = _$compile_;
      element = '<awesome></awesome>';
      element = $compile(element)(scope);
      $router.navigate("/home/sub")
      $rootScope.$digest();
    });
  });

  it("should navigate correctly to the right route", function() {
    expect(element.find('p').length).toEqual(2);
    expect(element.find('p')[0].innerHTML).toEqual("Home")
    expect(element.find('p')[1].innerHTML).toEqual("Sub")
  });
});
