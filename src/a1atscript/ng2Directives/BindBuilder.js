export default class BindBuilder {
  constructor(bindParam, component) {
    this._bindParam = bindParam;
    this._component = component;
  }

  get bindObj() {
    if (!this._bindObj) {
      if (Array.isArray(this._bindParam)) {
        this._bindObj = {};
        var splitBind;
        this._bindParam.forEach((bind) => {
          splitBind = bind.split(/\s*:\s*/);
          if (splitBind.length == 1) {
            this._bindObj[bind] = bind;
          } else {
            this._bindObj[splitBind[0]] = splitBind[1];
          }
        })
      } else {
        this._bindObj = this._bindParam
      }
    }
    return this._bindObj;
  }

  build() {
    var properties = {};
    Object.keys(this.bindObj).forEach((key) => {
      this.setupProperty(key, properties)
    });
    return properties;
  }
}
