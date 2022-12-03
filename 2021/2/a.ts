import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.join(__dirname, '/input.txt'), 'utf-8');

const commands = input.split('\n');

let horizontal = 0;
let depth = 0;

commands.forEach((command) => {
	const [direction, units] = command.split(' ');
	const unitValue = parseInt(units);

	switch (direction) {
		case 'forward':
			horizontal += unitValue;
			break;
		case 'down':
			depth += unitValue;
			break;
		case 'up':
			depth -= unitValue;
			break;
	}
});

console.log(`Horizontal Position: ${horizontal}, Depth: ${depth}`);
console.log('Final result:', horizontal * depth);
