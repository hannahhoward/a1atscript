var prefix = "___bindable___"

export default class PropertiesBuilder {
  constructor(propertiesObj, component) {
    this._propertiesObj = propertiesObj;
    this._component = component;
  }

  setupProperty(key) {
    Object.defineProperty(this._component.prototype, prefix+key, {
      enumerable: true,
      configurable: true,
      set: function(value) {
        this[key] = value;
      }
    });
  }

  build() {
    var properties = {};
    Object.keys(this._propertiesObj).forEach((key) => {
      properties[key] = "@"+this._propertiesObj[key];
      properties[prefix+key] = "=?bind"+this._propertiesObj[key][0].toUpperCase() + this._propertiesObj[key].slice(1);
      this.setupProperty(key);
    });
    return properties;
  }
}
