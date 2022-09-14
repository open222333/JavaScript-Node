function getArgs() {
  // 取得參數
  const args = {};
  process.argv
    .slice(2, process.argv.length)
    .forEach(arg => {
      // long arg
      if (arg.slice(0, 2) === '--') {
        const longArg = arg.split('=');
        const longArgFlag = longArg[0].slice(2, longArg[0].length);
        const longArgValue = longArg.length > 1 ? longArg[1] : true;
        console.log(longArg);
        console.log(longArgFlag);
        console.log(longArgValue);
        args[longArgFlag] = longArgValue;
      }
      // flags
      else if (arg[0] === '-') {
        const flags = arg.slice(1, arg.length).split('');
        flags.forEach(flag => {
          args[flag] = true;
        });
      }
    });
  return args;
}

const args = getArgs();
console.log(args);

let api = {};
if (args.api_json) {
  api = require(args.api_json);
  console.log(api.email);
  console.log(api.key);
} else {
  console.error('need --api_json arguments');
  return;
}