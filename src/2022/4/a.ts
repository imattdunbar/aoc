import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.join(__dirname, '/input.txt'), 'utf-8');

const pairs = input.split('\n');

let rangeContained = 0;

pairs.forEach((p) => {
	const split = p.split(',');

	const first = split[0].split('-');
	const second = split[1].split('-');

	const lowerFirst = parseInt(first[0]);
	const upperFirst = parseInt(first[1]);

	const lowerSecond = parseInt(second[0]);
	const upperSecond = parseInt(second[1]);

	if (lowerFirst <= lowerSecond && upperFirst >= upperSecond) {
		console.log(
			`FIRST contains SECOND - First: ${first} Second: ${second}`
		);
		rangeContained += 1;
	} else if (lowerSecond <= lowerFirst && upperSecond >= upperFirst) {
		console.log(
			`SECOND contains FIRST - First: ${first} Second: ${second}`
		);
		rangeContained += 1;
	}
});

console.log('Pair range contained:', rangeContained);
