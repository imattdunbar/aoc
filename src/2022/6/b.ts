import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.join(__dirname, '/input.txt'), 'utf-8');

const chars = input.split('');
for (let i = 13; i < chars.length; i++) {
	const set = new Set(chars.slice(i - 14, i));

	if (set.size === 14) {
		console.log(i);
		break;
	}
}
