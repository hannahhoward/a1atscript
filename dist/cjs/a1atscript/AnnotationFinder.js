"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnnotationFinder = (function () {
  function AnnotationFinder(AnnotatedClass) {
    _classCallCheck(this, AnnotationFinder);

    this.AnnotatedClass = AnnotatedClass;
  }

  _createClass(AnnotationFinder, [{
    key: "annotationFor",
    value: function annotationFor(AnnotationClass) {
      var OriginalClass = AnnotationClass.originalClass || AnnotationClass;
      if (this.AnnotatedClass.annotations) {
        return this.AnnotatedClass.annotations.find(function (annotation) {
          return annotation instanceof OriginalClass;
        });
      } else {
        return null;
      }
    }
  }, {
    key: "annotationsFor",
    value: function annotationsFor(AnnotationClass) {
      var OriginalClass = AnnotationClass.originalClass || AnnotationClass;
      if (this.AnnotatedClass.annotations) {
        return this.AnnotatedClass.annotations.filter(function (annotation) {
          return annotation instanceof OriginalClass;
        });
      } else {
        return null;
      }
    }
  }]);

  return AnnotationFinder;
})();

exports.AnnotationFinder = AnnotationFinder;