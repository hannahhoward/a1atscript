function defineAnnotation(target, AnnotationClass, callParams) {
  var oldAnnotation = Object.getOwnPropertyDescriptor(target, 'annotations');
  if (oldAnnotation) {
    var oldGetter = oldAnnotation.get
    Object.defineProperty(target, 'annotations', {
      configurable: true,
      get: function() {
        var oldValue = oldGetter();
        oldValue.unshift(new (Function.prototype.bind.apply(AnnotationClass, callParams)));
        return oldValue;
      }});
  } else {
    Object.defineProperty(target, 'annotations', {
      configurable: true,
      get: function() {
      return [new (Function.prototype.bind.apply(AnnotationClass, callParams))];
      }});
  }
}

function handleProperty(descriptor, AnnotationClass, callParams) {
  var value;
  if (descriptor.initializer) {
    value = descriptor.initializer();
  } else {
    value = descriptor.value;
  }
  defineAnnotation(value, AnnotationClass, callParams);
  if (descriptor.initializer) {
    descriptor.initializer = function() { return value; }
  }
  descriptor.enumerable = true;
  return descriptor;
}

export function ToAnnotation(AnnotationClass) {
  var decorator = function(...callParams) {
    if (this instanceof decorator) {
      return new AnnotationClass(...callParams)
    } else {
      callParams.unshift(null);
      return function(targetClass, ...otherParams) {
        if (otherParams.length >= 2) {
          return handleProperty(otherParams[1], AnnotationClass, callParams);
        } else {
          defineAnnotation(targetClass, AnnotationClass, callParams)
          return targetClass;
        }
      };
    }
  };
  decorator.originalClass = AnnotationClass;
  return decorator;
}
