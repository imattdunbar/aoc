import { exec } from 'child_process';

const tsFile = '4/a.ts';
const command = `node_modules/.bin/ts-node ${tsFile}`;

exec(command, (error, stdout, stderr) => {
	console.log(stdout);
});
