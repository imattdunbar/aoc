export type Game = {
	id: number;
	parts: GamePart[];
};

export type GamePart = {
	red: number;
	green: number;
	blue: number;
};

export function getGames(input: string): Game[] {
	return input.split('\n').map((line) => {
		const colonSplit = line.split(': ');
		const id = parseInt(colonSplit[0].replace('Game ', ''));

		const semiSplit = colonSplit[1].split('; ');

		const commaSplits = semiSplit.map((str) => str.split(', '));

		let game: Game = {
			id,
			parts: [],
		};

		commaSplits.forEach((part) => {
			let gp: GamePart = { red: 0, green: 0, blue: 0 };

			part.forEach((subpart) => {
				const split = subpart.split(' ');

				const count = parseInt(split[0]);
				const color = split[1];
				switch (color) {
					case 'red':
						gp.red = count;
						break;
					case 'green':
						gp.green = count;
						break;
					case 'blue':
						gp.blue = count;
						break;
				}
			});

			game.parts.push(gp);
		});

		return game;
	});
}
