const dateformat = require("dateformat"); // 版本 dateformat@3.0.3

function get_now_date(format = 'dddd, mmmm dS, yyyy, h:MM:ss TT') {
  let now = new Date();
  return dateformat(now, format);
}