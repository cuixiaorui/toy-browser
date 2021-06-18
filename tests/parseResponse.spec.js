const parseResponse = require("../src/parseResponse");
test("hi abc ", () => {
  const str1 = `POST / HTTP/1.1\r
  Host: 127.0.0.1\r
  `;

  const str2 = `content-type: application/x-www-form-urlencoded\r
  content-length: 33\r
  `;

  const { receive, finish } = parseResponse();

  receive(str1);
  receive(str2);

  expect(finish()).toEqual([
    "POST/HTTP/1.1",
    "Host:127.0.0.1",
    "content-type:application/x-www-form-urlencoded",
    "content-length:33",
  ]);
});

test(" finish should can handle data  ", () => {
  const str1 = `POST / HTTP/1.1\r
	Host: 127.0.0.1\r
	`;

  const str2 = `content-type: application/x-www-form-urlencoded\r
	content-length: 33\r
	`;

  const { receive, finish } = parseResponse();

  receive(str1);

  expect(finish(str2)).toEqual([
    "POST/HTTP/1.1",
    "Host:127.0.0.1",
    "content-type:application/x-www-form-urlencoded",
    "content-length:33",
  ]);
});
