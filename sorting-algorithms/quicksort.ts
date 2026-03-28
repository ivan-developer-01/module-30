// Written from memory
export default function quickSort<T = any>(array: T[]): T[] {
	if (array.length <= 1) return array;
	const pivotIndex = Math.floor(Math.random() * array.length);
	const pivot = array[pivotIndex];
	const lessOrEqual = array.filter((item, index) => {
		return index !== pivotIndex && (item <= pivot);
	});
	const greater = array.filter((item) => item > pivot);
	return [...quickSort(lessOrEqual), pivot, ...quickSort(greater)];
}

// This is the original quickSort function from https://codepen.io/ytokarevskaya/pen/jOPLwqN?editors=0011
export function quickSortOriginal<T = any>(array: T[]): T[] {
	if (array.length <= 1) {
		return array;
	} else {
		const pivotPosition = Math.floor(Math.random() * array.length);
		const pivot = array[pivotPosition];
		const less = array.filter((value, index) => {
			const isPivot = index === pivotPosition;
			return !isPivot && (value <= pivot);
		});

		const greater = array.filter(value => value > pivot);
		return [...quickSort(less), pivot, ...quickSort(greater)];
	}
}

const array = [1, 213, 3, 58, 26, 8, 7, 324, 81, 99, 14, 115];
console.log(quickSort(array));