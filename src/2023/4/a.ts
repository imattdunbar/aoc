const input = await Bun.file(import.meta.dir + '/input.txt').text();

type Card = {
	winningNums: number[];
	myNums: number[];
	value: number;
};

const cards = input.split('\n').map((line, index) => {
	const card = line.split(': ')[1].split(' | ');

	const winning = card[0].trim();
	const my = card[1].trim();

	const winningNums: number[] = [];
	const myNums: number[] = [];

	winning.split(' ').forEach((str) => {
		const num = parseInt(str);
		if (!Number.isNaN(num) && !winningNums.includes(num)) {
			winningNums.push(num);
		}
	});

	my.split(' ').forEach((str) => {
		const num = parseInt(str);
		if (!Number.isNaN(num) && !myNums.includes(num)) {
			myNums.push(num);
		}
	});

	let value = 0;
	myNums.forEach((num) => {
		if (winningNums.includes(num)) {
			if (value > 0) {
				value = value * 2;
			} else {
				value = 1;
			}
		}
	});

	const out: Card = {
		winningNums,
		myNums,
		value,
	};

	return out;
});

const total = cards.reduce((acc, card) => {
	return acc + card.value;
}, 0);

console.log(`Total: ${total}`);
