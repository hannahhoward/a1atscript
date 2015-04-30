import {ToAnnotation} from '../src/a1atscript/ToAnnotation.js';

@ToAnnotation
class AnnoClass {

}

@ToAnnotation
class Anno2Class {
  constructor(awesome, awesomeness) {
    this.awesome = awesome;
    this.awesomeness = awesomeness;
  }
}

@AnnoClass()
@Anno2Class("cheese", "grater")
class TargetClass {

  @AnnoClass()
  method() {

  }
}

var literal = {
  @AnnoClass()
  awesome() {}
}

describe("ToAnnotation decorator", function() {

  it("operating on class", function() {
    expect(TargetClass.annotations).toEqual([new (Anno2Class.originalClass)("cheese", "grater"), new (AnnoClass.originalClass)()]);
  });

  it("operating on method", function() {
    expect(TargetClass.prototype.method.annotations).toEqual([new (AnnoClass.originalClass)()]);
  });

  it("operating on literal property", function() {
    expect(literal.awesome.annotations).toEqual([new (AnnoClass.originalClass)()]);
  });
});
