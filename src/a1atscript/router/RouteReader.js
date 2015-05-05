import {RouteConfig} from "./RouteConfig.js";
import {AnnotationFinder} from "../AnnotationFinder.js";

export class RouteReader {
  constructor(componentMapper) {
    this.componentMapper = componentMapper;
  }

  _routeConfigAnnotations(component) {
    return (new AnnotationFinder(component)).annotationsFor(RouteConfig);
  }

  _routeConfig(component) {
    return this._routeConfigAnnotations(component).map(this._convertConfig.bind(this));
  }

  _componentName(component) {
    if (typeof(component) === "string") {
      return component
    } else {
      return this.componentMapper.register(component).componentName;
    }
  }

  _convertConfig(routeConfigAnnotation) {
    var routeDescription = Object.assign({}, routeConfigAnnotation.routeDescription);
    if (routeDescription.component) {
      routeDescription.component = this._componentName(routeDescription.component);
    }

    if (routeDescription.components) {
      var components = {};
      Object.keys(routeDescription.components).forEach((key) => {
        components[key] = this._componentName(routeDescription.components[key]);
      });
      routeDescription.components = components;
    }

    return routeDescription;
  }

  read(component) {
    var mapping = this.componentMapper.register(component);
    component.$routeConfig = this._routeConfig(component);
  }
}
