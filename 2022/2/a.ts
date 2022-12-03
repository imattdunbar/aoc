import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.join(__dirname, '/input.txt'), 'utf-8');

const split = input.split('\n');

const games = split.map((s) => s.split(' ').join(''));

let score = 0;

// A = Rock
// B = Paper
// C = Scissors

// X = Rock - 1
// Y = Paper - 2
// Z = Scissors - 3

// Win - 6
// Draw - 3
// Lose - 0

games.forEach((game) => {
	switch (game) {
		case 'AX':
			score += 4;
			break;
		case 'AY':
			score += 8;
			break;
		case 'AZ':
			score += 3;
			break;
		case 'BX':
			score += 1;
			break;
		case 'BY':
			score += 5;
			break;
		case 'BZ':
			score += 9;
			break;
		case 'CX':
			score += 7;
			break;
		case 'CY':
			score += 2;
			break;
		case 'CZ':
			score += 6;
			break;
	}
});

console.log('Final Score:', score);
