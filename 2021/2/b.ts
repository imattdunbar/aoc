import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.join(__dirname, '/input.txt'), 'utf-8');

const commands = input.split('\n');

let horizontal = 0;
let depth = 0;
let aim = 0;

commands.forEach((command) => {
	const [direction, units] = command.split(' ');
	const unitValue = parseInt(units);

	switch (direction) {
		case 'forward':
			horizontal += unitValue;
			depth += aim * unitValue;
			break;
		case 'down':
			aim += unitValue;
			break;
		case 'up':
			aim -= unitValue;
			break;
	}
});

console.log(`Horizontal Position: ${horizontal}, Depth: ${depth}, Aim: ${aim}`);
console.log('Final result:', horizontal * depth);
