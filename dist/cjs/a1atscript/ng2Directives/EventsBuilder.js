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

var prefix = "___bindable___";

var EventsBuilder = (function (_BindBuilder) {
  function EventsBuilder() {
    _classCallCheck(this, EventsBuilder);

    if (_BindBuilder != null) {
      _BindBuilder.apply(this, arguments);
    }
  }

  _inherits(EventsBuilder, _BindBuilder);

  _createClass(EventsBuilder, [{
    key: "setupProperty",
    value: function setupProperty(key, events) {
      events[key] = "=?on" + this._bindObj[key][0].toUpperCase() + this._bindObj[key].slice(1);
    }
  }]);

  return EventsBuilder;
})(_BindBuilderJs2["default"]);

exports["default"] = EventsBuilder;
module.exports = exports["default"];