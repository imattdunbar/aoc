import { getGames } from './util';

const input = await Bun.file(import.meta.dir + '/input.txt').text();

const redLimit = 12;
const greenLimit = 13;
const blueLimit = 14;

let total = 0;
const games = getGames(input);

games.forEach((game) => {
	let possible = true;

	game.parts.forEach((part) => {
		if (possible) {
			possible = !(
				part.red > redLimit ||
				part.blue > blueLimit ||
				part.green > greenLimit
			);
		}
	});

	if (possible) {
		total += game.id;
	}
});

console.log(`Total: ${total}`);
