import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.join(__dirname, '/input.txt'), 'utf-8');

console.log('Not solved yet.');

// const entries = input.split('\n');
// const bitLength = entries[0].length;

// for (let i = 0; i < bitLength; i++) {
// 	let keptEntries: string[] = [];

// 	const oneEntries = entries.filter((entry) => {
// 		const n = parseInt(entry[i]);
// 		return n === 1;
// 	});

// 	const zeroEntries = entries.filter((entry) => {
// 		const n = parseInt(entry[i]);
// 		return n === 0;
// 	});

// 	const oneCount = oneEntries.length;
// 	const zeroCount = zeroEntries.length;

// 	if (oneCount > zeroCount) {
// 		console.log(oneEntries);
// 		console.log('one');
// 		keptEntries.concat(oneEntries);
// 	} else {
// 		console.log('zero');
// 		keptEntries.concat(zeroEntries);
// 	}

// 	console.log(keptEntries);
// }
