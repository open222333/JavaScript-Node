const dateformat = require("dateformat"); // ηζ¬ dateformat@3.0.3

function get_now_date(format = 'dddd, mmmm dS, yyyy, h:MM:ss TT') {
  let now = new Date();
  return dateformat(now, format);
}

function get_time() {
  /**
   * 2022/5/25 δΈε11:41:19
   */
  let date = new Date();
  return date.toLocaleString();
}