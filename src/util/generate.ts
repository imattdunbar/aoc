import minimist from 'minimist';
import fs from 'fs';

const argv = process.argv.slice(2);
const args = minimist(argv);

const year = args.year;
const question = args.question;

const yearDir = `src/${year}`;
const questionDir = `${yearDir}/${question}`;
const fileA = `${questionDir}/a.ts`;
const fileB = `${questionDir}/b.ts`;
const fileInput = `${questionDir}/input.txt`;

try {
	if (!fs.existsSync(yearDir)) {
		fs.mkdirSync(yearDir);
	}
	if (!fs.existsSync(questionDir)) {
		fs.mkdirSync(questionDir);
	}

	const code = `const input = await Bun.file(import.meta.path.replace(import.meta.file, 'input.txt')).text();`;

	fs.writeFileSync(fileA, code);
	fs.writeFileSync(fileB, code);
	fs.writeFileSync(fileInput, '');
} catch (e) {
	console.log(e);
}
