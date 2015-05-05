import {Controller} from '../src/a1atscript/annotations.js'
import {Component, View} from '../src/a1atscript/ng2Directives/Component.js'
import {ComponentMapper} from '../src/a1atscript/router/ComponentMapper.js'

@Controller('AwesomeController', [])
class AwesomeController {
  constructor() {

  }
}

@Controller('weirdName', [])
class WeirdNameController {
  constructor() {

  }
}

@Component({
  selector: 'awesome'
})
@View({
  templateUrl: "cheese.tpl.html"
})
class AwesomeComponent {
  constructor() {

  }
}

@Component({
  controllerAs: 'cac'
})
@View({
  templateUrl: "cheese.tpl.html"
})
class ControllerAsComponent {
  constructor() {

  }
}

@Component({})
class UnNamedComponent {
  constructor() {

  }
}

class NonAnnotatedComponent {
  constructor() {

  }
}

@Component({
  selector: "cheese"
})
@View({
  template: "<p>Awesome</p>"
})
class InlineTemplateComponent {
  constructor() {

  }
}

describe("ComponentMapper", function() {
  var componentMapper, componentMapping;

  beforeEach(function() {
    componentMapper = new ComponentMapper();
  });

  describe("controllers", function() {
    it("should convert canonically named controllers to components", function() {
      componentMapping = componentMapper.register(AwesomeController);
      expect(componentMapping.componentName).toEqual("awesome");
      expect(componentMapping.templateUrl).toEqual("./components/awesome/awesome.html");
      expect(componentMapping.isController).toBe(true);
      expect(componentMapping.controllerName).toEqual("AwesomeController");
      expect(componentMapper.controllerRegistry["AwesomeController"]).toEqual("awesome");
    });

    it("should convert oddly named controllers to components", function() {
      componentMapping = componentMapper.register(WeirdNameController);
      expect(componentMapping.componentName).toEqual("weirdName");
      expect(componentMapping.templateUrl).toEqual("./components/weirdName/weirdName.html");
      expect(componentMapping.isController).toBe(true);
      expect(componentMapping.controllerName).toEqual("weirdName");
      expect(componentMapper.controllerRegistry["weirdName"]).toEqual("weirdName");
    });
  });

  describe("components", function() {
    it("should convert components with controllerAs value to components with same name", function() {
      componentMapping = componentMapper.register(ControllerAsComponent);
      expect(componentMapping.componentName).toEqual("cac");
      expect(componentMapping.controllerName).toEqual("A1AtScriptCacController");
      expect(componentMapper.controllerRegistry["A1AtScriptCacController"]).toEqual("cac");
    });

    it("should convert components with selector names to components with same name", function() {
      componentMapping = componentMapper.register(AwesomeComponent);
      expect(componentMapping.componentName).toEqual("awesome");
      expect(componentMapping.controllerName).toEqual("A1AtScriptAwesomeController");
      expect(componentMapper.controllerRegistry["A1AtScriptAwesomeController"]).toEqual("awesome");
    });

    it("should not mark them as controllers", function() {
      expect(componentMapping.isController).toBe(false);
    })


    it("should read templateUrls from View annotations", function() {
      componentMapping = componentMapper.register(AwesomeComponent);
      expect(componentMapping.templateUrl).toEqual("cheese.tpl.html");
    });

    it("should generate a name for components with no selector", function() {
      componentMapping = componentMapper.register(UnNamedComponent);
      expect(componentMapping.componentName).toEqual("a1atscriptComponent_0");
      expect(componentMapping.templateUrl).toEqual("./components/a1atscriptComponent_0/a1atscriptComponent_0.html");
      expect(componentMapping.controllerName).toEqual("A1AtScriptComponent_0Controller");
      expect(componentMapper.controllerRegistry["A1AtScriptComponent_0Controller"]).toEqual("a1atscriptComponent_0");

      // check idempotence
      componentMapping = componentMapper.register(UnNamedComponent);
      expect(componentMapping.componentName).toEqual("a1atscriptComponent_0");
      expect(componentMapping.templateUrl).toEqual("./components/a1atscriptComponent_0/a1atscriptComponent_0.html");
      expect(componentMapping.controllerName).toEqual("A1AtScriptComponent_0Controller");
      expect(componentMapper.controllerRegistry["A1AtScriptComponent_0Controller"]).toEqual("a1atscriptComponent_0");

    });
  });

  describe("non annotated classes", function() {
    it("should generate a name for classes with no annotation at all", function() {
      componentMapping = componentMapper.register(NonAnnotatedComponent);
      expect(componentMapping.componentName).toEqual("a1atscriptComponent_0");
      expect(componentMapping.controllerName).toEqual("A1AtScriptComponent_0Controller");
      expect(componentMapping.templateUrl).toEqual("./components/a1atscriptComponent_0/a1atscriptComponent_0.html");
      expect(componentMapping.isController).toBe(false);
      expect(componentMapper.controllerRegistry["A1AtScriptComponent_0Controller"]).toEqual("a1atscriptComponent_0");
    });
  });

  describe("inline template components", function() {
    it("should add the template to the inline template cache", function() {
      componentMapping = componentMapper.register(InlineTemplateComponent);
      expect(componentMapper.inlineTemplateCache["./components/cheese/cheese.html"]).toEqual("<p>Awesome</p>");
    });
  })
});
