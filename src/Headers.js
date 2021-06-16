module.exports = class Headers {
  constructor() {
    this.map = {};
  }

  append(rawName, val) {
    const name = rawName.toLowerCase();
    this.map[name] = val;

    if (name === "content-type") {
      this.map["content-length"] = this.calculateContentLength();
    }
  }

  calculateContentLength() {
    return this.map["content-type"].length;
  }


  get(name) {
    return this.map[name.toLowerCase()];
  }
};
