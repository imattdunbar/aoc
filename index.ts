import { exec } from 'child_process';

const year = '2022';
const tsFile = '5/a.ts';
const command = `bun run ${year}/${tsFile}`;

exec(command, (error, stdout, stderr) => {
	console.log(stdout);
});
