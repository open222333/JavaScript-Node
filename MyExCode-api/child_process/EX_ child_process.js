/**
 * 方法	概述
 * spawn	執行命令，預設為不會新建 shell ，執行一個命令，不會回傳結果。
 * exec	建立 shell 並在 shell 中執行命令，可通過 callback 來獲得執行結果。
 * spawn	執行命令，預設為不會新建 shell ，執行一個命令，不會回傳結果。
 * execFile	執行檔案，預設情況下不會新建 shell fork	執行檔案，建立與父執行緒的神秘溝通管道，可以在這之中進行信息的傳送，也不會回傳結果。
 */

const child_process = require('child_process')

function get_hostname() {
  return child_process.execSync('hostname').toString()
}

// module.exports = get_hostname;
module.exports = {
  /**
   * 匯出模組 提供引入
   */
  get_hostname: function () {
    return child_process.execSync('hostname').toString()
  }
}