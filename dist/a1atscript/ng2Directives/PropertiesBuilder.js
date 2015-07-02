import BindBuilder from "./BindBuilder.js"

const BIND_PREFIX = "_=_";
const STRING_PREFIX = "_@_";
const BINDING = BIND_PREFIX;
const RAW_STRING = STRING_PREFIX;

export default class PropertiesBuilder extends BindBuilder {

  setupProperty(key, properties) {
    properties[STRING_PREFIX + key] = "@" + this._bindObj[key];
    properties[BIND_PREFIX + key] = "=?bind" + this._bindObj[key][0].toUpperCase() + this._bindObj[key].slice(1);


    // This property is used when user uses the `bind-property` attribute on a directive to bind an expression
    Object.defineProperty(this._component.prototype, BIND_PREFIX + key, {
      enumerable: true,
      configurable: true,
      set: genericSetter(BINDING, RAW_STRING),
      get: function() {
        return this[key];
      }
    });

    // This property is used when user uses the `property` attribute on a directive to bind a string
    Object.defineProperty(this._component.prototype, STRING_PREFIX + key, {
      enumerable: true,
      configurable: true,
      set: genericSetter(RAW_STRING, BINDING),
      get: function() {
        return this[key];
      }
    });

    function genericSetter(use, errorOn) {
      return function(value) {
        this.__using_binding__ = this.__using_binding__ || {};

        if (this.__using_binding__[key] === errorOn) {
          if (value !== undefined) {
            throw new Error(`Cannot use bind-${key} and ${key} simultaneously`);
          }

          return;
        }

        if (value !== undefined) {
          this.__using_binding__[key] = use;
        }

        this[key] = value;
      };
    }
  }
}
