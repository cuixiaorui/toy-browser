const Headers = require("../src/Headers");
describe("Headers", () => {
  describe("get", () => {
    it("get", () => {
      const headers = new Headers();
      headers.append("Content-Type", "text/html");
      expect(headers.get("Content-Type")).toBe("text/html");
    });

    it("get 支持大小写", () => {
      const headers = new Headers();
      headers.append("Content-Type", "text/html");
      expect(headers.get("Content-Type")).toBe("text/html");
      expect(headers.get("content-type")).toBe("text/html");
    });
  });

  it("可以自行计算 content-length", () => {
    const headers = new Headers();
    headers.append("Content-Type", "text/html");
    expect(headers.get("Content-Type")).toBe("text/html");
    expect(headers.get("Content-Length")).toBe(9);
  });
});
