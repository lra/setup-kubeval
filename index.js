const core = require('@actions/core');
const exec = require('@actions/exec');

const options = {};
options.cwd = '/tmp/';

const version = core.getInput('version');

async function main() {
  try {
    await exec.exec('id');
    await exec.exec('pwd');
    await exec.exec('touch', ['/tmp/glop']);
    await exec.exec('ls', ['-al', '/tmp/']);
    await exec.exec('curl', [
      '-L',
      '-o /tmp/kubeval-linux-amd64.tar.gz',
      `https://github.com/instrumenta/kubeval/releases/download/${version}/kubeval-linux-amd64.tar.gz`
    ], options);
    await exec.exec('tar', ['xf', 'kubeval-linux-amd64.tar.gz']);
    await exec.exec('sudo', ['cp', 'kubeval', '/usr/local/bin']);
    await exec.exec('rm', ['kubeval', 'kubeval-linux-amd64.tar.gz']);
  } catch (error) {
    core.setFailed(error.message)
  }
}

main();
