import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.join(__dirname, '/input.txt'), 'utf-8');

const rucksacks = input.split('\n');

const findMatch = (s1: string, s2: string): string => {
	const s1A = s1.split('');
	const s2A = s2.split('');

	let match = '';

	s1A.forEach((str) => {
		if (s2A.includes(str)) {
			match = str;
		}
	});

	return match;
};

const isUppercase = (str: string): boolean => {
	return str === str.toUpperCase();
};

const findValue = (str: string): number => {
	let value = 0;
	if (isUppercase(str)) {
		// 65 - 90 = A-Z ASCII
		value = str.charCodeAt(0) - 65;
		value += 26;
	} else {
		// 97 - 122 = a-z ASCII
		value = str.charCodeAt(0) - 97;
	}

	// +1 to match 1-26 or 27-52
	value += 1;

	return value;
};

let priorityTotal = 0;

rucksacks.forEach((rucksack) => {
	const middle = rucksack.length / 2;
	const sack1 = rucksack.substring(0, middle);
	const sack2 = rucksack.substring(middle);

	const match = findMatch(sack1, sack2);
	priorityTotal += findValue(match);
});

console.log('Priority Total:', priorityTotal);
