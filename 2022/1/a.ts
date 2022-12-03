import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.join(__dirname, '/input.txt'), 'utf-8');

const split = input.split('\n');

let high = 0;
let currentCount = 0;

split.forEach((count) => {
	if (count === '') {
		currentCount = 0;
	} else {
		const num = parseInt(count);
		currentCount += num;
	}

	if (currentCount > high) {
		high = currentCount;
	}
});

console.log('Highest calorie count:', high);
