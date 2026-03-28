export default function bubbleSort<T = any>(array: T[]) {
	let result = structuredClone(array);
	let changed!: boolean;
	let n = result.length;
	for (let i = 0; i < result.length; i++) {
		for (let j = 0; j < n; j++) {
			let current = result[j],
				next = result[j + 1];

			if (current > next) {
				[result[j], result[j + 1]] = [next, current];
				changed = true;
			}
		}

		if (!changed) break;
		n--;
	}

	return result;
}

console.log(bubbleSort([1, 45, 23, 1, 65, 23, 76, 120]));