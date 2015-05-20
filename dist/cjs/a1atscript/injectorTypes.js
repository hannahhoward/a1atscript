'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _annotationsJs = require('./annotations.js');

var _RouterJs = require('./Router.js');

var ListInjector = (function () {
  function ListInjector() {
    _classCallCheck(this, ListInjector);
  }

  _createClass(ListInjector, [{
    key: 'instantiate',
    value: function instantiate(module, dependencyList) {
      var _this = this;

      dependencyList.forEach(function (dependencyObject) {
        _this.instantiateOne(module, dependencyObject.dependency, dependencyObject.metadata);
      });
    }
  }]);

  return ListInjector;
})();

exports.ListInjector = ListInjector;

var ConfigInjector = (function (_ListInjector) {
  function ConfigInjector() {
    _classCallCheck(this, ConfigInjector);

    if (_ListInjector != null) {
      _ListInjector.apply(this, arguments);
    }
  }

  _inherits(ConfigInjector, _ListInjector);

  _createClass(ConfigInjector, [{
    key: 'annotationClass',
    get: function () {
      return _annotationsJs.Config;
    }
  }, {
    key: 'instantiateOne',
    value: function instantiateOne(module, config, metadata) {
      config['$inject'] = metadata.dependencies;
      module.config(config);
    }
  }]);

  return ConfigInjector;
})(ListInjector);

exports.ConfigInjector = ConfigInjector;

var RunInjector = (function (_ListInjector2) {
  function RunInjector() {
    _classCallCheck(this, RunInjector);

    if (_ListInjector2 != null) {
      _ListInjector2.apply(this, arguments);
    }
  }

  _inherits(RunInjector, _ListInjector2);

  _createClass(RunInjector, [{
    key: 'annotationClass',
    get: function () {
      return _annotationsJs.Run;
    }
  }, {
    key: 'instantiateOne',
    value: function instantiateOne(module, run, metadata) {
      run['$inject'] = metadata.dependencies;
      module.run(run);
    }
  }]);

  return RunInjector;
})(ListInjector);

exports.RunInjector = RunInjector;

var ControllerInjector = (function (_ListInjector3) {
  function ControllerInjector() {
    _classCallCheck(this, ControllerInjector);

    if (_ListInjector3 != null) {
      _ListInjector3.apply(this, arguments);
    }
  }

  _inherits(ControllerInjector, _ListInjector3);

  _createClass(ControllerInjector, [{
    key: 'annotationClass',
    get: function () {
      return _annotationsJs.Controller;
    }
  }, {
    key: 'instantiateOne',
    value: function instantiateOne(module, controller, metadata) {
      controller['$inject'] = metadata.dependencies;
      _RouterJs.Router.routeReader.read(controller);
      module.controller(metadata.token, controller);
    }
  }]);

  return ControllerInjector;
})(ListInjector);

exports.ControllerInjector = ControllerInjector;

var DirectiveInjector = (function (_ListInjector4) {
  function DirectiveInjector() {
    _classCallCheck(this, DirectiveInjector);

    if (_ListInjector4 != null) {
      _ListInjector4.apply(this, arguments);
    }
  }

  _inherits(DirectiveInjector, _ListInjector4);

  _createClass(DirectiveInjector, [{
    key: 'annotationClass',
    get: function () {
      return _annotationsJs.Directive;
    }
  }, {
    key: 'instantiateOne',
    value: function instantiateOne(module, directive, metadata) {
      directive['$inject'] = metadata.dependencies;
      module.directive(metadata.token, directive);
    }
  }]);

  return DirectiveInjector;
})(ListInjector);

exports.DirectiveInjector = DirectiveInjector;

var ServiceInjector = (function (_ListInjector5) {
  function ServiceInjector() {
    _classCallCheck(this, ServiceInjector);

    if (_ListInjector5 != null) {
      _ListInjector5.apply(this, arguments);
    }
  }

  _inherits(ServiceInjector, _ListInjector5);

  _createClass(ServiceInjector, [{
    key: 'annotationClass',
    get: function () {
      return _annotationsJs.Service;
    }
  }, {
    key: 'instantiateOne',
    value: function instantiateOne(module, service, metadata) {
      service['$inject'] = metadata.dependencies;
      module.service(metadata.token, service);
    }
  }]);

  return ServiceInjector;
})(ListInjector);

exports.ServiceInjector = ServiceInjector;

