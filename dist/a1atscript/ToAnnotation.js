export function ToAnnotation(AnnotationClass) {
  var decorator = function(...callParams) {
    callParams.unshift(null);
    return function(targetClass, ...otherParams) {
      var target, returnVal;
      if (otherParams.length >= 2) {
        target = otherParams[1].value
        returnVal = otherParams[1];
      } else {
        target = targetClass;
        returnVal = targetClass;
      }
      var oldAnnotation = Object.getOwnPropertyDescriptor(targetClass, 'annotations');
      if (oldAnnotation) {
        var oldGetter = oldAnnotation.get
        Object.defineProperty(target, 'annotations', {
          configurable: true,
          get: function() {
            return oldGetter().concat([new (Function.prototype.bind.apply(AnnotationClass, callParams))]);
          }});
      } else {
        Object.defineProperty(target, 'annotations', {
          configurable: true,
          get: function() {
          return [new (Function.prototype.bind.apply(AnnotationClass, callParams))];
          }});
      }
      return returnVal;
    };
  };
  decorator.originalClass = AnnotationClass;
  return decorator;
}
