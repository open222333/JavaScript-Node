// 取得 api.json 內 cloudflare的信箱跟api key
const api_json = require('./api.json');

// 引用cloudflare套件
let cloudflare = require('cloudflare')({
  email: api_json.email,
  key: api_json.key
});

// 儲存取得的資訊
let zones_info = [];

function getZonesInfo(page_num) {
  /**
   * 取得 cloudflare zone資訊
   * @param {number} page_num - 輸入頁數
   */

  cloudflare.zones.browse({ page: page_num, per_page: 50 }).then(function (res) {
    for (let i = 0; i < res.result.length; i++) {
      let zone = res.result[i];
      // console.log(zone.name);
      zones_info.push(zone);
    }
    if (res.result.length >= 50) {
      // setTimeout(要執行的代碼, 等待的毫秒數)
      setTimeout(() => { getZonesInfo(page_num + 1) }, 1000);
    } else {
      console.log('finished');
      console.log(zones_info.length);
    }
  });
}

getZonesInfo(1);