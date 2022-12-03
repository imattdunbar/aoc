import { exec } from 'child_process';

const year = '2021';
const tsFile = '2/b.ts';
const command = `node_modules/.bin/ts-node ${year}/${tsFile}`;

exec(command, (error, stdout, stderr) => {
	console.log(stdout);
});
