export function ToAnnotation(AnnotationClass) {
  var decorator = function(...callParams) {
    callParams.unshift(null);
    return function(targetClass) {
      var oldAnnotation = Object.getOwnPropertyDescriptor(targetClass, 'annotations');
      if (oldAnnotation) {
        var oldGetter = oldAnnotation.get
        Object.defineProperty(targetClass, 'annotations', {
          configurable: true,
          get: function() {
            return oldGetter().concat([new (Function.prototype.bind.apply(AnnotationClass, callParams))]);
          }});
      } else {
        Object.defineProperty(targetClass, 'annotations', {
          configurable: true,
          get: function() {
          return [new (Function.prototype.bind.apply(AnnotationClass, callParams))];
          }});
      }
      return targetClass;
    };
  };
  decorator.originalClass = AnnotationClass;
  return decorator;
}
