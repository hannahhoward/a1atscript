import PropertiesBuilder from "../src/a1atscript/ng2Directives/PropertiesBuilder.js"

class Component {
  constructor() {

  }
}

describe("PropertiesBuilder", function() {
  var propertiesObj, properties;

  beforeEach(function() {
    propertiesObj = {
      "cheese": "danish",
      "apple": "apple"
    };
    properties = (new PropertiesBuilder(propertiesObj, Component)).build();
  });

  it("should setup the correct properties", function() {
    expect(properties).toEqual({
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
