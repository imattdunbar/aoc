import fs from 'fs';

const input = fs.readFileSync('2022/1/input.txt', 'utf-8');

const split = input.split('\n');

let counts: number[] = [];

let currentCount = 0;

split.forEach((count) => {
	if (count === '') {
		counts.push(currentCount);
		currentCount = 0;
	} else {
		const num = parseInt(count);
		currentCount += num;
	}
});

counts = counts.sort((n1, n2) => n2 - n1);

const top3 = counts[0] + counts[1] + counts[2];

console.log('Total of top 3 calorie counts:', top3);
