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
  method() {

  }
}

describe("ToAnnotation decorator", function() {
  var annoDecorator, anno2Decorator;
  beforeEach(function() {
    annoDecorator = ToAnnotation(AnnoClass);
    anno2Decorator = ToAnnotation(Anno2Class);
  });

  it("on first annotation", function() {
    @annoDecorator()
    class MyTargetAnnoClass {

    }
    expect(MyTargetAnnoClass.annotations).toEqual([new AnnoClass()]);
  });

  it("on second annotation", function() {
    @annoDecorator()
    @anno2Decorator("cheese", "grater")
    class MyTargetAnno2Class {

    }
    expect(MyTargetAnno2Class.annotations).toContain(new Anno2Class("cheese", "grater"), new AnnoClass());
  });

  it("operating on method", function() {
    annoDecorator()(TargetClass.prototype, 'method', Object.getOwnPropertyDescriptor(TargetClass.prototype, 'method'));
    expect(TargetClass.prototype.method.annotations).toEqual([new AnnoClass()]);
  });
});
