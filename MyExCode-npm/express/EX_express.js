let express = require('express');
let app = express();

// 路由
app.get('/', function (req, res) {
  res.send('Hello World');
})


// 伺服器設定
let server = app.listen(8081, function () {

  let host = server.address().address
  let port = server.address().port

  console.log("範例:http://%s:%s", host, port)

})