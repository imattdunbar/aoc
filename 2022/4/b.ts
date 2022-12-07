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

	let firstArray: number[] = [];
	for (let i = lowerFirst; i < upperFirst + 1; i++) {
		firstArray.push(i);
	}

	let secondArray: number[] = [];
	for (let i = lowerSecond; i < upperSecond + 1; i++) {
		secondArray.push(i);
	}

	let firstContainsSecond = false;
	firstArray.forEach((f) => {
		if (secondArray.includes(f)) {
			firstContainsSecond = true;
		}
	});

	let secondContainsFirst = false;
	if (!firstContainsSecond) {
		secondArray.forEach((s) => {
			if (firstArray.includes(s)) {
				secondContainsFirst = true;
			}
		});
	}

	if (firstContainsSecond || secondContainsFirst) {
		rangeContained += 1;
	}
});

console.log('Pair range contained:', rangeContained);
