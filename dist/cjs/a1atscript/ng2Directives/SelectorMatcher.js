"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;

var SelectorMatcher = (function () {
  function SelectorMatcher(selector) {
    _classCallCheck(this, SelectorMatcher);

    this._selector = selector;
  }

  _createClass(SelectorMatcher, [{
    key: "_camelizeName",
    value: function _camelizeName() {
      this._name = this._name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
      }).replace(MOZ_HACK_REGEXP, "Moz$1");
    }
  }, {
    key: "_split",
    value: function _split() {
      if (this._selector[0] == ".") {
        this._restrict = "C";
        this._name = this._selector.substring(1);
      } else if (this._selector[0] == "[" && this._selector[this._selector.length - 1] == "]") {
        this._restrict = "A";
        this._name = this._selector.substring(1, this._selector.length - 1);
      } else {
        this._restrict = "E";
        this._name = this._selector;
      }
    }
  }, {
    key: "name",
    get: function () {
      if (!this._name) {
        this._split();
      }
      this._camelizeName();
      return this._name;
    }
  }, {
    key: "restrict",
    get: function () {
      if (!this._restrict) {
        this._split();
      }
      return this._restrict;
    }
  }]);

  return SelectorMatcher;
})();

exports["default"] = SelectorMatcher;
module.exports = exports["default"];