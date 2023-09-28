import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.join(__dirname, '/input.txt'), 'utf-8');

const measurements: string[] = input.split('\n');

let timesIncreased = 0;

let totals: number[] = [];

measurements.forEach((m, index) => {
	const total =
		parseInt(measurements[index]) +
		parseInt(measurements[index + 1]) +
		parseInt(measurements[index + 2]);

	if (!isNaN(total)) {
		totals.push(total);
		console.log(total);
	}
});

totals.forEach((t, index) => {
	if (index !== 0) {
		const current = t;
		const last = totals[index - 1];

		if (current > last) {
			timesIncreased += 1;
		}
	}
});

console.log('Times increased:', timesIncreased);
