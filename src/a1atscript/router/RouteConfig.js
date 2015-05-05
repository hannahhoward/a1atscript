import {ToAnnotation} from '../ToAnnotation.js';

@ToAnnotation
export class RouteConfig {
  constructor(routeDescription) {
    this.routeDescription = routeDescription;
  }
}
