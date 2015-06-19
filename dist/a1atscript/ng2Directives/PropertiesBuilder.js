import BindBuilder from "./BindBuilder.js"

const BIND_PREFIX = "_=_";
const STRING_PREFIX = "_@_";

const USING_DATA_BINDING = 1;
const USING_RAW_STRING = 2;

export default class PropertiesBuilder extends BindBuilder {

  setupProperty(key, properties) {
    let using;

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
      return function(value) {
        if (using === toIgnore) {
          if (value !== undefined) {
            throw new Error(`Cannot use bind-${key} and ${key} simultaneously`);
          }
          return;
        }

        if (value !== undefined) {
          using = toExpect;
        }

        this[key] = value;
      }
    }
  }

}
