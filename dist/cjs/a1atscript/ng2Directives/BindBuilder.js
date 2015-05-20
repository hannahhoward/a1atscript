"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BindBuilder = (function () {
  function BindBuilder(bindObj, component) {
    _classCallCheck(this, BindBuilder);

    this._bindObj = bindObj;
    this._component = component;
  }

  _createClass(BindBuilder, [{
    key: "build",
    value: function build() {
      var _this = this;

      var properties = {};
      Object.keys(this._bindObj).forEach(function (key) {
        _this.setupProperty(key, properties);
      });
      return properties;
    }
  }]);

  return BindBuilder;
})();

exports["default"] = BindBuilder;
module.exports = exports["default"];