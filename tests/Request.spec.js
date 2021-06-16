const Request = require("../src/Request.js");
const Headers = require("../src/Headers.js");

describe("Request", () => {
  it("toString", async () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    let request = new Request({
      method: "POST",
      host: "127.0.0.1",
      port: 8088,
      path: "/",
      headers,
      body: {
        name: "cxr",
      },
    });

    const requestStr = request.toString();

    expect(requestStr).toBe(
      `POST / HTTP/1.1\r
Host: 127.0.0.1\r
content-type: application/x-www-form-urlencoded\r
content-length: 33\r
\r
name=cxr\r\n`
    );
  });
});
