export default function insertionSort<T = any>(array: T[]) {
	const result = structuredClone(array);
	const n = result.length;
	for (let i = 0; i < n; i++) {
		let v = result[i], j = i - 1;
		while (j >= 0 && result[j] > v) {
			result[j + 1] = result[j];
			j--;
		}

		result[j + 1] = v;
	}

	return result;
}

console.log(insertionSort([1, 56, 23, 3, 67, 2, 34]));