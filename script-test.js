const shell = require('shelljs');

const resultado = shell.exec('git diff --name-only branch-scripts-tests..main');

console.log(resultado.stdout.split('\n'));