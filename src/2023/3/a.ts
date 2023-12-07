import { z } from 'zod';

const input = await Bun.file(import.meta.dir + '/input.txt').text();

const lines = input.split('\n');
const board = lines.map((line) => line.split(''));

console.log(`I hate this problem, skipping for now`);

// function getBoardCoord(x: number, y: number): string | undefined {
// 	try {
// 		return board[y][x];
// 	} catch (e) {
// 		// Doesn't exist
// 		return undefined;
// 	}
// }

// function removeSymbols(line: string): string {
// 	let result = line;
// 	result = result.replaceAll('%', '.');
// 	result = result.replaceAll('@', '.');
// 	result = result.replaceAll('*', '.');
// 	result = result.replaceAll('$', '.');
// 	result = result.replaceAll('/', '.');
// 	result = result.replaceAll('=', '.');
// 	result = result.replaceAll('+', '.');
// 	result = result.replaceAll('-', '.');
// 	result = result.replaceAll('#', '.');
// 	return result;
// }

// function coordTouchesSymbol(x: number, y: number): boolean {
// 	const up = getBoardCoord(x, y - 1);
// 	const down = getBoardCoord(x, y + 1);
// 	const left = getBoardCoord(x - 1, y);
// 	const right = getBoardCoord(x + 1, y);
// 	const upLeft = getBoardCoord(x - 1, y - 1);
// 	const upRight = getBoardCoord(x + 1, y - 1);
// 	const downLeft = getBoardCoord(x - 1, y + 1);
// 	const downRight = getBoardCoord(x + 1, y + 1);

// 	const all = [up, down, left, right, upLeft, upRight, downLeft, downRight];

// 	const symbols = all.filter((neighbor) => {
// 		if (neighbor) {
// 			const notPeriod = neighbor !== '.';
// 			const notNumber = Number.isNaN(parseInt(neighbor));

// 			return notPeriod && notNumber;
// 		} else {
// 			return false;
// 		}
// 	});

// 	console.log(
// 		`VAL: ${getBoardCoord(x, y)} ALL: ${all} | SYMBOLS: ${symbols}`
// 	);

// 	const touches = symbols.length > 0;

// 	return touches;
// }

// let total = 0;

// lines.forEach((line, boardY) => {
// 	// if (boardY !== 74) {
// 	// 	return;
// 	// }

// 	const lineNS = removeSymbols(line);
// 	console.log(line);
// 	console.log(lineNS);
// 	const numsForLine = lineNS
// 		.split('.')
// 		.map((x) =>
// 			x
// 				.split('')
// 				.filter((y) => z.coerce.number().safeParse(y).success)
// 				.join('')
// 		)
// 		.filter((x) => {
// 			return x !== '';
// 		})
// 		.map((x) => parseInt(x));

// 	console.log(`${boardY}: ${numsForLine}`);

// 	console.log();
// 	console.log(
// 		`Doing board Y ${boardY} - ${numsForLine.length} numbers in line`
// 	);

// 	let touches = 0;

// 	numsForLine.forEach((num) => {
// 		console.log('doing num', num);
// 		const numStr = `${num}`;
// 		const startX = line.indexOf(numStr);
// 		const endX = startX + (numStr.length - 1);
// 		// console.log(`index of ${num}: ${startX} to ${endX}`);

// 		let numDoesTouch = false;
// 		for (let i = startX; i < endX + 1; i++) {
// 			if (coordTouchesSymbol(i, boardY)) {
// 				numDoesTouch = true;
// 			}
// 		}

// 		if (numDoesTouch) {
// 			console.log(`num touches: ${num}`);
// 			touches += 1;
// 			total += num;
// 		}
// 	});

// 	console.log(`Board Y ${boardY} touches - ${touches}`);
// 	console.log();

// 	// console.log(`Nums for line ${boardY}: ${numsForLine}`);
// });

// console.log(`Total: ${total}`);
