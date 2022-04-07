const http = require('http')
const port = process.env.PORT || 3000

// 創建伺服器
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  res.end('Hello World')
})

// 使用listen綁定port
server.listen(
  port,
  () => console.log(`server started on port ${port}; ` + 'press Ctrl-C to terminate...')
)