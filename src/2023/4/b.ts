const input = await Bun.file(import.meta.dir + '/input.txt').text();

type Card = {
	winningNums: number[];
	myNums: number[];
	value: number;
	cardNum: number;
};

let cards = input.split('\n').map((line, index) => {
	const cardNum = index + 1;
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
			value = value + 1;
		}
	});

	const out: Card = {
		winningNums,
		myNums,
		value,
		cardNum,
	};

	return out;
});

let allCards = new Map<number, number>();

cards.forEach((card) => {
	allCards.set(card.cardNum, 1);
});

cards.forEach((card) => {
	processsCard(card);
});

function processsCard(card: Card) {
	for (let i = 1; i < card.value + 1; i++) {
		const copyCardNum = card.cardNum + i;
		const copyCard = cards.find((c) => c.cardNum === copyCardNum);
		if (copyCard) {
			const curr = allCards.get(copyCardNum);
			if (curr) {
				allCards.set(copyCardNum, curr + 1);
			}
			processsCard(copyCard);
		}
	}
}

let total = 0;
for (let value of allCards.values()) {
	total += value;
}

console.log(`Total: ${total}`);
