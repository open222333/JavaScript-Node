const request = require('request');

function send_alarm(message) {
  // 傳送tg訊息
  let request_url = api_url + token + "/sendMessage";
  let options = {
    url: request_url,
    timeout: 30000,
    json: {
      chat_id: chat_id,
      text: message
    }
  }

  request.post(options, (error, res, body) => {
    if (error) {
      console.error(error)
      return
    }
    console.log(res.statusCode)
    console.log(body)
  })
}