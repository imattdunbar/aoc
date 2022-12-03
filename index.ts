import { exec } from 'child_process';

const year = '2022';
const tsFile = '4/a.ts';
const command = `node_modules/.bin/ts-node ${year}/${tsFile}`;

exec(command, (error, stdout, stderr) => {
	console.log(stdout);
});
