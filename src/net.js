const net = require("net");
const Request = require("./Request");
const Headers = require("./Headers");
const parseResponse = require("./parseResponse");
const client = net.createConnection({ port: 8081 }, () => {
  // 'connect' 监听器
  console.log("已连接到服务器");

  const headers = new Headers();
  headers.append("Content-Type", "application/x-www-form-urlencoded");
  let request = new Request({
    method: "POST",
    host: "127.0.0.1",
    port: 8081,
    path: "/",
    headers,
    body: {
      name: "cxr",
    },
  });

  client.write(request.toString());
  //   client.write(`POST / HTTP/1.1\r
  // Host: 127.0.0.1\r
  // content-type: application/x-www-form-urlencoded\r
  // content-length: 33\r
  // \r
  // name=cxr\r\n`)
});

const { receive, finish } = parseResponse();

client.on("data", (data) => {
  console.log(data.toString());
  receive(data.toString());
  client.end();
});
client.on("end", () => {
  console.log(finish());
  console.log("已从服务器断开");
});
