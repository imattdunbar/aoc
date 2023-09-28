const input = await Bun.file(
	import.meta.path.replace(import.meta.file, 'input.txt')
).text();
