export class SelectorMatcher {
  constructor(selector: string) {
    this._selector = selector;
  }

  _split() {
    if (this._selector[0] == ".") {
      this._restrict = "C";
      this._name = this._selector.substring(1);
    } else if (this._selector[0] == "[" &&
      this._selector[this._selector.length-1] == "]") {
      this._restrict = "A";
      this._name = this._selector.substring(1, this._selector.length-1);
    } else {
      this._restrict = "E";
      this._name = this._selector;
    }
  }

  get name() {
    if (!this._name) {
      this._split();
    }
    return this._name;
  }

  get restrict() {
    if (!this._restrict) {
      this._split();
    }
    return this._restrict;
  }

}
