// @ts-nocheck
let input = await Bun.file(import.meta.dir + '/input.txt').text();

let total = 0;

const numWords = {
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
};

input.split('\n').forEach((line) => {
	const firstDigitMatch = line.match(
		/(\d|one|two|three|four|five|six|seven|eight|nine)/
	)[1];

	const lastDigitMatch = line.match(
		/.*(\d|one|two|three|four|five|six|seven|eight|nine).*/
	)[1];

	let first = parseInt(firstDigitMatch);
	let last = parseInt(lastDigitMatch);
	if (Number.isNaN(first)) {
		first = numWords[firstDigitMatch];
	}
	if (Number.isNaN(last)) {
		last = numWords[lastDigitMatch];
	}

	const num = parseInt(`${first}${last}`);

	total += num;
});

console.log(`Total: ${total}`);
