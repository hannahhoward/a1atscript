export function applyAnnotation(target, annotationClass, ...params) {
  var AnnotationVersion = annotationClass.originalClass || annotationClass;
  target.annotations = target.annotations || [];
  target.annotations.push(new AnnotationVersion(...params))
}
