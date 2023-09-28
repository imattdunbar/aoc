import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.join(__dirname, '/input.txt'), 'utf-8');

const measurements = input.split('\n');

let timesIncreased = 0;

measurements.forEach((m, index) => {
	if (index !== 0) {
		const current = parseInt(m);
		const last = parseInt(measurements[index - 1]);

		if (current > last) {
			timesIncreased += 1;
		}
	}
});

console.log('Times increased:', timesIncreased);
