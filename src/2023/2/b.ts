import { getGames } from './util';

const input = await Bun.file(import.meta.dir + '/input.txt').text();

const games = getGames(input);
let total = 0;

games.forEach((game) => {
	let minRed = 0;
	let minGreen = 0;
	let minBlue = 0;

	game.parts.forEach((part) => {
		if (part.red > minRed) {
			minRed = part.red;
		}

		if (part.green > minGreen) {
			minGreen = part.green;
		}

		if (part.blue > minBlue) {
			minBlue = part.blue;
		}
	});

	const power = minRed * minGreen * minBlue;
	total += power;
});

console.log(`Total: ${total}`);
