import {ToAnnotation} from '../ToAnnotation.js';

class RouteConfigAnnotation {
  constructor(routeDescription) {
    this.routeDescription = routeDescription;
  }
}

export const RouteConfig = ToAnnotation(RouteConfigAnnotation);
