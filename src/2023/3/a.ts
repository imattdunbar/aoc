const input = await Bun.file(import.meta.dir + '/input.txt').text();

const lines = input.split('\n');
const board = lines.map((line) => line.split(''));

type LineNumber = {
	value: number;
	indices: number[];
	neighbors: string[];
	isPart: boolean;
};

function get(x: number, y: number) {
	try {
		return board[y][x];
	} catch {
		return undefined;
	}
}

function getNeighbors(x: number, y: number) {
	return [
		get(x, y - 1), // up
		get(x, y + 1), // down
		get(x - 1, y), // left
		get(x + 1, y), // right
		get(x - 1, y - 1), // upLeft
		get(x + 1, y - 1), // upRight
		get(x - 1, y + 1), // downLeft
		get(x + 1, y + 1), // downRight
	];
}

function isPeriod(char: string): boolean {
	return char.charCodeAt(0) === 46;
}

function isSymbol(char: string): boolean {
	const periodOrNumCodes = [46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
	return !periodOrNumCodes.includes(char.charCodeAt(0));
}

let allLineNumbers: LineNumber[] = [];

lines.forEach((line, boardY) => {
	// console.log(line)
	const lineNoSymbols = line
		.split('')
		.map((char) => {
			if (isSymbol(char)) {
				return '.';
			} else {
				return char;
			}
		})
		.join('');

	const lineNumbers: LineNumber[] = [];

	lineNoSymbols
		.split('.')
		.filter((str) => str !== '')
		.forEach((str) => {
			let ln: LineNumber = {
				value: parseInt(str),
				indices: [],
				neighbors: [],
				isPart: false,
			};

			// console.log(line);
			let index = -1;

			const existing = lineNumbers.find((ex) => ex.value === ln.value);
			if (existing) {
				const lastIndexEx =
					existing.indices[existing.indices.length - 1];
				index = line.indexOf(str, lastIndexEx);
				// console.log(
				// 	`existing num ${
				// 		existing.value
				// 	} on Y ${boardY} so starting at ${
				// 		existing.indices[existing.indices.length - 1]
				// 	} which is char ${
				// 		line[existing.indices[existing.indices.length - 1]]
				// 	}`
				// );
			} else {
				index = line.indexOf(str);
			}

			for (let i = index; i < index + str.length; i++) {
				ln.indices.push(i);

				// @ts-ignore
				const neighbors: string[] = getNeighbors(i, boardY).filter(
					(s) => s !== undefined
				);
				ln.neighbors = ln.neighbors.concat(neighbors);
			}

			// console.log(`${ln.value} ${ln.indices.length}`);

			const symbols = ln.neighbors.filter((s) => isSymbol(s));
			ln.isPart = symbols.length > 0;

			lineNumbers.push(ln);

			// if (existing) {
			// 	console.log(lineNumbers);
			// }
		});

	allLineNumbers = allLineNumbers.concat(lineNumbers);
});

const total = allLineNumbers.reduce((acc, ln) => {
	if (ln.isPart) {
		return acc + ln.value;
	} else {
		return acc;
	}
}, 0);

console.log(`Total: ${total}`);

// Part A - 546312
// Part B - 87449461