var FactoryInjector = (function (_ListInjector6) {
  function FactoryInjector() {
    _classCallCheck(this, FactoryInjector);

    if (_ListInjector6 != null) {
      _ListInjector6.apply(this, arguments);
    }
  }

  _inherits(FactoryInjector, _ListInjector6);

  _createClass(FactoryInjector, [{
    key: 'annotationClass',
    get: function () {
      return _annotationsJs.Factory;
    }
  }, {
    key: 'instantiateOne',
    value: function instantiateOne(module, factory, metadata) {
      factory['$inject'] = metadata.dependencies;
      module.factory(metadata.token, factory);
    }
  }]);

  return FactoryInjector;
})(ListInjector);

exports.FactoryInjector = FactoryInjector;

var ProviderInjector = (function (_ListInjector7) {
  function ProviderInjector() {
    _classCallCheck(this, ProviderInjector);

    if (_ListInjector7 != null) {
      _ListInjector7.apply(this, arguments);
    }
  }

  _inherits(ProviderInjector, _ListInjector7);

  _createClass(ProviderInjector, [{
    key: 'annotationClass',
    get: function () {
      return _annotationsJs.Provider;
    }
  }, {
    key: 'instantiateOne',
    value: function instantiateOne(module, provider, metadata) {
      provider['$inject'] = metadata.dependencies;
      module.provider(metadata.token, provider);
    }
  }]);

  return ProviderInjector;
})(ListInjector);

exports.ProviderInjector = ProviderInjector;

var ValueInjector = (function (_ListInjector8) {
  function ValueInjector() {
    _classCallCheck(this, ValueInjector);

    if (_ListInjector8 != null) {
      _ListInjector8.apply(this, arguments);
    }
  }

  _inherits(ValueInjector, _ListInjector8);

  _createClass(ValueInjector, [{
    key: 'annotationClass',
    get: function () {
      return _annotationsJs.Value;
    }
  }, {
    key: 'instantiateOne',
    value: function instantiateOne(module, value, metadata) {
      value['$inject'] = metadata.dependencies;
      module.value(metadata.token, value);
    }
  }]);

  return ValueInjector;
})(ListInjector);

exports.ValueInjector = ValueInjector;

var ConstantInjector = (function (_ListInjector9) {
  function ConstantInjector() {
    _classCallCheck(this, ConstantInjector);

    if (_ListInjector9 != null) {
      _ListInjector9.apply(this, arguments);
    }
  }

  _inherits(ConstantInjector, _ListInjector9);

  _createClass(ConstantInjector, [{
    key: 'annotationClass',
    get: function () {
      return _annotationsJs.Constant;
    }
  }, {
    key: 'instantiateOne',
    value: function instantiateOne(module, constant, metadata) {
      constant['$inject'] = metadata.dependencies;
      module.constant(metadata.token, constant);
    }
  }]);

  return ConstantInjector;
})(ListInjector);

exports.ConstantInjector = ConstantInjector;

var AnimationInjector = (function (_ListInjector10) {
  function AnimationInjector() {
    _classCallCheck(this, AnimationInjector);

    if (_ListInjector10 != null) {
      _ListInjector10.apply(this, arguments);
    }
  }

  _inherits(AnimationInjector, _ListInjector10);

  _createClass(AnimationInjector, [{
    key: 'annotationClass',
    get: function () {
      return _annotationsJs.Animation;
    }
  }, {
    key: 'instantiateOne',
    value: function instantiateOne(module, animation, metadata) {
      animation['$inject'] = metadata.dependencies;
      module.animation(metadata.token, animation);
    }
  }]);

  return AnimationInjector;
})(ListInjector);

exports.AnimationInjector = AnimationInjector;

var FilterInjector = (function (_ListInjector11) {
  function FilterInjector() {
    _classCallCheck(this, FilterInjector);

    if (_ListInjector11 != null) {
      _ListInjector11.apply(this, arguments);
    }
  }

  _inherits(FilterInjector, _ListInjector11);

  _createClass(FilterInjector, [{
    key: 'annotationClass',
    get: function () {
      return _annotationsJs.Filter;
    }
  }, {
    key: 'instantiateOne',
    value: function instantiateOne(module, filter, metadata) {
      filter['$inject'] = metadata.dependencies;
      module.filter(metadata.token, filter);
    }
  }]);

  return FilterInjector;
})(ListInjector);

exports.FilterInjector = FilterInjector;