const net = require("net");
const client = net.createConnection({ port: 8080 }, () => {
  // 'connect' 监听器
  console.log("已连接到服务器");
  
  client.write(
`POST / HTTP/1.1\r
Host: 127.0.0.1\r
Content-Type: application/x-www-form-urlencoded\r
Content-Length: 33\r
\r
name=cxr\r\n`);
});
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});
client.on('end', () => {
  console.log('已从服务器断开');
});
