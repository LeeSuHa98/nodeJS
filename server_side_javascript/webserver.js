const http = require('http'); // nodeJS가 제공하는 'http'라는 모듈을 필요로 한다. return 값을 http(상수)에 담는다.
//한번 담기면 값을 변경할 수 없기 때문에 상수이며 따라서 const를 사용한다.

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
