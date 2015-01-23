*WARNING: AtScript is very new technology. Be ready to encounter lots of challenges if you incorporate this in a production project.*

## A-1 AtScript

This is a package that uses AtScript annotations to provide syntactic sugar around Angular 1.x's Dependency Injection mechanism. It is designed to be a "bridge" to Angular 2.0  -- so you can get a flavor of the way we'll be writing Angular 2.0 code tomorrow, today.

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
import {Injector, Module} from 'bower_components/dist/a1atscript';
import { MyModule } from './myModule'

var AppModule = Module('AppModule', [
  MyModule
]);

// The string passed in is prefixed to then names 
// of all of the modules when they are instantiated with
// Angular
var injector = new Injector("myAppPrefix");
injector.instantiate(AppModule);
```

### Spice It Up: Write Your Own Injectors

One of the things that has always annoyed me about ui-router is you write your states into a config block. Wouldn't it be nice if you could do something like this:

```javascript
@State('root.main.inner')
class RootMainInnerState {
  constructor() {
    this.template = 'awesome/awesome.html'
    this.controller = 'AwesomeController'
  }

  get resolve() {
  	return {
  		@Resolve('Backend')
  		model: function(Backend) {
  		}
  		@Resolve('AuthService')
  		user: function(AuthService) {
  		}
  	}
  }
}
```

Well the good news is you could potentially do that. Just define an Annotation and an Injector

```javascript
import {registerInjector} from 'bower_components/dist/a1atscript'

class State {
   constructor(stateName) {
     this.stateName = stateName;
   }
}

// An Injector must define an annotationClass getter and an instantiate method
class StateInjector {
  get annotationClass() {
    return State;
  }

  instantiate(module, dependencyList) {
    module.config(function($stateProvider) {
	    dependencyList.forEach((dependencyObject) => {
	      var metadata = dependencyObject.metadata;
	      var StateClass = dependencyObject.dependency;
	      $stateProvider.state(
	        metadata.stateName,
	        new StateClass()
	      );
	    });
    })
  }
}

registerInjector('state', StateInjector);
```

That's just a first pass -- I don't know if it would work but the possibilities for custom Injectors are somewhat endless.

#### Why isn't everything packaged into one file?

Google 'es6 module packaging'. I didn't want to transpile this down right away, because I don't know what you're compiling your ES6 code down to (System.js, AMD, CommonJS), so I just left the distributed code in native ES6 format. Unfortunately, there isn't a lot of clear information on the best way to concatenate a bunch of ES6 files down to a single file, so I'm leaving it as is for now.

# That's It. Enjoy
