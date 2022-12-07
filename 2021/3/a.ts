import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.join(__dirname, '/input.txt'), 'utf-8');

const entries = input.split('\n');
const bitLength = entries[0].length;

const gamma: number[] = [];
const epsilon: number[] = [];

for (let i = 0; i < bitLength; i++) {
	const oneCount = entries.filter((entry) => {
		const n = parseInt(entry[i]);
		return n === 1;
	}).length;

	const zeroCount = entries.filter((entry) => {
		const n = parseInt(entry[i]);
		return n === 0;
	}).length;

	if (oneCount > zeroCount) {
		gamma.push(1);
		epsilon.push(0);
	} else {
		gamma.push(0);
		epsilon.push(1);
	}
}

const gammaValue = parseInt(gamma.join(''), 2);
const epsilonValue = parseInt(epsilon.join(''), 2);

console.log('Consumption:', gammaValue * epsilonValue);
