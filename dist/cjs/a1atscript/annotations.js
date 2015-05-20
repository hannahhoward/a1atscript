'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ToAnnotationJs = require('./ToAnnotation.js');

var NgAnnotation = function NgAnnotation() {
  for (var _len = arguments.length, dependencies = Array(_len), _key = 0; _key < _len; _key++) {
    dependencies[_key] = arguments[_key];
  }

  _classCallCheck(this, NgAnnotation);

  this.dependencies = dependencies;
};

var NgNamedAnnotation = function NgNamedAnnotation(token) {
  var dependencies = arguments[1] === undefined ? [] : arguments[1];

  _classCallCheck(this, NgNamedAnnotation);

  this.dependencies = dependencies;
  this.token = token;
};

var Config = (function (_NgAnnotation) {
  function Config() {
    _classCallCheck(this, _Config);

    if (_NgAnnotation != null) {
      _NgAnnotation.apply(this, arguments);
    }
  }

  _inherits(Config, _NgAnnotation);

  var _Config = Config;
  Config = (0, _ToAnnotationJs.ToAnnotation)(Config) || Config;
  return Config;
})(NgAnnotation);

exports.Config = Config;

var Run = (function (_NgAnnotation2) {
  function Run() {
    _classCallCheck(this, _Run);

    if (_NgAnnotation2 != null) {
      _NgAnnotation2.apply(this, arguments);
    }
  }

  _inherits(Run, _NgAnnotation2);

  var _Run = Run;
  Run = (0, _ToAnnotationJs.ToAnnotation)(Run) || Run;
  return Run;
})(NgAnnotation);

exports.Run = Run;

var Controller = (function (_NgNamedAnnotation) {
  function Controller() {
    _classCallCheck(this, _Controller);

    if (_NgNamedAnnotation != null) {
      _NgNamedAnnotation.apply(this, arguments);
    }
  }

  _inherits(Controller, _NgNamedAnnotation);

  var _Controller = Controller;
  Controller = (0, _ToAnnotationJs.ToAnnotation)(Controller) || Controller;
  return Controller;
})(NgNamedAnnotation);

exports.Controller = Controller;

var Directive = (function (_NgNamedAnnotation2) {
  function Directive() {
    _classCallCheck(this, _Directive);

    if (_NgNamedAnnotation2 != null) {
      _NgNamedAnnotation2.apply(this, arguments);
    }
  }

  _inherits(Directive, _NgNamedAnnotation2);

  var _Directive = Directive;
  Directive = (0, _ToAnnotationJs.ToAnnotation)(Directive) || Directive;
  return Directive;
})(NgNamedAnnotation);

exports.Directive = Directive;

var Service = (function (_NgNamedAnnotation3) {
  function Service() {
    _classCallCheck(this, _Service);

    if (_NgNamedAnnotation3 != null) {
      _NgNamedAnnotation3.apply(this, arguments);
    }
  }

  _inherits(Service, _NgNamedAnnotation3);

  var _Service = Service;
  Service = (0, _ToAnnotationJs.ToAnnotation)(Service) || Service;
  return Service;
})(NgNamedAnnotation);

exports.Service = Service;

var Factory = (function (_NgNamedAnnotation4) {
  function Factory() {
    _classCallCheck(this, _Factory);

    if (_NgNamedAnnotation4 != null) {
      _NgNamedAnnotation4.apply(this, arguments);
    }
  }

  _inherits(Factory, _NgNamedAnnotation4);

  var _Factory = Factory;
  Factory = (0, _ToAnnotationJs.ToAnnotation)(Factory) || Factory;
  return Factory;
})(NgNamedAnnotation);

exports.Factory = Factory;

var Provider = (function (_NgNamedAnnotation5) {
  function Provider() {
    _classCallCheck(this, _Provider);

    if (_NgNamedAnnotation5 != null) {
      _NgNamedAnnotation5.apply(this, arguments);
    }
  }

  _inherits(Provider, _NgNamedAnnotation5);

  var _Provider = Provider;
  Provider = (0, _ToAnnotationJs.ToAnnotation)(Provider) || Provider;
  return Provider;
})(NgNamedAnnotation);

exports.Provider = Provider;

var Value = (function (_NgNamedAnnotation6) {
  function Value() {
    _classCallCheck(this, _Value);

    if (_NgNamedAnnotation6 != null) {
      _NgNamedAnnotation6.apply(this, arguments);
    }
  }

  _inherits(Value, _NgNamedAnnotation6);

  var _Value = Value;
  Value = (0, _ToAnnotationJs.ToAnnotation)(Value) || Value;
  return Value;
})(NgNamedAnnotation);

exports.Value = Value;

var Constant = (function (_NgNamedAnnotation7) {
  function Constant() {
    _classCallCheck(this, _Constant);

    if (_NgNamedAnnotation7 != null) {
      _NgNamedAnnotation7.apply(this, arguments);
    }
  }

  _inherits(Constant, _NgNamedAnnotation7);

  var _Constant = Constant;
  Constant = (0, _ToAnnotationJs.ToAnnotation)(Constant) || Constant;
  return Constant;
})(NgNamedAnnotation);

exports.Constant = Constant;

var Filter = (function (_NgNamedAnnotation8) {
  function Filter() {
    _classCallCheck(this, _Filter);

    if (_NgNamedAnnotation8 != null) {
      _NgNamedAnnotation8.apply(this, arguments);
    }
  }

  _inherits(Filter, _NgNamedAnnotation8);

  var _Filter = Filter;
  Filter = (0, _ToAnnotationJs.ToAnnotation)(Filter) || Filter;
  return Filter;
})(NgNamedAnnotation);

exports.Filter = Filter;

var Animation = (function (_NgNamedAnnotation9) {
  function Animation() {
    _classCallCheck(this, _Animation);

    if (_NgNamedAnnotation9 != null) {
      _NgNamedAnnotation9.apply(this, arguments);
    }
  }

  _inherits(Animation, _NgNamedAnnotation9);

  var _Animation = Animation;
  Animation = (0, _ToAnnotationJs.ToAnnotation)(Animation) || Animation;
  return Animation;
})(NgNamedAnnotation);

exports.Animation = Animation;

var Module = (function (_NgNamedAnnotation10) {
  function Module() {
    _classCallCheck(this, Module);

    if (_NgNamedAnnotation10 != null) {
      _NgNamedAnnotation10.apply(this, arguments);
    }
  }

  _inherits(Module, _NgNamedAnnotation10);

  return Module;
})(NgNamedAnnotation);

exports.Module = Module;

var AsModule = (function (_Module) {
  function AsModule() {
    _classCallCheck(this, _AsModule);

    if (_Module != null) {
      _Module.apply(this, arguments);
    }
  }

  _inherits(AsModule, _Module);

  var _AsModule = AsModule;
  AsModule = (0, _ToAnnotationJs.ToAnnotation)(AsModule) || AsModule;
  return AsModule;
})(Module);

exports.AsModule = AsModule;