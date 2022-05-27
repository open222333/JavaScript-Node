function get_homedir() {
  /**
   * 取得工作資料夾
   */
  let path = require('os').homedir()
  return path
}

module.exports = {
  get_homedir: function () {
    return require('os').homedir()
  }
}