*NOTE: Please see the changelog for important breaking changes*

## A-1 AtScript

This is a package that uses annotations to provide syntactic sugar around Angular 1.x's Dependency Injection mechanism. It is designed to be a "bridge" to Angular 2.0  -- to get you as close as possible to writing Angular 2.0 like code in Angular 1.x (and make the transition super easy). More features will be added as Angular 2.0's feature set becomes more clear.

### Initial setup

> You must be building your Angular 1.x with ES6 and Traceur to use this code. How to setup a JS build system that incorporates ES6 is beyond the scope of this document. Check for tutorials on the internet

#### Install the module

```bash
bower install a1atscript --save
```

#### Angular Type Annotations

```javascript
import {Controller, Service} from 'bower_components/dist/a1atscript';
// or appropriate path for your project

@Controller('ExampleController', ['$scope', 'SomeService'])
export function ExampleController($scope, SomeService) {
}

@Service('ExampleService', ['SomeService'])
export class ExampleService {
	constructor(SomeService) {
	}
}
```

#### Setting up modules


```javascript
import {Module} from 'bower_components/dist/a1atscript';
import {
  ExampleController,
  ExampleService
} from './theCodeBlockRightAbove';
import { AnotherModule } from './anotherA1AtScriptModule';

export var MyModule = new Module('MyModule', [
	AnotherModule,
	ExampleController,
	ExampleService,
	'aRegularAngularModule'
]);
```

Note you can mix other modules, controllers, and services all together in the list -- A1AtScript will figure out how to sort out the module definition.

You can include regular angular modules by just referencing them as strings.

#### Shortform notation

If you want to quickly define a module with only one component... just use two annotations

```javascript
@Module('ServiceModule')
@Service('ExampleService')
class ExampleService {
  constructor() {
    this.value = 'Test Value';
  }
}
```

#### Compile your main app module

```javascript
import {bootstrap, Module} from 'bower_components/dist/a1atscript';
import { MyModule } from './myModule'

var AppModule = Module('AppModule', [
  MyModule
]);

// The string passed in is prefixed to then names
// of all of the modules when they are instantiated with
// Angular
bootstrap(AppModule, "myAppPrefix");
```

*Those of you who want to manually use the Injector class still can -- the bootstrap function is meant to mirror Angular 2's*

### Get ready for Angular 2!

Angular 2 introduces an entirely new syntax for working with directives. The most common type of directive is a Component. The good news is with A1AtScript you can write components right now, using a syntax remarkably similar to Angular 2.

```javascript
@Component({
  selector: "awesome",
  bind: {
    apple: "="
  },
  services: ["ExampleService"]
})

@Template({
  url: "awesome.tpl.html"
})

class AwesomeComponent {
  constructor(exampleService) {
    this.exampleService = exampleService;
    this.test = "test";
  }
  setValue() {
    this.value = this.exampleService.value;
  }
}
```

functionally this is equivalent to:

```javascript
angular.directive('awesome', function() {
  return {
  	restrict: 'E',
  	bindToController: {
  	  apple: "="
  	},
  	controller, ['ExampleService', AwesomeComponent]
  	controllerAs: 'awesome',
  	scope: {},
  	templateUrl: "awesome.tpl.html",
  }
  function AwesomeComponent(exampleService) {
    this.exampleService = exampleService;
  	this.test = "test";
  }
  AwesomeComponent.prototype.setValue = function() {
    this.value = this.exampleService.value
  }
});
```

The syntax is supported in a Angular 1.3+ (in 1.3 it will set bind properties on scope and bindToController to true, because bindToController object syntax is 1.4 only). If angular 1.x adopts a built-in component feature (see [https://github.com/angular/angular.js/issues/10007](https://github.com/angular/angular.js/issues/10007)) then this module will be updated to use that feature when it is available.

Other features:

1. Selector is a very, very basic css selector. The only things it does is if you do '[awesome]', your directive will be called awesome and it'll be set restrict: 'A', and if you do '.awesome' it'll be set restrict: 'C'
2. Services is optional for injecting dependencies into your component class
3. Class inheritance does work with components, but you'll need to define annotations on the child class
4. Template annotation supports simply "url" for templateUrls and 'inline' for inline templates

*But what about TemplateDirective and DecoratorDirective?*

These wil be supported in a future release. Still examining the best way to port these to Angular 1.x and maintain a similar feature set and syntax to 2.0.

*This new syntax replaces the old DirectiveObject, which is deprecated, and may be removed in a future release*

### Spice It Up: Write Your Own Injectors

One of the things that has always annoyed me about ui-router is you write your states into a config block. Wouldn't it be nice if you could do something like this:

```javascript
@State('root.main.inner')
class RootMainInnerState {
  constructor() {
    this.template = 'awesome/awesome.html'
    this.controller = 'AwesomeController'
  }

  @Resolve('Backend')
  model: function(Backend) {
  }

  @Resolve('AuthService')
  user: function(AuthService) {
  }

}
```

Well the good news is you could potentially do that. Just define an Annotation and an Injector

```javascript
import {registerInjector} from 'bower_components/dist/a1atscript'

export class State {
   constructor(stateName) {
     this.stateName = stateName;
   }
}

export class Resolve {
  constructor(...inject) {
    this.inject = inject;
  }
}

// An Injector must define an annotationClass getter and an instantiate method
export class StateInjector {
  get annotationClass() {
    return State;
  }

  annotateResolves(state) {
    state.resolve = {}
    for (var prop in state) {
      if (typeof state[prop] == "function") {
        var resolveItem = state[prop];
        resolveItem.annotations.forEach((annotation) => {
          if (annotation instanceof Resolve) {
            resolveItem['$inject'] = annotation.inject;
            state.resolve[prop] = resolveItem;
          }
        });
      }
    }
  }

  instantiate(module, dependencyList) {
    var injector = this;
    module.config(function($stateProvider) {
      dependencyList.forEach((dependencyObject) => {
        var metadata = dependencyObject.metadata;
        var StateClass = dependencyObject.dependency;
        var state = new StateClass();
        injector.annotateResolves(state);
        $stateProvider.state(
          metadata.stateName,
          state
        );
      });
    })
  }
}

registerInjector('state', StateInjector);
```

That code works -- I've used it in my own projects for making ui-router easy to use. The best part is then you can create base states with common resolves and the extend them for your individual states.


#### What's included?

The /dist folder contains to sub folders: /es5 and /es6
/es6 is essentially the source ES6 files, so that you can transpile/include them 

#### Wait a second, I thought AtScript was called TypeScript now

It is. I've thought about renaming this T1000TypeScript... but I don't know who's using this.

# That's It. Enjoy
