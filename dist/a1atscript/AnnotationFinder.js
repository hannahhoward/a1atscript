export class AnnotationFinder {
  constructor(AnnotatedClass) {
    this.AnnotatedClass = AnnotatedClass;
  }

  annotationFor(AnnotationClass) {
    var OriginalClass = AnnotationClass.originalClass || AnnotationClass;
    if (this.AnnotatedClass.annotations) {
      return this.AnnotatedClass.annotations.find((annotation) => annotation instanceof OriginalClass)
    } else {
      return null;
    }
  }

  annotationsFor(AnnotationClass) {
    var OriginalClass = AnnotationClass.originalClass || AnnotationClass;
    if (this.AnnotatedClass.annotations) {
      return this.AnnotatedClass.annotations.filter((annotation) => annotation instanceof OriginalClass)
    } else {
      return null;
    }
  }
}
