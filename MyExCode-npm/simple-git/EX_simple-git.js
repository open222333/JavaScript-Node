const simpleGit = require('simple-git');
// 要寫進函式內
const git = simpleGit('/Users/4ge0/Desktop/test_js_tool/test2');

async function get_remote(git, remote) {
  let remote_arr = await git.getRemotes();
  if (typeof remote_arr !== 'object') {
    throw new Error('directory is not project');
  }
  let is_exist = false;
  for (var i = 0; i < remote_arr.length; i++) {
    if (remote_arr[i].name === remote) {
      is_exist = true;
    }
  }
  return is_exist;
}

async function check_remote(git) {
  let message = await git.remote(['-v']);
  let remote_url = message.slice(0, -1).split("\n")[0].split("\t")[1].slice(0, -8);
  console.log(remote_url);
  return remote_url;
}

async function remove_remote(git, name) {
  let message = await git.removeRemote(name);
  console.log(message);
}

async function add_remote(git, name, repo) {
  let message = await git.addRemote(name, repo);
  console.log(message);
}

async function do_fetch(git) {
  let message = await git.fetch(["--all"]);
  console.log(message);
}

async function do_reset(git, mode, branch) {
  let message = await git.reset(mode, branch);
  console.log(message);
}

async function do_commit(git, filename, commit_msg) {
  let status = await git.status();
  console.log(status);
  let is_commit = status.files.length;
  console.log(is_commit);
  if (is_commit) {
    await git.add(filename);
    let message = await git.commit(commit_msg);
    console.log(message);
  }
}

async function do_push(git, remote, branch) {
  let message = await git.push(remote, branch);
  console.log(message);
}

// let a = test_path.diff();
// console.log(a);
do_commit(git, '.', 'ddddd')