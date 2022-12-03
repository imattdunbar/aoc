import fs from 'fs';

const input = fs.readFileSync('2022/2/input.txt', 'utf-8');

const split = input.split('\n');

const games = split.map((s) => s.split(' ').join(''));

let score = 0;

// A = Rock - 1
// B = Paper - 2
// C = Scissors - 3

// X = Lose +0
// Y = Draw +3
// Z = Win +6

games.forEach((game) => {
	switch (game) {
		case 'AX':
			score += 3;
			break;
		case 'AY':
			score += 4;
			break;
		case 'AZ':
			score += 8;
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
			score += 2;
			break;
		case 'CY':
			score += 6;
			break;
		case 'CZ':
			score += 7;
			break;
	}
});

console.log('Final Score:', score);
