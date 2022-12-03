import fs from 'fs';

const input = fs.readFileSync('3/input.txt', 'utf-8');

const rucksacks: string[] = input.split('\n');

const findMatch = (s1: string, s2: string, s3: string): string => {
	const s1A = s1.split('');
	const s2A = s2.split('');
	const s3A = s3.split('');

	let match = '';

	s1A.forEach((str) => {
		if (s2A.includes(str) && s3A.includes(str)) {
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

let groups: string[][] = [];
while (rucksacks.length > 0) {
	const splice = rucksacks.splice(0, 3);
	groups.push(splice);
}

let priorityTotal = 0;

groups.forEach((group) => {
	const match = findMatch(group[0], group[1], group[2]);
	const value = findValue(match);
	priorityTotal += value;
});

console.log('Priority Total:', priorityTotal);
