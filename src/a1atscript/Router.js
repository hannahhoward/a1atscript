import {ComponentMapper} from "./router/ComponentMapper.js";
import {RouteReader} from "./router/RouteReader.js";
import { RouteInitializer } from "./router/RouteInitializer.js";
export { RouteConfig } from "./router/RouteConfig.js";

var componentMapper = new ComponentMapper();
var routeReader = new RouteReader(componentMapper);
var routeInitializer = new RouteInitializer(componentMapper);

export var Router = {
  componentMapper: componentMapper,
  routeReader: routeReader,
  routeInitializer: routeInitializer
};
