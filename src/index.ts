import { exec } from 'child_process';
import minimist from 'minimist';
import fs from 'fs';
import { z } from 'zod';

const argv = process.argv.slice(2);
const args = minimist(argv);

let year = args.year;
let question = args.question;
let part = args.part;

const tsFile = `src/${year}/${question}/${part}.ts`;
const command = `bun run ${tsFile}`;

try {
	year = z.number().parse(year);
	question = z.number().parse(args.question);
	part = z.string().parse(part);
} catch (e) {
	console.log(
		`Format for command is "start --year 2023 --question 1 --part a"`
	);
}

if (fs.existsSync(tsFile)) {
	exec(command, (error, stdout, stderr) => {
		console.log(stdout);
		if (stderr !== '' && error) {
			console.log(stderr);
		}
	});
} else {
	console.log('Invalid problem or arguments.');
}
