import minimist from 'minimist';
import fs from 'fs';
import { z } from 'zod';

const argv = process.argv.slice(2);
const args = minimist(argv);

try {
	const year = z.number().parse(args.year);
	const question = z.number().parse(args.question);

	const yearDir = `src/${year}`;
	const questionDir = `${yearDir}/${question}`;
	const fileA = `${questionDir}/a.ts`;
	const fileB = `${questionDir}/b.ts`;
	const fileInput = `${questionDir}/input.txt`;

	if (!fs.existsSync(yearDir)) {
		fs.mkdirSync(yearDir);
	}
	if (!fs.existsSync(questionDir)) {
		fs.mkdirSync(questionDir);
	}

	const code = `const input = await Bun.file(import.meta.dir + '/input.txt').text();`;

	fs.writeFileSync(fileA, code);
	fs.writeFileSync(fileB, code);

	if (!fs.existsSync(fileInput)) {
		fs.writeFileSync(fileInput, '');
	}
} catch (e) {
	console.log(e);
	console.log(`Format for command is "gen --year 2023 --question 1"`);
}
