0.4.5 / 2015-10-18
==================
* Add applyAnnotation function to maintain compatibility between Babel / Traceur

0.4.4 / 2015-07-08
==================
* BREAKING - removed ES6 files from the dist directory -- no need for double copies.
* BREAKING - removed amd build in favor of webpack global
* [Fix] support appInjector property instead of injectables on Component
* [Fix] support array notation for properties and events on Component

0.4.3 / 2015-07-07
==================
* [Fix] Bad export in a1atscript.js

0.4.2 / 2015-07-07
==================
* [Fix] Bad import in ComponentMapper

0.4.1 / 2015-07-03
==================
* [Feature] Add component hooks to component injector

0.4.0 / 2015-07-01
==================
* [Fix] Multiple instances of components can use different bind types
* [Fix] Make symbol exports explicit
* [Fix] Make ngNewRouter not a dependency even if you have routeConfigs

0.3.9 / 2015-06-25
==================
* [Fix] Component property getters

0.3.8 / 2015-06-19
==================
* [Fix] Error with using bind-attr and attr at once from Tim Kindberg

0.3.7 / 2015-05-20
==================
* Add a CJS distribution for JSPM

0.3.6 / 2015-05-08
==================
* Add events to components

0.3.5 / 2015-05-07
==================
* Fixed a bug in route initialization

0.3.2 / 2015-05-06
==================
* Minor fixes

0.3.0 / 2015-05-05
==================
* Add support for the new Angular Router!

0.2.5 / 2015-04-30
==================
* Set properties enumerable when they get an annotation

0.2.4 / 2015-04-30
==================
* [Fix] Make ToAnnotation work on a class/object property

0.2.3 / 2015-04-30
==================
* Make ToAnnotation work on a class/object property

0.2.2 / 2015-04-29
==================
* Make ToAnnotation a non default export so it can be used externally

0.2.1 / 2015-04-28
==================

* Feature: Works with Babel.js and ESNext compilers that support ES7 decorator spec
* Updated syntax for Components to latest Angular 2 names
* directive selectors can now be written dasherized like an HTML selector

0.2.0 / 2015-02-17
==================
  * FEATURE: Components. Define Angular Components using an Angular 2 like syntax
  * FEATURE: abbreviated form of calling the injector by just calling bootstrap
  * FEATURE: include transpiled AMD version of library

0.1.4 / 2015-02-17
==================
  * BREAKING: Updated to the latest version of Traceur. This changes the way relative file imports are done. See [https://github.com/google/traceur-compiler/issues/1221](https://github.com/google/traceur-compiler/issues/1221) -- you can no longer use an implied .js extension on relative imports. If you have used the implied .js extension you may have to update
