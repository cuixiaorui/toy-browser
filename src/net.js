const net = require("net");
const Request = require("./Request");
const Headers = require("./Headers");
const client = net.createConnection({ port: 8080 }, () => {
  // 'connect' 监听器
  console.log("已连接到服务器");

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

  client.write(request.toString())
});
client.on("data", (data) => {
  console.log(data.toString());
  client.end();
});
client.on("end", () => {
  console.log("已从服务器断开");
});
