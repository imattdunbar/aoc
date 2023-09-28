import { exec } from 'child_process';
import minimist from 'minimist';
import fs from 'fs';

const argv = process.argv.slice(2);
const args = minimist(argv);

const year = args.year;
const question = args.question;
const part = args.part;

const tsFile = `${year}/${question}/${part}.ts`;
const command = `bun run ${tsFile}`;

if (fs.existsSync(tsFile)) {
	exec(command, (error, stdout, stderr) => {
		console.log(stdout);
	});
} else {
	console.log('Invalid problem or arguments.');
}
