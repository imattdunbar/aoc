// @ts-nocheck
let input = await Bun.file(import.meta.dir + '/input.txt').text();

let total = 0;

input.split('\n').forEach((line) => {
	const digits = line.match(/\d/g);
	const num = parseInt(`${digits[0]}${digits[digits.length - 1]}`);
	total += num;
});

console.log(`Total: ${total}`);
