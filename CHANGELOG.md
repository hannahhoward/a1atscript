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
