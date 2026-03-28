export default function jumpSearch<T = any>(array: T[], value: T) {
	let result = -1;
	let step = Math.round(Math.sqrt(array.length));
	let i = 0;
	let end = array.length - 1;

	while (i <= end) {
		if (array[i] === value) {
			result = i;
			break;
		}

		let currentBlockEndIndex = i + step - 1;
		let currentBlockEnd = array[i + step - 1];
		if (currentBlockEnd >= value) {
			end = currentBlockEndIndex;
			step = 1;
		}

		i += step;
	}

	return result;
}

console.log(jumpSearch([2, 4, 8, 10, 15, 19, 21, 22, 48], 22));
console.log(jumpSearch([2, 4, 8, 10, 15, 19, 20, 21, 22, 48], 22));
console.log(jumpSearch([2, 4, 8, 10, 15, 19, 20, 21, 22, 48], 4));