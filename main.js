const core = require('@actions/core');
const exec = require('@actions/exec');

const options = {};
options.cwd = '/tmp/';

const version = core.getInput('version');

exec.exec('curl', [
  '-L',
  '-o /tmp/kubeval-linux-amd64.tar.gz',
  `https://github.com/instrumenta/kubeval/releases/download/${payload}/kubeval-linux-amd64.tar.gz`
], options);
exec.exec('tar', ['xf', 'kubeval-linux-amd64.tar.gz']);
exec.exec('sudo', ['cp', 'kubeval', '/usr/local/bin']);
exec.exec('rm', ['kubeval', 'kubeval-linux-amd64.tar.gz']);
