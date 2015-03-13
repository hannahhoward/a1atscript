import BindBuilder from "../src/a1atscript/ng2Directives/BindBuilder.js"

class Component {
  constructor() {

  }
}

describe("BindBuilder", function() {
  var bindObj, bind;

  beforeEach(function() {
    bindObj = {
      "cheese": "danish",
      "apple": "apple"
    };
    bind = (new BindBuilder(bindObj, Component)).build();
  });

  it("should setup the correct bind", function() {
    expect(bind).toEqual({
      "cheese": "@danish",
      "___bindable___cheese": "=?bindDanish",
      "apple": "@apple",
      "___bindable___apple": "=?bindApple"
    });
  });

  it("should setup the setters", function() {
    var component = new Component();
    component.___bindable___apple = "value";
    expect(component.apple).toEqual("value");
  });
});
