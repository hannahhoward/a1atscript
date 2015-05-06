import {RouteReader} from '../src/a1atscript/router/RouteReader.js'
import {RouteConfig} from '../src/a1atscript/router/RouteConfig';


class UserComponent {

}

class AwesomeComponent {

}

@RouteConfig({
  path: 'cheese', component: 'awesome'
})
class MyController {
}

@RouteConfig({
  path: '/user', component: UserComponent
})
@RouteConfig({
  path: '/test', components: {
    test: AwesomeComponent,
    headline: MyController
  }
})
class AppComponent {
}

describe("RouteReader", function() {
  var componentMapper, componentMapperSpy, routeReader, routeConfig;
  beforeEach(function() {
    componentMapper = {
      map: new Map(),

      register: function(component) {
        if (!this.map.get(component)) {
          this.map.set(component,
          {
            get componentName() {
              if (component === AppComponent) {
                return "app";
              } else if (component === AwesomeComponent) {
                return "awesome";
              } else if (component == UserComponent) {
                return "user";
              } else if (component == MyController) {
                return "my";
              }
            }
          });
        };
        return this.map.get(component);
      }
    }

    componentMapperSpy = spyOn(componentMapper, "register").and.callThrough();

    routeReader = new RouteReader(componentMapper);
  });

  it("should register components", function() {
    routeReader.read(AppComponent);
    expect(componentMapperSpy).toHaveBeenCalledWith(AppComponent);
    expect(componentMapperSpy).toHaveBeenCalledWith(AwesomeComponent);
    expect(componentMapperSpy).toHaveBeenCalledWith(UserComponent);
    expect(componentMapperSpy).toHaveBeenCalledWith(MyController);
  });

  it("should set routes correctly", function() {
    routeReader.read(AppComponent);
    routeConfig = AppComponent.$routeConfig;
    expect(routeConfig).toEqual([
      {
        path: '/user', component: "user"
      },
      {
        path: '/test', components: {
          test: "awesome",
          headline: "my"
        }
      }
    ]);
  });

  it("should handle existing string names", function() {
    routeReader.read(MyController);
    routeConfig = MyController.$routeConfig;
    expect(routeConfig).toEqual([
    {
      path: 'cheese', component: 'awesome'
    }
    ]);
  });
});
