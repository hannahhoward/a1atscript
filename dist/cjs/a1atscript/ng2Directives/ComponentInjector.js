'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _InjectorJs = require('../Injector.js');

var _ComponentJs = require('./Component.js');

var _injectorTypesJs = require('../injectorTypes.js');

var _Ng2DirectiveDefinitionObjectJs = require('./Ng2DirectiveDefinitionObject.js');

var _Ng2DirectiveDefinitionObjectJs2 = _interopRequireDefault(_Ng2DirectiveDefinitionObjectJs);

var _PropertiesBuilderJs = require('./PropertiesBuilder.js');

var _PropertiesBuilderJs2 = _interopRequireDefault(_PropertiesBuilderJs);

var _EventsBuilderJs = require('./EventsBuilder.js');

var _EventsBuilderJs2 = _interopRequireDefault(_EventsBuilderJs);

var _RouterJs = require('../Router.js');

var ComponentInjector = (function (_ListInjector) {
  function ComponentInjector() {
    _classCallCheck(this, ComponentInjector);

    if (_ListInjector != null) {
      _ListInjector.apply(this, arguments);
    }
  }

  _inherits(ComponentInjector, _ListInjector);

  _createClass(ComponentInjector, [{
    key: 'annotationClass',
    get: function () {
      return _ComponentJs.Component;
    }
  }, {
    key: '_template',
    value: function _template(component) {
      return component.annotations.find(function (annotation) {
        return annotation instanceof _ComponentJs.ViewBase;
      }) || {};
    }
  }, {
    key: 'instantiateOne',
    value: function instantiateOne(module, component, annotation) {
      if (annotation.injectables) {
        component.$inject = annotation.injectables;
      }
      _RouterJs.Router.routeReader.read(component);
      var template = this._template(component);
      var properties = {},
          events = {},
          bind;
      if (annotation.properties) {
        properties = new _PropertiesBuilderJs2['default'](annotation.properties, component).build();
      }
      if (annotation.events) {
        events = new _EventsBuilderJs2['default'](annotation.events, component).build();
      }
      bind = Object.assign({}, properties, events);
      if (bind === {}) bind = null;
      if (annotation.selector) {
        var ddo = new _Ng2DirectiveDefinitionObjectJs2['default'](component, annotation, template, bind);
        module.directive(ddo.name, ddo.factoryFn);
      }
    }
  }]);

  return ComponentInjector;
})(_injectorTypesJs.ListInjector);

(0, _InjectorJs.registerInjector)('component', ComponentInjector);