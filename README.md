[![Code Climate](https://codeclimate.com/github/hannahhoward/a1atscript/badges/gpa.svg)](https://codeclimate.com/github/hannahhoward/a1atscript) [![Build Status](https://travis-ci.org/hannahhoward/a1atscript.svg?branch=master)](https://travis-ci.org/hannahhoward/a1atscript)

# A-1 AtScript

This is a package that uses annotations to provide syntactic sugar around Angular 1.x's Dependency Injection mechanism. It is designed to be a "bridge" to Angular 2.0  -- to get you as close as possible to writing Angular 2.0 like code in Angular 1.x. More features will be added as Angular 2.0's feature set becomes more clear.

## Initial setup

> You must be building your Angular 1.x with an ES Next transpiler. The system has been tested with both Babel.js and Traceur. See "Using a transpiler other than Traceur" for important caveats if you are not using Traceur. Check for tutorials on the internet for how to setup a JS build system that incorporates ES6.

#### Install the module

```bash
bower install a1atscript --save
```

or

```bash
npm install a1atscript
```

#### Angular Type Annotations

```javascript
import {Controller, Service} from 'bower_components/dist/a1atscript.js';
// or appropriate path for your project

@Controller('ExampleController', ['$scope', 'SomeService'])
export class ExampleController {
  constructor($scope, SomeService) {
  }
}

@Service('ExampleService', ['SomeService'])
export class ExampleService {
	constructor(SomeService) {
	}
}
```

#### Setting up modules


```javascript
import {Module} from 'bower_components/dist/a1atscript.js';
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
@AsModule('ServiceModule')
@Service('ExampleService')
class ExampleService {
  constructor() {
    this.value = 'Test Value';
  }
}
```

#### Compile your main app module

```javascript
import {bootstrap, Module} from 'bower_components/dist/a1atscript.js';
import { MyModule } from './myModule'

var AppModule = Module('AppModule', [
  MyModule
]);

// The string passed in is prefixed to then names
// of all of the modules when they are instantiated with
// Angular
bootstrap(AppModule, "myAppPrefix");
```

## Get ready for Angular 2!

Angular 2 introduces an entirely new syntax for working with directives. The most common type of directive is a Component. The good news is with A1AtScript you can write components right now, using a syntax remarkably similar to Angular 2.

```javascript
@Component({
  selector: "awesome",
  properties: {
    apple: "apple"
  },
  injectables: ["ExampleService"]
})
@View({
  templateUrl: "awesome.tpl.html"
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

```html
<awesome apple="stringLiteral"></awesome>
<awesome bind-apple="expression"></awesome>
```

### Routeable Components

You can take your Angular 2 prep a step further by using A1AtScript with the new Angular router, using routable component syntax from Angular 2.

make sure to install the new router:

```
npm install angular-new-router
```

Then you can build an amazing route aware app using a super simple syntax like this:

app.js:

```javascript
@Component({})
@View({
  template: "<p>Sub</p>"
})
class SubComponent {

}

@Component({})
@View({
  template: "<p>Home</p><ng-viewport></ng-viewport>"
})
@RouteConfig({
  path: "/sub", component: SubComponent
})
class HomeComponent {
}

// the AsModule annotation is an extra need to setup Angular's module system on the top level component for now
@AsModule('AppModule', ['templates', 'ngNewRouter', HomeComponent, SubComponent])
@Component({
  selector: "awesome"
})
@View({
  templateUrl: "app.tpl.html"
})
@RouteConfig({
  path: "/home", component: HomeComponent
})
class AppComponent {
}

bootstrap(AppComponent)
```

app.tpl.html:
```html
<ng-outlet><ng-outlet>
```

index.html:
```html
<body>
   <awesome></awesome>
<body>
```

navigate to /home/sub would yield:
```html
<body>
	<awesome>
		<ng-outlet>
			<p>Home</p>
			<ng-outlet>
				<p>Sub</p>
			</ng-outlet>
		</ng-outlet>
	</awesome>
<body>
```

That's what Angular 2 routing is likely to look like -- except you can use this today!

### Notes:

functionally the initial component declaration above is equivalent to:

```javascript
angular.directive('awesome', function() {
  return {
  	restrict: 'E',
  	bindToController: {
  	  apple: "@apple"
  	  // a setter is created automatically on your
  	  // controller so that your controller can access this.apple
  	  ___bindable___apple: "=?bindApple"
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

The syntax is supported in a Angular 1.3+ (in 1.3 it will set bindToController to true, and set properties on scope, because bindToController object syntax is 1.4 only). If angular 1.x adopts a built-in component feature (see [https://github.com/angular/angular.js/issues/10007](https://github.com/angular/angular.js/issues/10007)) then this module will be updated to use that feature when it is available.

Other features:

1. Selector is a very, very basic css selector. If you pass '[awesome]', your directive will be called awesome and it'll be set restrict: 'A', and if you pass '.awesome' it'll be set restrict: 'C'
2. What about properties? Well, rather than force you to use Angular 1's bizarre character syntax, we try to emulate Angular 2's behavior. if you call your directive with a plain old attribute, it's just interpreted as a string literal. If you call it with a bind- prefix, it gets passed the value of the expression. Sorry, no [] abbreviated syntax here -- Angular 1.x doesn't let you specify scope properties that have [] characters in them
2. Services is optional for injecting dependencies into your component class
3. Class inheritance does work with components, but you'll need to define annotations on the child class
4. Component supports somes Angular1 customizations. You can specify a require or transclude property. You can also specify a custom controllerAs value.
5. Template annotation supports simply "url" for templateUrls and 'inline' for inline templates

Angular 2's Directive will be supported in a future release. I'm still examining the best way to port this to Angular 1.x and maintain a similar feature set and syntax to 2.0.

## Wrapping up

#### More Info

Check out the [Wiki](https://github.com/hannahhoward/a1atscript/wiki) for more specialized topics.

#### What's included?

The /dist folder contains the es6 source files so that you can package up A1AtScript using whatever packaging system is most comfortable for you. However, if you are using a workflow that uses AMD modules, you can also use a1atscript.es5.js -- which has all of the code transpiled to ES5 as an AMD module.


### Wait a second, I thought AtScript was called TypeScript now

A new name is coming as soon as I get big enough to be able to lose what little brand recognition I have.

# That's It. Enjoy
