import fs from 'fs';
import path from 'path';

const input = fs
	.readFileSync(path.join(__dirname, '/input.txt'), 'utf-8')
	.split('\n');

let stacks = [
	['W', 'L', 'S'],
	['Q', 'N', 'T', 'J'],
	['J', 'F', 'H', 'C', 'S'],
	['B', 'G', 'N', 'W', 'M', 'R', 'T'],
	['B', 'Q', 'H', 'D', 'S', 'L', 'R', 'T'],
	['L', 'R', 'H', 'F', 'V', 'B', 'J', 'M'],
	['M', 'J', 'N', 'R', 'W', 'D'],
	['J', 'D', 'N', 'H', 'F', 'T', 'Z', 'B'],
	['T', 'F', 'B', 'N', 'Q', 'L', 'H'],
];

type Move = {
	amount: number;
	origin: number;
	destination: number;
};

input.forEach((line, index) => {
	if (index >= 10) {
		let str = line.split(' ');

		const move: Move = {
			origin: parseInt(str[3]) - 1,
			amount: parseInt(str[1]),
			destination: parseInt(str[5]) - 1,
		};

		let o = stacks[move.origin];
		let d = stacks[move.destination];

		const toDest = o.splice(0, move.amount);
		const newD = toDest.concat(d);

		stacks[move.origin] = o;
		stacks[move.destination] = newD;
	}
});

const result = stacks
	.map((stack) => {
		return stack[0];
	})
	.join('');

console.log('Result', result);
