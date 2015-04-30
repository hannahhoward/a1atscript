import {ToAnnotation} from '../src/a1atscript/ToAnnotation.js';

class AnnoClass {

}

class Anno2Class {
  constructor(awesome, awesomeness) {
    this.awesome = awesome;
    this.awesomeness = awesomeness;
  }
}

class TargetClass {

}

describe("ToAnnotation decorator", function() {
  var annoDecorator, anno2Decorator;
  beforeEach(function() {
    annoDecorator = ToAnnotation(AnnoClass);
    anno2Decorator = ToAnnotation(Anno2Class);
  });

  it("on first annotation", function() {
    annoDecorator()(TargetClass);
    expect(TargetClass.annotations).toEqual([new AnnoClass()]);
  });

  it("on second annotation", function() {
    anno2Decorator("cheese", "grater")(TargetClass);
    expect(TargetClass.annotations).toEqual([new AnnoClass(), new Anno2Class("cheese", "grater")]);
  });
});
