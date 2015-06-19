"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _BindBuilderJs = require("./BindBuilder.js");

var _BindBuilderJs2 = _interopRequireDefault(_BindBuilderJs);

var BIND_PREFIX = "_=_";
var STRING_PREFIX = "_@_";

var USING_DATA_BINDING = 1;
var USING_RAW_STRING = 2;

var PropertiesBuilder = (function (_BindBuilder) {
  function PropertiesBuilder() {
    _classCallCheck(this, PropertiesBuilder);

    if (_BindBuilder != null) {
      _BindBuilder.apply(this, arguments);
    }
  }

  _inherits(PropertiesBuilder, _BindBuilder);

  _createClass(PropertiesBuilder, [{
    key: "setupProperty",
    value: function setupProperty(key, properties) {
      var using = undefined;

      properties[STRING_PREFIX + key] = "@" + this._bindObj[key];
      properties[BIND_PREFIX + key] = "=?bind" + this._bindObj[key][0].toUpperCase() + this._bindObj[key].slice(1);

      // This property is used when user uses the `bind-property` attribute on a directive to bind an expression
      Object.defineProperty(this._component.prototype, BIND_PREFIX + key, {
        enumerable: true,
        configurable: true,
        set: genericSetter(USING_RAW_STRING, USING_DATA_BINDING)
      });

      // This property is used when user uses the `property` attribute on a directive to bind a string
      Object.defineProperty(this._component.prototype, STRING_PREFIX + key, {
        enumerable: true,
        configurable: true,
        set: genericSetter(USING_DATA_BINDING, USING_RAW_STRING)
      });

      function genericSetter(toExpect, toIgnore) {
        return function (value) {
          if (using === toIgnore) {
            if (value !== undefined) {
              throw new Error("Cannot use bind-" + key + " and " + key + " simultaneously");
            }
            return;
          }

          if (value !== undefined) {
            using = toExpect;
          }

          this[key] = value;
        };
      }
    }
  }]);

  return PropertiesBuilder;
})(_BindBuilderJs2["default"]);

exports["default"] = PropertiesBuilder;
module.exports = exports["default"];