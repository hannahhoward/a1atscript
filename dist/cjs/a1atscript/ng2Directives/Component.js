'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Ng2DirectiveJs = require('./Ng2Directive.js');

var _Ng2DirectiveJs2 = _interopRequireDefault(_Ng2DirectiveJs);

var _ToAnnotationJs = require('../ToAnnotation.js');

var Component = (function (_Ng2Directive) {
  function Component(descriptor) {
    _classCallCheck(this, _Component);

    _get(Object.getPrototypeOf(_Component.prototype), 'constructor', this).call(this, descriptor);
    this.injectables = descriptor.injectables || descriptor.services;
  }

  _inherits(Component, _Ng2Directive);

  var _Component = Component;
  Component = (0, _ToAnnotationJs.ToAnnotation)(Component) || Component;
  return Component;
})(_Ng2DirectiveJs2['default']);

exports.Component = Component;

var ViewBase = function ViewBase(descriptor) {
  _classCallCheck(this, ViewBase);

  this.templateUrl = descriptor.templateUrl || descriptor.url;
  this.template = descriptor.template || descriptor.inline;
};

exports.ViewBase = ViewBase;

var Template = (function (_ViewBase) {
  function Template() {
    _classCallCheck(this, _Template);

    if (_ViewBase != null) {
      _ViewBase.apply(this, arguments);
    }
  }

  _inherits(Template, _ViewBase);

  var _Template = Template;
  Template = (0, _ToAnnotationJs.ToAnnotation)(Template) || Template;
  return Template;
})(ViewBase);

exports.Template = Template;

var View = (function (_ViewBase2) {
  function View() {
    _classCallCheck(this, _View);

    if (_ViewBase2 != null) {
      _ViewBase2.apply(this, arguments);
    }
  }

  _inherits(View, _ViewBase2);

  var _View = View;
  View = (0, _ToAnnotationJs.ToAnnotation)(View) || View;
  return View;
})(ViewBase);

exports.View = View;