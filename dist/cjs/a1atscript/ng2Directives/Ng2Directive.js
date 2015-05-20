"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ng2Directive = function Ng2Directive(descriptor) {
  _classCallCheck(this, Ng2Directive);

  this.selector = descriptor.selector;
  this.properties = descriptor.properties || descriptor.bind;
  this.controllerAs = descriptor.controllerAs;
  this.require = descriptor.require;
  this.transclude = descriptor.transclude;
  this.events = descriptor.events;
};

exports["default"] = Ng2Directive;
module.exports = exports["default"];