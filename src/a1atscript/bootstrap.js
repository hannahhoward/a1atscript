import {Injector} from "./Injector.js";
import {Router} from "./Router.js";

export function bootstrap(appModule, appPrefix = "") {
  var injector = new Injector(appPrefix);
  var moduleName = injector.instantiate(appModule);
  Router.routeInitializer.initialize(moduleName, appModule);
}
