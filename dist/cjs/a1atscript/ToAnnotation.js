'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.ToAnnotation = ToAnnotation;
function defineAnnotation(target, AnnotationClass, callParams) {
  var oldAnnotation = Object.getOwnPropertyDescriptor(target, 'annotations');
  if (oldAnnotation) {
    var oldGetter = oldAnnotation.get;
    Object.defineProperty(target, 'annotations', {
      configurable: true,
      get: function get() {
        var oldValue = oldGetter();
        oldValue.unshift(new (Function.prototype.bind.apply(AnnotationClass, callParams))());
        return oldValue;
      } });
  } else {
    Object.defineProperty(target, 'annotations', {
      configurable: true,
      get: function get() {
        return [new (Function.prototype.bind.apply(AnnotationClass, callParams))()];
      } });
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
    descriptor.initializer = function () {
      return value;
    };
  }
  descriptor.enumerable = true;
  return descriptor;
}

function ToAnnotation(AnnotationClass) {
  var decorator = function decorator() {
    for (var _len = arguments.length, callParams = Array(_len), _key = 0; _key < _len; _key++) {
      callParams[_key] = arguments[_key];
    }

    callParams.unshift(null);
    return function (targetClass) {
      for (var _len2 = arguments.length, otherParams = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        otherParams[_key2 - 1] = arguments[_key2];
      }

      if (otherParams.length >= 2) {
        return handleProperty(otherParams[1], AnnotationClass, callParams);
      } else {
        defineAnnotation(targetClass, AnnotationClass, callParams);
        return targetClass;
      }
    };
  };
  decorator.originalClass = AnnotationClass;
  return decorator;
}