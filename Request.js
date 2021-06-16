const HTTP_VERSION = "HTTP/1.1";

module.exports = class Request {
  constructor(options) {
    this.options = options;
  }

  toString() {
    const { method, path, host } = this.options;
    return `${method} ${path} ${HTTP_VERSION}\r
Host: ${host}\r
${this.getHeadersContent()}
\r
name=cxr\r\n`;
  }

  getHeadersContent() {
    const { headers } = this.options;
    // 先直接遍历 map
    const result = Object.keys(headers.map).reduce((content, key) => {
      const val = headers.map[key];
      content += `${key}: ${val}\r\n`;
      return content;
    }, "");

    return result.slice(0, -1);
  }
};
