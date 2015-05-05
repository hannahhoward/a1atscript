import {AnnotationFinder} from "../src/a1atscript/AnnotationFinder.js";
import {ToAnnotation} from "../src/a1atscript/ToAnnotation.js";

@ToAnnotation
class Anno1 {

}

@ToAnnotation
class Anno2 {

}

@Anno1
@Anno2
class Something {
  constructor() {

  }
}

describe("AnnotationFinder", function() {
  var anno1Class, anno2Class, annotationFinder;
  beforeEach(function() {
    anno1Class = Anno1.originalClass || Anno1;
    anno2Class = Anno2.originalClass || Anno2;
    annotationFinder = new AnnotationFinder(Something);
  });

  it("should find annotations", function () {
    expect(annotationFinder.annotationFor(Anno1)).toEqual(jasmine.any(anno1Class));
    expect(annotationFinder.annotationFor(Anno2)).toEqual(jasmine.any(anno2Class));
  });
});
